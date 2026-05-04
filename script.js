/* ===========================
   TABLET RESOURCE - INTERACTIVE SCRIPT
   Product filtering, searching, sorting
   =========================== */

// State
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initializeFilters();
    initializeSearch();
    initializeSort();
    trackPageView();
});

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    let products = [...productData];
    
    // Filter by category
    if (currentCategory !== 'all') {
        products = products.filter(p => p.category === currentCategory);
    }
    
    // Filter by search
    if (searchQuery) {
        products = products.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    // Sort products
    products = sortProducts(products);
    
    // Render
    if (products.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0; color: var(--text-dim);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No products found</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = products.map((product, index) => `
        <div class="product-card" style="animation: fadeInUp 0.5s ease ${index * 0.05}s both;">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                    <a href="${product.affiliateLink}" 
                       class="product-btn" 
                       target="_blank" 
                       rel="noopener noreferrer nofollow"
                       onclick="trackProductClick('${product.name}', '${product.category}')">
                        ${product.cta}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Sort products
function sortProducts(products) {
    switch (currentSort) {
        case 'price-low':
            return products.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        case 'price-high':
            return products.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        case 'name':
            return products.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return products;
    }
}

// Parse price string to number
function parsePrice(priceStr) {
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'tech-tablets': 'Tech',
        'medicine-tablets': 'Medicine',
        'ancient-tablets': 'Ancient',
        'chocolate-tablets': 'Chocolate',
        'writing-tablets': 'Writing',
        'drawing-tablets': 'Drawing',
        'stone-tablets': 'Stone',
        'clay-tablets': 'Clay'
    };
    return names[category] || category;
}

// Initialize category filters
function initializeFilters() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active from all
            categoryCards.forEach(c => c.classList.remove('active'));
            // Add active to clicked
            card.classList.add('active');
            
            // Update category
            currentCategory = card.dataset.category;
            
            // Re-render
            renderProducts();
            
            // Track
            if (window.gtag) {
                gtag('event', 'category_filter', {
                    event_category: 'Products',
                    event_label: currentCategory
                });
            }
        });
    });
}

// Initialize search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value;
            renderProducts();
            
            // Track
            if (window.gtag && searchQuery) {
                gtag('event', 'search', {
                    event_category: 'Products',
                    search_term: searchQuery
                });
            }
        }, 300);
    });
}

// Initialize sort
function initializeSort() {
    const sortSelect = document.getElementById('sortSelect');
    
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
        
        // Track
        if (window.gtag) {
            gtag('event', 'sort_change', {
                event_category: 'Products',
                event_label: currentSort
            });
        }
    });
}

// Track product click with enhanced ecommerce
function trackProductClick(productName, category) {
    const product = productData.find(p => p.name === productName);
    if (product && window.trackProductClick) {
        window.trackProductClick(product, category);
    }
}

// Track page view
function trackPageView() {
    if (window.gtag) {
        gtag('event', 'page_view', {
            page_title: 'Tablet Resource',
            page_location: window.location.href
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

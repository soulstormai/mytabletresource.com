// ============================================
// MY TABLET RESOURCE — SHARED JS
// Progress bar, fade-in, bar animations, GA
// ============================================

// Progress bar
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = Math.min(pct, 100) + '%';
});

// Intersection observer — fade + bars
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    // Fade
    if (e.target.classList.contains('fade')) {
      e.target.classList.add('in');
    }
    // Bar
    if (e.target.classList.contains('bar-fill')) {
      const w = parseFloat(e.target.dataset.w || 0.8);
      e.target.style.transform = `scaleX(${w})`;
      e.target.classList.add('visible');
    }
    io.unobserve(e.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade, .bar-fill').forEach(el => io.observe(el));

// GA affiliate click helper
function trackAffiliate(product, placement) {
  if (typeof gtag === 'function') {
    gtag('event', 'affiliate_click', { product, placement });
  }
}

// Time on page
const _t0 = Date.now();
window.addEventListener('beforeunload', () => {
  const secs = Math.round((Date.now() - _t0) / 1000);
  if (typeof gtag === 'function') gtag('event', 'time_on_page', { seconds: secs });
});

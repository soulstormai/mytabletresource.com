/* ===========================
   data.js - Product Data with Amazon Affiliate Links
   Associate IDs: soulstormai-20, mobile0092dbc-20
   =========================== */

const productData = [
  // Tech Tablets
  {
    id: 1,
    category: 'tech-tablets',
    name: 'iPad Pro M4 11"',
    description: 'Ultra-fast M4 chip with stunning OLED display. Perfect for creative professionals.',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=ipad+pro+m4+11+inch&tag=soulstormai-20',
    cta: 'View on Amazon'
  },
  {
    id: 2,
    category: 'tech-tablets',
    name: 'Samsung Galaxy Tab S9',
    description: 'Premium Android tablet with S Pen. Productivity and entertainment powerhouse.',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404c117?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=samsung+galaxy+tab+s9&tag=mobile0092dbc-20',
    cta: 'Shop Now'
  },
  {
    id: 3,
    category: 'tech-tablets',
    name: 'Microsoft Surface Pro 9',
    description: '2-in-1 laptop and tablet. Professional Windows 11 computing in portable form.',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=microsoft+surface+pro+9&tag=soulstormai-20',
    cta: 'Buy Now'
  },
  
  // Medicine Tablets
  {
    id: 4,
    category: 'medicine-tablets',
    name: 'Aspirin 325mg - 100 Tablets',
    description: 'Pain relief and fever reduction. Trusted over-the-counter medication.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=aspirin+325mg+100+tablets&tag=soulstormai-20',
    cta: 'Buy Now'
  },
  {
    id: 5,
    category: 'medicine-tablets',
    name: 'Vitamin D3 5000 IU',
    description: 'Bone health and immune support. 365 tablets for a full year supply.',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=vitamin+d3+5000+iu&tag=mobile0092dbc-20',
    cta: 'Shop Now'
  },
  {
    id: 6,
    category: 'medicine-tablets',
    name: 'Ibuprofen 200mg',
    description: 'Anti-inflammatory relief. Effective for headaches, muscle aches, arthritis.',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=ibuprofen+200mg&tag=soulstormai-20',
    cta: 'Order Now'
  },
  
  // Chocolate Tablets
  {
    id: 7,
    category: 'chocolate-tablets',
    name: 'Lindt Excellence Dark 85%',
    description: 'Premium Swiss dark chocolate. Intense cocoa flavor for true chocolate lovers.',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4cda83f9?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=lindt+excellence+dark+85&tag=mobile0092dbc-20',
    cta: 'Buy Now'
  },
  {
    id: 8,
    category: 'chocolate-tablets',
    name: 'Godiva Dark Chocolate',
    description: 'Belgian luxury chocolate. Rich, smooth texture with deep cocoa notes.',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=godiva+dark+chocolate+bar&tag=soulstormai-20',
    cta: 'Shop Now'
  },
  {
    id: 9,
    category: 'chocolate-tablets',
    name: 'Green & Black\'s Organic',
    description: 'Ethically sourced organic chocolate. 70% cacao, fair trade certified.',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=green+blacks+organic+chocolate&tag=mobile0092dbc-20',
    cta: 'Order Now'
  },
  
  // Drawing Tablets
  {
    id: 10,
    category: 'drawing-tablets',
    name: 'Wacom Intuos Pro Large',
    description: 'Professional pen tablet. 8192 pressure levels, tilt recognition for artists.',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=wacom+intuos+pro+large&tag=soulstormai-20',
    cta: 'Buy Now'
  },
  {
    id: 11,
    category: 'drawing-tablets',
    name: 'XP-Pen Artist 15.6',
    description: 'HD pen display. Budget-friendly digital illustration for beginners.',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=xp+pen+artist+15.6&tag=mobile0092dbc-20',
    cta: 'Shop Now'
  },
  {
    id: 12,
    category: 'drawing-tablets',
    name: 'Huion Kamvas 22',
    description: '22-inch professional display. Anti-glare screen, wide color gamut.',
    price: '$549',
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=huion+kamvas+22&tag=soulstormai-20',
    cta: 'Order Now'
  },
  
  // Writing Tablets
  {
    id: 13,
    category: 'writing-tablets',
    name: 'reMarkable 2',
    description: 'Paper-like digital notebook. E-ink display for focused writing.',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=remarkable+2+tablet&tag=mobile0092dbc-20',
    cta: 'Buy Now'
  },
  {
    id: 14,
    category: 'writing-tablets',
    name: 'Kindle Scribe',
    description: 'E-reader with stylus. Read, annotate, take notes on 10.2" display.',
    price: '$339',
    image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=kindle+scribe&tag=soulstormai-20',
    cta: 'Shop Now'
  },
  {
    id: 15,
    category: 'writing-tablets',
    name: 'Boogie Board LCD',
    description: 'Reusable writing tablet. Battery-free, eco-friendly notes and sketches.',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=boogie+board+writing+tablet&tag=mobile0092dbc-20',
    cta: 'Order Now'
  },
  
  // Ancient Tablets
  {
    id: 16,
    category: 'ancient-tablets',
    name: 'Rosetta Stone Replica',
    description: 'Museum-quality reproduction. Perfect for history enthusiasts and collectors.',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=rosetta+stone+replica&tag=soulstormai-20',
    cta: 'Buy Replica'
  },
  {
    id: 17,
    category: 'ancient-tablets',
    name: 'Hammurabi Code Tablet',
    description: 'Ancient Babylonian law code replica. Historical artifact reproduction.',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=hammurabi+code+replica&tag=mobile0092dbc-20',
    cta: 'Shop Now'
  },
  {
    id: 18,
    category: 'ancient-tablets',
    name: 'Egyptian Hieroglyphic Stone',
    description: 'Hand-carved hieroglyphics. Authentic-looking aged stone tablet.',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1503177847378-d0e330f21888?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=egyptian+hieroglyphic+tablet&tag=soulstormai-20',
    cta: 'Order Now'
  },
  
  // Stone Tablets
  {
    id: 19,
    category: 'stone-tablets',
    name: '10 Commandments Stone',
    description: 'Biblical tablets replica. Religious home decor and collectible.',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=ten+commandments+stone+tablet&tag=mobile0092dbc-20',
    cta: 'Buy Now'
  },
  {
    id: 20,
    category: 'stone-tablets',
    name: 'Garden Memorial Stone',
    description: 'Personalized memorial tablet. Weather-resistant garden engraving.',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1585128720431-2ad96c6df1b7?w=600&q=80',
    affiliateLink: 'https://www.amazon.com/s?k=garden+memorial+stone+tablet&tag=soulstormai-20',
    cta: 'Shop Now'
  }
];

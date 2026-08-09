/* =========================================================
   SNEAK IN — Separate Media & Asset Management System
   ========================================================= */

const MEDIA_CONFIG = {
  // Category & Hero Video References (Folder: videos/)
  videos: {
    hero: 'videos/vid2.mp4',
    slippers: 'videos/best.mp4',
    sneakers: 'videos/dunk.mp4',
    highrise: 'videos/blazer.mp4',
    sports: 'videos/jordan.mp4',
    boots: 'videos/running.mp4',
    apparel: 'videos/apparel.mp4'
  },

  // Fallback Images per Category (Folder: images/)
  fallbacks: {
    slippers: 'images/Bestseller1.avif',
    sneakers: 'images/Dunk1.jpg',
    highrise: 'images/Blazer1.avif',
    sports: 'images/Jordan1.avif',
    boots: 'images/Running1.avif',
    shirts: 'images/shirt1.png',
    jeans: 'images/jeans1.png',
    shorts: 'images/shorts1.png',
    sportswear: 'images/sports1.png',
    apparel: 'images/shirt1.png',
    default: 'images/logo2.png'
  },

  // Banner Graphic CSS Classes
  banners: {
    shirts: 'banner-shirts',
    jeans: 'banner-jeans',
    shorts: 'banner-shorts',
    sportswear: 'banner-sportswear',
    apparel: 'banner-shirts'
  },

  // Category Subtitles
  subtitles: {
    slippers: 'Fan-favorite footwear and slides built for cloud-soft daily ease.',
    sneakers: 'Court classics and low-profile retro icons engineered for iconic style.',
    highrise: 'Timeless mid and low silhouettes crafted with vintage lines and suede accents.',
    sports: 'Heritage high-tops, low retros, and grail colorways with premium leather.',
    boots: 'High-output performance runners with ultra-responsive Zoom cushioning.',
    shirts: 'Heavyweight cotton tees, boxy polos, and acid-wash streetwear shirts.',
    jeans: 'Loose fit vintage denim, carpenter pants, and straight leg raw indigo jeans.',
    shorts: 'ActiveTech mesh training shorts, utility cargo shorts, and sweat fleece shorts.',
    sportswear: 'Dri-FIT tech hoodies, fleece track jackets, and high-performance training gear.',
    apparel: 'Curated streetwear essentials and versatile everyday apparel.'
  },

  // Product Image Maps by Category (Folder: images/)
  productImages: {
    slippers: [
      'images/Bestseller1.avif', 'images/Bestseller2.avif', 'images/Bestseller3.avif', 'images/Bestseller4.avif', 'images/Bestseller5.avif',
      'images/Bestseller6.avif', 'images/Bestseller7.avif', 'images/Bestseller8.avif', 'images/Bestseller9.avif', 'images/Bestseller10.avif'
    ],
    sneakers: [
      'images/Dunk1.jpg', 'images/Dunk2.avif', 'images/Dunk3.avif', 'images/Dunk4.avif', 'images/Dunk5.avif',
      'images/Dunk6.avif', 'images/Dunk7.avif', 'images/Dunk8.avif', 'images/Dunk9.avif', 'images/Dunk10.avif'
    ],
    highrise: [
      'images/Blazer1.avif', 'images/Blazer2.avif', 'images/Blazer3.avif', 'images/Blazer4.avif', 'images/Blazer5.avif',
      'images/Blazer6.avif', 'images/Blazer7.avif', 'images/Blazer8.avif', 'images/Blazer9.avif', 'images/Blazer10.avif'
    ],
    sports: [
      'images/Jordan1.avif', 'images/Jordan2.avif', 'images/Jordan3.avif', 'images/Jordan4.avif', 'images/Jordan5.avif',
      'images/Jordan6.avif', 'images/Jordan7.avif', 'images/Jordan8.avif', 'images/Jordan9.avif', 'images/Jordan10.avif'
    ],
    boots: [
      'images/Running1.avif', 'images/Running2.avif', 'images/Running3.avif', 'images/Running4.avif', 'images/Running5.avif',
      'images/Running6.avif', 'images/Running7.avif', 'images/Running8.avif', 'images/Running9.avif', 'images/Running10.avif'
    ],
    shirts: [
      'images/shirt1.png', 'images/shirt2.png', 'images/shirt3.png', 'images/shirt4.png',
      'images/shirt5.png', 'images/shirt6.png', 'images/shirt7.png', 'images/shirt8.png'
    ],
    jeans: [
      'images/jeans1.png', 'images/jeans2.png', 'images/jeans3.png', 'images/jeans4.png',
      'images/jeans5.png', 'images/jeans6.png', 'images/jeans7.png', 'images/jeans8.png'
    ],
    shorts: [
      'images/shorts1.png', 'images/shorts2.png', 'images/shorts3.png', 'images/shorts4.png',
      'images/shorts5.png', 'images/shorts6.png', 'images/shorts7.png', 'images/shorts8.png'
    ],
    sportswear: [
      'images/sports1.png', 'images/sports2.png', 'images/sports3.png', 'images/sports4.png',
      'images/sports5.png', 'images/sports6.png', 'images/sports7.png', 'images/sports8.png'
    ],
    apparel: [
      'images/shirt1.png', 'images/shirt2.png', 'images/jeans1.png', 'images/shorts1.png', 'images/sports1.png', 'images/sports2.png'
    ]
  },

  // Helper Utilities
  getVideo(category) {
    return this.videos[category] || null;
  },
  getFallback(category) {
    return this.fallbacks[category] || this.fallbacks.default;
  },
  getBanner(category) {
    return this.banners[category] || '';
  },
  getImages(category) {
    return this.productImages[category] || [];
  }
};

// Expose globally for browser environment
if (typeof window !== 'undefined') {
  window.MEDIA_CONFIG = MEDIA_CONFIG;
}

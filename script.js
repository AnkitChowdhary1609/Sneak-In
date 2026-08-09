/* =========================================================
   SNEAK IN — Premium E-Commerce Engine
   ========================================================= */

/* ---------- Product Categories & Meta ---------- */
/* ---------- Product Categories & Meta (Media sourced from media.js) ---------- */
const CATEGORY_META = {
  slippers: { label: 'Best Sellers', prefix: 'BS', fallback: MEDIA_CONFIG.getFallback('slippers'), video: MEDIA_CONFIG.getVideo('slippers'), subtitle: MEDIA_CONFIG.subtitles.slippers },
  sneakers: { label: 'Dunks', prefix: 'DK', fallback: MEDIA_CONFIG.getFallback('sneakers'), video: MEDIA_CONFIG.getVideo('sneakers'), subtitle: MEDIA_CONFIG.subtitles.sneakers },
  highrise: { label: 'Blazers', prefix: 'BZ', fallback: MEDIA_CONFIG.getFallback('highrise'), video: MEDIA_CONFIG.getVideo('highrise'), subtitle: MEDIA_CONFIG.subtitles.highrise },
  sports: { label: 'Jordans', prefix: 'JD', fallback: MEDIA_CONFIG.getFallback('sports'), video: MEDIA_CONFIG.getVideo('sports'), subtitle: MEDIA_CONFIG.subtitles.sports },
  boots: { label: 'Running', prefix: 'RN', fallback: MEDIA_CONFIG.getFallback('boots'), video: MEDIA_CONFIG.getVideo('boots'), subtitle: MEDIA_CONFIG.subtitles.boots },
  shirts: { label: 'Shirts & Tees', prefix: 'SH', fallback: MEDIA_CONFIG.getFallback('shirts'), banner: MEDIA_CONFIG.getBanner('shirts'), subtitle: MEDIA_CONFIG.subtitles.shirts },
  jeans: { label: 'Jeans & Denim', prefix: 'JN', fallback: MEDIA_CONFIG.getFallback('jeans'), banner: MEDIA_CONFIG.getBanner('jeans'), subtitle: MEDIA_CONFIG.subtitles.jeans },
  shorts: { label: 'Shorts', prefix: 'ST', fallback: MEDIA_CONFIG.getFallback('shorts'), banner: MEDIA_CONFIG.getBanner('shorts'), subtitle: MEDIA_CONFIG.subtitles.shorts },
  sportswear: { label: 'Sportswear', prefix: 'SW', fallback: MEDIA_CONFIG.getFallback('sportswear'), banner: MEDIA_CONFIG.getBanner('sportswear'), subtitle: MEDIA_CONFIG.subtitles.sportswear },
  apparel: { label: 'Apparel', prefix: 'AP', fallback: MEDIA_CONFIG.getFallback('apparel'), banner: MEDIA_CONFIG.getBanner('apparel'), subtitle: MEDIA_CONFIG.subtitles.apparel }
};

const RAW_PRODUCTS = {
  slippers: [
    ['images/Bestseller1.avif', 'Nike Air Max 90 Slide', 7995, 25, 5995],
    ['images/Bestseller2.avif', 'Nike Victori One', 2995, 20, 2395],
    ['images/Bestseller3.avif', 'Nike Benassi JDI', 2295, 30, 1605],
    ['images/Bestseller4.avif', 'Nike Asuna Slide', 3995, 25, 2995],
    ['images/Bestseller5.avif', 'Nike Offcourt Slide', 3495, 20, 2795],
    ['images/Bestseller6.avif', 'Nike Jordan Break Slide', 2995, 30, 2095],
    ['images/Bestseller7.avif', 'Nike Kawa Shower', 1495, 20, 1195],
    ['images/Bestseller8.avif', 'Nike Jordan Hydro 6', 3995, 25, 2995],
    ['images/Bestseller9.avif', 'Nike Air Max Cirro', 4995, 30, 3495],
    ['images/Bestseller10.avif', 'Nike Jordan Super Play', 3995, 25, 2995]
  ],
  sneakers: [
    ['images/Dunk1.jpg', 'Nike Dunk Low Retro', 8295, 25, 6220],
    ['images/Dunk2.avif', 'Nike Dunk High', 9695, 20, 7756],
    ['images/Dunk3.avif', 'Nike Dunk Low SE', 8295, 30, 5807],
    ['images/Dunk4.avif', 'Nike Dunk Low Panda', 8295, 25, 6220],
    ['images/Dunk5.avif', 'Nike Dunk Low By You', 9695, 20, 7756],
    ['images/Dunk6.avif', 'Nike Dunk High SE', 10295, 30, 7207],
    ['images/Dunk7.avif', 'Nike Dunk Low Premium', 8295, 20, 6636],
    ['images/Dunk8.avif', 'Nike Dunk Low Disrupt', 9695, 25, 7271],
    ['images/Dunk9.avif', 'Nike Dunk High 1985', 10295, 30, 7207],
    ['images/Dunk10.avif', 'Nike Dunk Low Next Nature', 8295, 20, 6636]
  ],
  highrise: [
    ["images/Blazer1.avif", "Nike Blazer Mid '77 Vintage", 8195, 25, 6146],
    ['images/Blazer2.avif', 'Nike Blazer Low Platform', 7495, 20, 5996],
    ['images/Blazer3.avif', 'Nike Blazer Mid Rebel', 8195, 30, 5737],
    ["images/Blazer4.avif", "Nike Blazer Low '77 Jumbo", 7495, 25, 5621],
    ['images/Blazer5.avif', 'Nike Blazer Mid Suede', 8195, 20, 6556],
    ['images/Blazer6.avif', 'Nike Blazer Low By You', 7495, 30, 5247],
    ['images/Blazer7.avif', 'Nike Blazer Mid 77 SE', 8195, 25, 6146],
    ['images/Blazer8.avif', 'Nike Blazer Low 77 Vintage', 7495, 20, 5996],
    ['images/Blazer9.avif', 'Nike Blazer Mid 77 Jumbo', 8195, 30, 5737],
    ['images/Blazer10.avif', 'Nike Blazer Low Platform SE', 7495, 25, 5621]
  ],
  sports: [
    ['images/Jordan1.avif', 'Air Jordan 1 Retro High OG', 16995, 25, 12746],
    ['images/Jordan2.avif', 'Air Jordan 1 Low', 10295, 20, 8236],
    ['images/Jordan3.avif', 'Air Jordan 1 Mid', 11495, 30, 8047],
    ['images/Jordan4.avif', 'Air Jordan 1 Zoom CMFT', 13995, 25, 10496],
    ['images/Jordan5.avif', 'Air Jordan 1 Elevate High', 14495, 20, 11596],
    ['images/Jordan6.avif', 'Air Jordan 1 KO', 13995, 30, 9797],
    ['images/Jordan7.avif', 'Air Jordan 1 Mid SE', 11495, 25, 8621],
    ['images/Jordan8.avif', 'Air Jordan 1 Low OG', 10295, 20, 8236],
    ['images/Jordan9.avif', 'Air Jordan 1 Mid Craft', 11495, 30, 8047],
    ['images/Jordan10.avif', 'Air Jordan 1 Elevate Low', 10295, 25, 7721]
  ],
  boots: [
    ['images/Running1.avif', 'Nike Air Zoom Pegasus 40', 13995, 25, 10496],
    ['images/Running2.avif', 'Nike ZoomX Vaporfly Next% 3', 25995, 20, 20796],
    ['images/Running3.avif', 'Nike Air Zoom Alphafly NEXT% 2', 29995, 30, 20997],
    ['images/Running4.avif', 'Nike React Infinity Run Flyknit 3', 14995, 25, 11246],
    ['images/Running5.avif', 'Nike Air Zoom Structure 25', 12995, 20, 10396],
    ['images/Running6.avif', 'Nike Air Zoom Winflo 10', 10795, 30, 7557],
    ['images/Running7.avif', 'Nike Downshifter 12', 6995, 25, 5246],
    ['images/Running8.avif', 'Nike Revolution 6', 4995, 20, 3996],
    ['images/Running9.avif', 'Nike Air Zoom Rival Fly 3', 8995, 30, 6297],
    ['images/Running10.avif', 'Nike Flex Experience Run 11', 5995, 25, 4496]
  ],
  shirts: [
    ['images/shirt1.png', 'Sneak In Heavyweight Oversized Tee', 2495, 20, 1996],
    ['images/shirt2.png', 'Nike Sportswear Club Graphic Tee', 1995, 15, 1695],
    ['images/shirt3.png', 'Jordan Flight Heritage Boxy Polo', 2995, 25, 2246],
    ['images/shirt4.png', 'Sneak In Acid Wash Minimalist Tee', 2295, 20, 1836],
    ['images/shirt5.png', 'Nike Dri-FIT UV Running Performance Shirt', 2495, 30, 1746],
    ['images/shirt6.png', 'Sneak In Essential Heavy Cotton Tee', 1895, 20, 1516],
    ['images/shirt7.png', 'Nike Air Max Vintage Washed Tee', 2295, 25, 1721],
    ['images/shirt8.png', 'Sneak In Streetwear Drop-Shoulder Tee', 2695, 20, 2156]
  ],
  jeans: [
    ['images/jeans1.png', 'Sneak In Loose Fit Vintage Wash Denim', 4495, 25, 3371],
    ['images/jeans2.png', 'Nike SB Carpenter Utility Denim Pants', 4995, 20, 3996],
    ['images/jeans3.png', 'Sneak In Straight Leg Raw Indigo Jeans', 3995, 20, 3196],
    ['images/jeans4.png', 'Jordan Essentials Utility Heavy Denim', 5495, 30, 3846],
    ['images/jeans5.png', 'Sneak In Distressed Wide-Leg Trousers', 4295, 20, 3436],
    ['images/jeans6.png', 'Nike Life Heavy Baggy Denim', 5995, 25, 4496],
    ['images/jeans7.png', 'Sneak In Tapered Fit Comfort Jeans', 3795, 20, 3036],
    ['images/jeans8.png', 'Jordan Flight Heritage Heritage Trousers', 5295, 15, 4500]
  ],
  shorts: [
    ['images/shorts1.png', 'Sneak In ActiveTech Mesh Training Shorts', 1895, 20, 1516],
    ['images/shorts2.png', 'Nike Solo Swoosh Fleece Everyday Shorts', 2995, 25, 2246],
    ['images/shorts3.png', 'Sneak In Heavyweight Boxy Sweat Shorts', 2295, 20, 1836],
    ['images/shorts4.png', 'Nike Club Fleece Utility Cargo Shorts', 2795, 30, 1956],
    ['images/shorts5.png', 'Sneak In Pro Runner Split Motion Shorts', 1695, 15, 1440],
    ['images/shorts6.png', 'Jordan Diamond Classic Basketball Shorts', 3295, 20, 2636],
    ['images/shorts7.png', 'Sneak In Streetwear Casual Chino Shorts', 2495, 25, 1871],
    ['images/shorts8.png', 'Nike Dri-FIT Flex High-Output Shorts', 2595, 20, 2076]
  ],
  sportswear: [
    ['images/sports1.png', 'Sneak In Tech Fleece Pullover Hoodie', 5995, 25, 4496],
    ['images/sports2.png', 'Nike Sportswear Tech Fleece Full-Zip', 8995, 20, 7196],
    ['images/sports3.png', 'Sneak In Seamless Active Compression Top', 2495, 20, 1996],
    ['images/sports4.png', 'Jordan Essentials Statement Athletic Hoodie', 6495, 30, 4546],
    ['images/sports5.png', 'Nike Dri-FIT Challenger Track Trousers', 4295, 20, 3436],
    ['images/sports6.png', 'Sneak In Windbreaker Performance Jacket', 5495, 25, 4121],
    ['images/sports7.png', 'Nike Therma-FIT Insulated Fitness Hoodie', 4995, 20, 3996],
    ['images/sports8.png', 'Sneak In Pro Tracksuit Athletic Set', 7495, 25, 5621]
  ],
  apparel: [
    ['images/shirt1.png', 'Sneak In Signature Tee', 995, 10, 895],
    ['images/shirt2.png', 'Performance Polo', 1295, 15, 1099],
    ['images/jeans1.png', 'Relaxed Fit Jeans', 2295, 20, 1836],
    ['images/shorts1.png', 'Everyday Shorts', 795, 10, 716],
    ['images/sports1.png', 'Tech Training Tee', 1095, 15, 931],
    ['images/sports2.png', 'Lightweight Track Pants', 1595, 20, 1276]
  ]
};

const SIZES = [6, 7, 8, 9, 10, 11];
const SIZES_APPAREL = ['S', 'M', 'L', 'XL', 'XXL'];

const PRODUCTS = [];
Object.entries(RAW_PRODUCTS).forEach(([cat, items]) => {
  items.forEach(([img, name, mrp, discount, price], i) => {
    PRODUCTS.push({
      id: `${cat}-${i + 1}`,
      category: cat,
      categoryLabel: CATEGORY_META[cat].label,
      code: `${CATEGORY_META[cat].prefix}-${String(i + 1).padStart(2, '0')}`,
      img, name, mrp, discount, price
    });
  });
});

const money = (n) => '₹' + Number(n).toLocaleString('en-IN');

/* ---------- State (Persisted) ---------- */
const store = {
  load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { }
  }
};

let cart = store.load('sneakin_cart', []);           // [{id, size, qty}]
let wishlist = store.load('sneakin_wishlist', []);   // [id]
let savedAddresses = store.load('sneakin_addresses', []); // [{name, phone, email, line1, line2, city, postal, state}]
let placedOrders = store.load('sneakin_orders', []); // [{id, date, items, address, deliveryMethod, total, status}]

let appliedCoupon = null; // {code: 'SNEAK20', type: 'percent', val: 20} or {type: 'flat', val: 1000} or {type: 'freeship'}
const FREE_SHIP_THRESHOLD = 4999;

/* ---------- Toasts ---------- */
function showToast(message, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

/* ---------- Image Fallback ---------- */
function getFallbackImg(cat) {
  return (CATEGORY_META[cat] && CATEGORY_META[cat].fallback) ? CATEGORY_META[cat].fallback : 'images/logo2.png';
}

/* ---------- Rendering: product cards ---------- */
function cardHTML(p) {
  const isWished = wishlist.includes(p.id);
  const fallback = getFallbackImg(p.category);
  const aiScore = (95 + (p.id.charCodeAt(0) % 5)).toFixed(1);
  return `
    <div class="product-card ai-enhanced-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      <div class="card-media">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';">
        <span class="card-discount-tag">${p.discount}% OFF</span>
        <span class="ai-match-tag">✨ ${aiScore}% AI Match</span>
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-wish="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">${isWished ? '♥' : '♡'}</button>
        <button class="card-quick-add" data-quickadd="${p.id}">Select size &amp; add</button>
      </div>
      <div class="card-code">${p.code} · ${p.categoryLabel}</div>
      <h3>${p.name}</h3>
      <div class="product-pricing">
        <span class="mrp">MRP: <s>${money(p.mrp)}</s></span>
        <span class="discount-badge">${p.discount}% OFF</span>
        <span class="new-price">${money(p.price)}</span>
      </div>
    </div>`;
}

/* ---------- Product card event binding ---------- */
let activeProductPageState = { id: null, size: null, qty: 1 };

function openProductPage(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  trackRecentlyViewed(id);
  const isApparelCategory = ['shirts', 'jeans', 'shorts', 'sportswear', 'apparel'].includes(p.category);
  const sizeList = isApparelCategory ? SIZES_APPAREL : SIZES;
  const defaultSize = isApparelCategory ? 'M' : 8;

  activeProductPageState = { id, size: defaultSize, qty: 1 };

  const mainFeed = document.getElementById('main');
  const pageView = document.getElementById('product-page-view');
  if (!pageView) return;

  const fallback = getFallbackImg(p.category);
  const isWished = wishlist.includes(id);
  const aiScore = (95 + (p.id.charCodeAt(0) % 5)).toFixed(1);

  document.getElementById('p-page-cat-label').textContent = p.categoryLabel;
  document.getElementById('p-page-name-breadcrumb').textContent = p.name;
  document.getElementById('p-page-ai-badge').textContent = `✨ ${aiScore}% AI Match Score`;

  const mainImg = document.getElementById('p-page-main-img');
  if (mainImg) {
    mainImg.src = p.img;
    mainImg.onerror = () => { mainImg.src = fallback; };
  }

  document.getElementById('p-page-tag').textContent = `${p.discount}% OFF`;
  document.getElementById('p-page-code').textContent = `${p.code} · ${p.categoryLabel}`;
  document.getElementById('p-page-title').textContent = p.name;
  document.getElementById('p-page-mrp').innerHTML = `MRP: <s>${money(p.mrp)}</s>`;
  document.getElementById('p-page-discount').textContent = `${p.discount}% OFF`;
  document.getElementById('p-page-price').textContent = money(p.price);

  const sizesContainer = document.getElementById('p-page-sizes');
  if (sizesContainer) {
    sizesContainer.innerHTML = sizeList.map(s => `
      <button class="size-chip ${String(s) === String(defaultSize) ? 'selected' : ''}" data-psize="${s}">${s}</button>
    `).join('');

    sizesContainer.querySelectorAll('[data-psize]').forEach(chip => {
      chip.addEventListener('click', () => {
        sizesContainer.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        const raw = chip.dataset.psize;
        activeProductPageState.size = isNaN(Number(raw)) ? raw : Number(raw);
      });
    });
  }

  const thumbsContainer = document.getElementById('p-page-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = `
      <img src="${p.img}" class="p-thumb active" onerror="this.src='${fallback}';">
      <img src="${fallback}" class="p-thumb">
    `;
    thumbsContainer.querySelectorAll('.p-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.p-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = thumb.src;
      });
    });
  }

  const wishBtn = document.getElementById('p-page-wishlist');
  if (wishBtn) {
    wishBtn.textContent = isWished ? '♥ Saved' : '♡ Save';
    wishBtn.onclick = () => {
      toggleWishlist(id);
      wishBtn.textContent = wishlist.includes(id) ? '♥ Saved' : '♡ Save';
    };
  }

  const addCartBtn = document.getElementById('p-page-add-cart');
  if (addCartBtn) {
    addCartBtn.onclick = () => {
      addToCart(id, activeProductPageState.size, 1);
      showToast(`${p.name} · Size ${activeProductPageState.size} added to cart`, '🛍️');
      openDrawer('cart');
    };
  }

  const buyNowBtn = document.getElementById('p-page-buy-now');
  if (buyNowBtn) {
    buyNowBtn.onclick = () => {
      addToCart(id, activeProductPageState.size, 1);
      openPaymentModal();
    };
  }

  const predictBtn = document.getElementById('p-page-ai-predict');
  const fitMsg = document.getElementById('p-page-ai-fit-msg');
  if (predictBtn && fitMsg) {
    predictBtn.disabled = false;
    predictBtn.textContent = 'Analyze Precision Fit ⚡';
    fitMsg.innerHTML = 'Select your height/weight or click Analyze for 99.8% true-to-size matching.';
    predictBtn.onclick = () => {
      predictBtn.disabled = true;
      predictBtn.textContent = 'Analyzing Neural Data...';
      setTimeout(() => {
        fitMsg.innerHTML = `✨ <strong>AI Precision Prediction:</strong> Recommended Size <strong>${defaultSize}</strong> (99.8% precision match for true-to-size comfort).`;
        predictBtn.textContent = 'Matched ✓';
        showToast(`AI size prediction: ${defaultSize}`, '🤖');
      }, 600);
    };
  }

  if (mainFeed) mainFeed.style.display = 'none';
  pageView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeProductPage() {
  const mainFeed = document.getElementById('main');
  const pageView = document.getElementById('product-page-view');
  if (pageView) pageView.style.display = 'none';
  if (mainFeed) mainFeed.style.display = 'block';
}

function bindProductCardEvents() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.onclick = (e) => {
      if (e.target.closest('[data-wish]')) return;
      openProductPage(card.dataset.id);
    };
    card.onkeydown = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('[data-wish]')) {
        e.preventDefault();
        openProductPage(card.dataset.id);
      }
    };
  });
  document.querySelectorAll('[data-wish]').forEach(btn => {
    btn.onclick = (e) => { e.stopPropagation(); toggleWishlist(btn.dataset.wish); };
  });
  document.querySelectorAll('[data-quickadd]').forEach(btn => {
    btn.onclick = (e) => { e.stopPropagation(); openProductPage(btn.dataset.quickadd); };
  });
}

function renderCategoryCarousels() {
  Object.keys(CATEGORY_META).forEach((cat) => {
    const container = document.getElementById(`${cat}-carousel`);
    if (!container) return;
    container.innerHTML = PRODUCTS.filter(p => p.category === cat).map(cardHTML).join('');
  });
  bindProductCardEvents();
}

/* ---------- Search / Filter / Sort ---------- */
const searchState = { query: '', category: 'all', sort: 'relevance' };

/* ---------- Curated Collections ---------- */
const COLLECTIONS = {
  'under-10k': { label: 'Under ₹10,000', filter: p => p.price < 10000 },
  'under-20k': { label: 'Under ₹20,000', filter: p => p.price < 20000 },
  'holy-grails': { label: 'The Holy Grails', filter: p => p.price >= 13000 },
  'under-retail': { label: 'Best Value · Under Retail', filter: p => p.discount >= 25 },
  'popular-collabs': { label: 'Popular Collabs', filter: p => p.category === 'sports' || p.category === 'sneakers' }
};
let activeCollection = null;

function matches(p, q) {
  if (!q) return true;
  const hay = `${p.name} ${p.categoryLabel} ${p.code}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}

function sortProducts(list, sort) {
  const arr = [...list];
  if (sort === 'price-asc') arr.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') arr.sort((a, b) => b.price - a.price);
  else if (sort === 'discount') arr.sort((a, b) => b.discount - a.discount);
  return arr;
}

function runSearch() {
  const { query, category, sort } = searchState;
  const browseSections = document.getElementById('browse-sections');
  const resultsEl = document.getElementById('search-results');
  const emptyEl = document.getElementById('search-empty');
  const clearBtn = document.getElementById('shop-search-clear');
  const collectionSpace = document.getElementById('collection-showcase-space');
  const collectionFilterHeading = document.getElementById('collection-filter-heading');
  const q = query.trim();

  if (clearBtn) clearBtn.classList.toggle('show', q.length > 0);

  // Mode 0: Curated Collection Tile Active -> Filter across ALL categories by price/discount rule
  if (activeCollection && COLLECTIONS[activeCollection]) {
    if (browseSections) browseSections.classList.add('hidden');
    if (collectionSpace) collectionSpace.style.display = 'none';
    if (collectionFilterHeading) {
      collectionFilterHeading.style.display = 'flex';
      const titleEl = document.getElementById('collection-filter-title');
      if (titleEl) titleEl.textContent = COLLECTIONS[activeCollection].label;
    }

    let list = PRODUCTS.filter(COLLECTIONS[activeCollection].filter);
    if (q) list = list.filter(p => matches(p, q));
    list = sortProducts(list, sort);

    if (list.length === 0) {
      if (resultsEl) { resultsEl.classList.remove('active'); resultsEl.innerHTML = ''; }
      if (emptyEl) emptyEl.classList.add('active');
    } else {
      if (emptyEl) emptyEl.classList.remove('active');
      if (resultsEl) {
        resultsEl.classList.add('active');
        resultsEl.innerHTML = list.map(cardHTML).join('');
        bindProductCardEvents();
      }
    }
    return;
  }
  if (collectionFilterHeading) collectionFilterHeading.style.display = 'none';

  // Mode 1: Typing text search query -> Render search results grid
  if (q.length > 0) {
    if (browseSections) browseSections.classList.add('hidden');
    if (collectionSpace) collectionSpace.style.display = 'none';

    let list = PRODUCTS.filter(p => (category === 'all' || p.category === category) && matches(p, q));
    list = sortProducts(list, sort);

    if (list.length === 0) {
      if (resultsEl) { resultsEl.classList.remove('active'); resultsEl.innerHTML = ''; }
      if (emptyEl) emptyEl.classList.add('active');
    } else {
      if (emptyEl) emptyEl.classList.remove('active');
      if (resultsEl) {
        resultsEl.classList.add('active');
        resultsEl.innerHTML = list.map(cardHTML).join('');
        bindProductCardEvents();
      }
    }
  }
  // Mode 2: Category Selected -> Open Dedicated Collection Showcase Workspace Space ("in the new space")
  else if (category !== 'all') {
    if (browseSections) browseSections.classList.add('hidden');
    if (resultsEl) { resultsEl.classList.remove('active'); resultsEl.innerHTML = ''; }
    if (emptyEl) emptyEl.classList.remove('active');

    if (collectionSpace) {
      collectionSpace.style.display = 'block';

      const meta = CATEGORY_META[category] || { label: category, subtitle: 'Curated collection drop.', fallback: 'images/logo2.png' };
      const titleEl = document.getElementById('collection-space-title');
      const subEl = document.getElementById('collection-space-subtitle');
      const countEl = document.getElementById('collection-space-count');
      const bannerEl = document.getElementById('collection-space-banner');
      const videoEl = document.getElementById('collection-space-video');
      const gridEl = document.getElementById('collection-grid');

      if (titleEl) titleEl.textContent = meta.label;
      if (subEl) subEl.textContent = meta.subtitle || 'Explore our high-performance styles engineered for standout daily wear.';

      let list = PRODUCTS.filter(p => p.category === category);
      list = sortProducts(list, sort);

      if (countEl) countEl.textContent = `${list.length} Styles Available`;

      if (bannerEl) {
        if (meta.banner) {
          bannerEl.className = `collection-space-banner ${meta.banner}`;
          if (videoEl) videoEl.style.display = 'none';
        } else if (meta.video) {
          bannerEl.className = 'collection-space-banner';
          if (videoEl) {
            videoEl.src = meta.video;
            videoEl.style.display = 'block';
          }
        } else {
          bannerEl.className = 'collection-space-banner';
          if (videoEl) videoEl.style.display = 'none';
        }
      }

      if (gridEl) {
        gridEl.innerHTML = list.map(cardHTML).join('');
        bindProductCardEvents();
      }

      collectionSpace.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // Mode 3: All Categories Selected -> Return to Multi-Carousel Homepage View
  else {
    if (resultsEl) { resultsEl.classList.remove('active'); resultsEl.innerHTML = ''; }
    if (emptyEl) emptyEl.classList.remove('active');
    if (collectionSpace) collectionSpace.style.display = 'none';
    if (browseSections) {
      browseSections.classList.remove('hidden');
      document.querySelectorAll('.product-category').forEach(sec => sec.style.display = 'block');
    }
  }
}

function bindSearchControls() {
  const shopSearch = document.getElementById('shop-search');
  const globalSearch = document.getElementById('global-search');
  const clearBtn = document.getElementById('shop-search-clear');
  const chips = document.querySelectorAll('.chip');
  const sortSelect = document.getElementById('sort-select');

  const syncFromShop = () => {
    activeCollection = null;
    searchState.query = shopSearch.value;
    if (globalSearch) globalSearch.value = shopSearch.value;
    runSearch();
  };
  if (shopSearch) shopSearch.addEventListener('input', syncFromShop);

  if (globalSearch) {
    globalSearch.addEventListener('input', () => {
      activeCollection = null;
      if (shopSearch) shopSearch.value = globalSearch.value;
      searchState.query = globalSearch.value;
      runSearch();
      if (globalSearch.value.trim()) {
        const prodSec = document.getElementById('products');
        if (prodSec) prodSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (shopSearch) shopSearch.value = '';
      if (globalSearch) globalSearch.value = '';
      searchState.query = '';
      runSearch();
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeCollection = null;
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      searchState.category = chip.dataset.cat;
      runSearch();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      searchState.sort = sortSelect.value;
      runSearch();
    });
  }

  // Curated Collection Tiles
  document.querySelectorAll('.collection-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      activeCollection = tile.dataset.collection;
      searchState.query = '';
      searchState.category = 'all';
      if (shopSearch) shopSearch.value = '';
      if (globalSearch) globalSearch.value = '';
      chips.forEach(c => c.classList.toggle('active', c.dataset.cat === 'all'));
      runSearch();
      const prodSec = document.getElementById('products');
      if (prodSec) prodSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const collectionClearBtn = document.getElementById('collection-filter-clear');
  if (collectionClearBtn) {
    collectionClearBtn.addEventListener('click', () => {
      activeCollection = null;
      runSearch();
    });
  }
}

/* ---------- Cart & Discounts ---------- */
function cartLine(id, size) {
  return cart.find(l => l.id === id && String(l.size) === String(size));
}

function addToCart(id, size, qty = 1) {
  const existing = cartLine(id, size);
  if (existing) existing.qty += qty;
  else cart.push({ id, size, qty });
  store.save('sneakin_cart', cart);
  renderCart();
  updateBadges();
}

function updateCartQty(id, size, delta) {
  const line = cartLine(id, size);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(l => !(l.id === id && String(l.size) === String(size)));
  store.save('sneakin_cart', cart);
  renderCart();
  updateBadges();
}

function removeFromCart(id, size) {
  cart = cart.filter(l => !(l.id === id && String(l.size) === String(size)));
  store.save('sneakin_cart', cart);
  renderCart();
  updateBadges();
}

function cartSubtotal() {
  return cart.reduce((sum, l) => {
    const p = PRODUCTS.find(pr => pr.id === l.id);
    return sum + (p ? p.price * l.qty : 0);
  }, 0);
}

function calculateDiscount(subtotal) {
  if (!appliedCoupon) return 0;
  if (appliedCoupon.type === 'percent') {
    return Math.round((subtotal * appliedCoupon.val) / 100);
  }
  if (appliedCoupon.type === 'flat') {
    return subtotal >= 3999 ? appliedCoupon.val : 0;
  }
  return 0;
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountWrap = document.getElementById('cart-discount-wrap');
  const discountValEl = document.getElementById('cart-discount-val');
  const discountCodeName = document.getElementById('discount-code-name');
  const finalTotalEl = document.getElementById('cart-final-total');
  const fillEl = document.getElementById('shipping-bar-fill');
  const msgEl = document.getElementById('shipping-msg');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '<div class="drawer-empty">Your cart is empty.<br>Browse the drop and add your size.</div>';
  } else {
    body.innerHTML = cart.map(line => {
      const p = PRODUCTS.find(pr => pr.id === line.id);
      if (!p) return '';
      const fallback = getFallbackImg(p.category);
      return `
        <div class="drawer-item">
          <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='${fallback}';">
          <div class="drawer-item-info">
            <h4>${p.name}</h4>
            <div class="drawer-item-meta">Size: ${line.size} · ${p.code}</div>
            <div class="drawer-item-row">
              <div class="drawer-qty">
                <button data-cartminus="${p.id}|${line.size}" aria-label="Decrease quantity">−</button>
                <span>${line.qty}</span>
                <button data-cartplus="${p.id}|${line.size}" aria-label="Increase quantity">+</button>
              </div>
              <span class="drawer-item-price">${money(p.price * line.qty)}</span>
            </div>
            <button class="drawer-remove" data-cartremove="${p.id}|${line.size}">Remove</button>
          </div>
        </div>`;
    }).join('');
  }

  const subtotal = cartSubtotal();
  const discount = calculateDiscount(subtotal);
  const finalTotal = Math.max(0, subtotal - discount);

  subtotalEl.textContent = money(subtotal);

  if (discount > 0) {
    if (discountWrap) discountWrap.style.display = 'flex';
    if (discountCodeName) discountCodeName.textContent = appliedCoupon.code;
    if (discountValEl) discountValEl.textContent = `-${money(discount)}`;
  } else {
    if (discountWrap) discountWrap.style.display = 'none';
  }

  if (finalTotalEl) finalTotalEl.textContent = money(finalTotal);

  const pct = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);
  if (fillEl) fillEl.style.width = pct + '%';
  if (msgEl) {
    if (subtotal >= FREE_SHIP_THRESHOLD || (appliedCoupon && appliedCoupon.type === 'freeship')) {
      msgEl.textContent = 'You’ve unlocked free express shipping 🎉';
    } else {
      msgEl.textContent = `Add ${money(FREE_SHIP_THRESHOLD - subtotal)} more for free express shipping`;
    }
  }

  body.querySelectorAll('[data-cartplus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [id, size] = btn.dataset.cartplus.split('|');
      updateCartQty(id, size, 1);
    });
  });
  body.querySelectorAll('[data-cartminus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [id, size] = btn.dataset.cartminus.split('|');
      updateCartQty(id, size, -1);
    });
  });
  body.querySelectorAll('[data-cartremove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [id, size] = btn.dataset.cartremove.split('|');
      removeFromCart(id, size);
    });
  });
}

/* ---------- Wishlist ---------- */
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', '♡');
  } else {
    wishlist.push(id);
    showToast('Saved to wishlist', '♥');
  }
  store.save('sneakin_wishlist', wishlist);
  renderWishlist();
  updateBadges();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn => {
    const active = wishlist.includes(id);
    btn.classList.toggle('active', active);
    btn.textContent = active ? '♥' : '♡';
    btn.setAttribute('aria-label', active ? 'Remove from wishlist' : 'Add to wishlist');
  });
}

function renderWishlist() {
  const body = document.getElementById('wishlist-body');
  if (!body) return;
  if (wishlist.length === 0) {
    body.innerHTML = '<div class="drawer-empty">No favorites yet.<br>Tap the heart on any pair to save it here.</div>';
    return;
  }
  body.innerHTML = wishlist.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return '';
    const fallback = getFallbackImg(p.category);
    return `
      <div class="drawer-item">
        <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='${fallback}';">
        <div class="drawer-item-info">
          <h4>${p.name}</h4>
          <div class="drawer-item-meta">${p.code} · ${p.categoryLabel}</div>
          <div class="drawer-item-row">
            <span class="drawer-item-price">${money(p.price)}</span>
          </div>
          <button class="drawer-move" data-wishadd="${p.id}">Move to cart</button>
          <button class="drawer-remove" data-wishremove="${p.id}">Remove</button>
        </div>
      </div>`;
  }).join('');

  body.querySelectorAll('[data-wishadd]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishadd;
      const p = PRODUCTS.find(pr => pr.id === id);
      if (!p) return;
      const isApparelCategory = ['shirts', 'jeans', 'shorts', 'sportswear', 'apparel'].includes(p.category);
      const defaultSize = isApparelCategory ? 'M' : 8;
      addToCart(id, defaultSize, 1);
      const idx = wishlist.indexOf(id);
      if (idx > -1) wishlist.splice(idx, 1);
      store.save('sneakin_wishlist', wishlist);
      renderWishlist();
      updateBadges();
      showToast(`Moved ${p.name} to cart`, '🛍️');
      closeDrawer('wishlist');
      openDrawer('cart');
    });
  });
  body.querySelectorAll('[data-wishremove]').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlist(btn.dataset.wishremove));
  });
}

let recentlyViewed = store.load('sneakin_recent', []); // [id, ...] most recent first

function trackRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(rid => rid !== id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0, 10);
  store.save('sneakin_recent', recentlyViewed);
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  const section = document.getElementById('recently-viewed-section');
  const row = document.getElementById('recently-viewed-row');
  if (!section || !row) return;
  const items = recentlyViewed
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, 8);
  if (items.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';
  row.innerHTML = items.map(cardHTML).join('');
  bindProductCardEvents();
}

/* ---------- Badges ---------- */
function updateBadges() {
  const cartCountEl = document.getElementById('cart-count');
  const wishCountEl = document.getElementById('wishlist-count');
  const cartTotal = cart.reduce((s, l) => s + l.qty, 0);
  if (cartCountEl) {
    cartCountEl.textContent = cartTotal;
    cartCountEl.classList.toggle('zero', cartTotal === 0);
  }
  if (wishCountEl) {
    wishCountEl.textContent = wishlist.length;
    wishCountEl.classList.toggle('zero', wishlist.length === 0);
  }
}

/* ---------- Quick View Modal ---------- */
let modalState = { id: null, size: null, qty: 1 };

function openQuickView(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  trackRecentlyViewed(id);
  const isApparelCategory = ['shirts', 'jeans', 'shorts', 'sportswear', 'apparel'].includes(p.category);
  const sizeList = isApparelCategory ? SIZES_APPAREL : SIZES;
  const defaultSize = isApparelCategory ? 'M' : 8;

  modalState = { id, size: defaultSize, qty: 1 };

  const modal = document.getElementById('product-modal');
  const body = document.getElementById('modal-body');
  const isWished = wishlist.includes(id);
  const fallback = getFallbackImg(p.category);

  body.innerHTML = `
    <div class="qv-media"><img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='${fallback}';"></div>
    <div class="qv-code">${p.code} · ${p.categoryLabel}</div>
    <div class="qv-name">${p.name}</div>
    <div class="qv-pricing">
      <span class="mrp">MRP: <s>${money(p.mrp)}</s></span>
      <span class="discount-badge">${p.discount}% OFF</span>
      <span class="new-price">${money(p.price)}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem;">
      <span class="qv-label" style="margin:0;">Select size (${isApparelCategory ? 'Apparel Fit' : 'UK/India'})</span>
      <button type="button" id="qv-open-sizeguide" style="background:none;border:none;color:var(--cobalt);font-family:var(--font-mono);font-size:0.76rem;cursor:pointer;text-decoration:underline;">Size Guide 📏</button>
    </div>
    <div class="size-row" id="qv-sizes" style="margin-top:0.4rem;">
      ${sizeList.map(s => `<button class="size-chip ${String(s) === String(defaultSize) ? 'selected' : ''}" data-size="${s}">${s}</button>`).join('')}
    </div>
    <span class="qv-label">Quantity</span>
    <div class="qty-row">
      <button class="qty-btn" id="qv-qty-minus" aria-label="Decrease quantity">−</button>
      <span class="qty-value" id="qv-qty-value">1</span>
      <button class="qty-btn" id="qv-qty-plus" aria-label="Increase quantity">+</button>
    </div>
    <div class="ai-fit-box">
      <div class="ai-fit-head">
        <span>🤖 AI Fit Predictor Algorithm</span>
        <button type="button" class="ai-predict-btn" id="ai-predict-btn">Predict My Fit ⚡</button>
      </div>
      <div class="ai-fit-msg" id="ai-fit-msg" style="display:none;"></div>
    </div>

    <div class="qv-actions">
      <button class="btn-outline" id="qv-wishlist">${isWished ? '♥ Saved' : '♡ Save for later'}</button>
      <button class="cta-button" id="qv-add">Add to cart</button>
    </div>
  `;

  const predictBtn = document.getElementById('ai-predict-btn');
  const fitMsg = document.getElementById('ai-fit-msg');
  if (predictBtn && fitMsg) {
    predictBtn.addEventListener('click', () => {
      predictBtn.disabled = true;
      predictBtn.textContent = 'Analyzing Neural Measurements...';
      setTimeout(() => {
        const precision = (98 + Math.random() * 1.8).toFixed(1);
        fitMsg.style.display = 'block';
        fitMsg.innerHTML = `✨ <strong>AI Fit Prediction:</strong> Recommended Size <strong>${defaultSize}</strong> (${precision}% precision match for true-to-size comfort).`;
        predictBtn.textContent = 'Predicted ✓';
        showToast(`AI size prediction: ${defaultSize}`, '🤖');
      }, 700);
    });
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const sizeGuideBtn = document.getElementById('qv-open-sizeguide');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', () => {
      openSizeGuideModal();
    });
  }

  body.querySelectorAll('.size-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      body.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      const raw = chip.dataset.size;
      modalState.size = (isNaN(Number(raw)) ? raw : Number(raw));
    });
  });

  document.getElementById('qv-qty-minus').addEventListener('click', () => {
    modalState.qty = Math.max(1, modalState.qty - 1);
    document.getElementById('qv-qty-value').textContent = modalState.qty;
  });
  document.getElementById('qv-qty-plus').addEventListener('click', () => {
    modalState.qty += 1;
    document.getElementById('qv-qty-value').textContent = modalState.qty;
  });

  document.getElementById('qv-wishlist').addEventListener('click', () => {
    toggleWishlist(id);
    const wished = wishlist.includes(id);
    document.getElementById('qv-wishlist').textContent = wished ? '♥ Saved' : '♡ Save for later';
  });

  document.getElementById('qv-add').addEventListener('click', () => {
    if (!modalState.size) {
      showToast('Pick a size first', '⚠');
      document.getElementById('qv-sizes').style.outline = '2px solid var(--coral)';
      setTimeout(() => { document.getElementById('qv-sizes').style.outline = 'none'; }, 900);
      return;
    }
    addToCart(id, modalState.size, modalState.qty);
    showToast(`${p.name} · Size ${modalState.size} added to cart`, '🛍️');
    closeModal();
    openDrawer('cart');
  });
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- Drawers & Modals Helpers ---------- */
function openDrawer(which) {
  const drawer = document.getElementById(`${which}-drawer`);
  const overlay = document.getElementById(`${which}-overlay`);
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(which) {
  const drawer = document.getElementById(`${which}-drawer`);
  const overlay = document.getElementById(`${which}-overlay`);
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function clearCart() {
  cart = [];
  store.save('sneakin_cart', cart);
  renderCart();
  updateBadges();
}

/* ---------- Checkout / Multi-Step Payment System ---------- */
let paymentState = { step: 1, method: 'card', shippingMethod: 'standard', upiScanned: false };

function getShippingFee(subtotal, speed) {
  if (appliedCoupon && appliedCoupon.type === 'freeship') {
    if (speed === 'express') return 100;
    if (speed === 'sameday') return 300;
    return 0;
  }
  if (speed === 'express') return 299;
  if (speed === 'sameday') return 499;
  return subtotal >= FREE_SHIP_THRESHOLD ? 0 : 199;
}

function openPaymentModal() {
  const form = document.getElementById('payment-form');
  if (form) form.reset();
  paymentState = { step: 1, method: 'card', shippingMethod: 'standard', upiScanned: false };

  populateSavedAddresses();

  // prefill default saved address if available
  if (savedAddresses.length > 0) {
    fillAddressForm(savedAddresses[0]);
  }

  setPaymentMethodUI('card');
  const qr = document.getElementById('upi-qr'); if (qr) qr.style.display = 'none';
  showPaymentStep(1);

  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

function showPaymentStep(n) {
  paymentState.step = n;
  document.querySelectorAll('.pm-step').forEach(el => el.style.display = el.dataset.step == n ? '' : 'none');

  const p1 = document.getElementById('step-pill-1');
  const p2 = document.getElementById('step-pill-2');
  const p3 = document.getElementById('step-pill-3');

  if (p1) { p1.classList.toggle('active', n === 1); p1.classList.toggle('completed', n > 1); }
  if (p2) { p2.classList.toggle('active', n === 2); p2.classList.toggle('completed', n > 2); }
  if (p3) { p3.classList.toggle('active', n === 3); p3.classList.toggle('completed', n > 3); }

  if (n === 3) populateReview();
}

function populateSavedAddresses() {
  const sel = document.getElementById('saved-addresses');
  if (!sel) return;
  sel.innerHTML = '<option value="">+ Add a new delivery address</option>';
  savedAddresses.forEach((addr, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${addr.name} — ${addr.line1}, ${addr.city} (${addr.postal})`;
    sel.appendChild(opt);
  });
}

function fillAddressForm(addr) {
  if (!addr) return;
  document.getElementById('payer-name').value = addr.name || '';
  document.getElementById('payer-email').value = addr.email || '';
  document.getElementById('ship-phone').value = addr.phone || '';
  document.getElementById('ship-line1').value = addr.line1 || '';
  document.getElementById('ship-line2').value = addr.line2 || '';
  document.getElementById('ship-city').value = addr.city || '';
  document.getElementById('ship-postal').value = addr.postal || '';
  document.getElementById('ship-state').value = addr.state || '';
}

function setPaymentMethodUI(method) {
  paymentState.method = method;
  document.querySelectorAll('.pm-tab').forEach(tab => {
    const radio = tab.querySelector('input');
    tab.classList.toggle('active', radio && radio.value === method);
  });
  document.getElementById('pm-card-fields').style.display = method === 'card' ? '' : 'none';
  document.getElementById('pm-upi-fields').style.display = method === 'upi' ? '' : 'none';
  document.getElementById('pm-netbanking-fields').style.display = method === 'netbanking' ? '' : 'none';
  document.getElementById('pm-cod-note').style.display = method === 'cod' ? '' : 'none';
}

function generateUpiQr(upiId) {
  const label = upiId || 'SNEAKIN@UPI';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 170 170'>
    <rect width='170' height='170' fill='#fff'/>
    <rect x='10' y='10' width='45' height='45' fill='#14150f'/>
    <rect x='15' y='15' width='35' height='35' fill='#fff'/>
    <rect x='22' y='22' width='21' height='21' fill='#1f3fff'/>
    <rect x='115' y='10' width='45' height='45' fill='#14150f'/>
    <rect x='120' y='15' width='35' height='35' fill='#fff'/>
    <rect x='127' y='22' width='21' height='21' fill='#1f3fff'/>
    <rect x='10' y='115' width='45' height='45' fill='#14150f'/>
    <rect x='15' y='120' width='35' height='35' fill='#fff'/>
    <rect x='22' y='127' width='21' height='21' fill='#ff4b3e'/>
    <path d='M70 20h20v20H70zM100 30h10v30h-10zM65 65h40v40H65zM120 70h30v20h-30zM70 120h30v30H70zM115 115h30v30h-30z' fill='#14150f'/>
    <text x='85' y='90' text-anchor='middle' font-family='sans-serif' font-size='10' font-weight='bold' fill='#ff4b3e'>SNEAK IN</text>
    <text x='85' y='162' text-anchor='middle' font-family='monospace' font-size='8' fill='#555'>${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function detectCardBrand(num) {
  const clean = num.replace(/\s+/g, '');
  if (/^4/.test(clean)) return 'VISA CREDIT / DEBIT';
  if (/^5[1-5]/.test(clean)) return 'MASTERCARD';
  if (/^3[47]/.test(clean)) return 'AMERICAN EXPRESS';
  if (/^(60|65|81|82)/.test(clean)) return 'RUPAY CARD';
  return 'DEBIT / CREDIT CARD';
}

function populateReview() {
  const addrEl = document.getElementById('review-address');
  const methodEl = document.getElementById('review-method');
  const speedEl = document.getElementById('review-shipping-speed');
  const form = document.getElementById('payment-form');
  if (!addrEl || !methodEl || !form) return;

  const addr = `${form.payerName.value}, ${form.shipLine1.value}${form.shipLine2.value ? ', ' + form.shipLine2.value : ''}, ${form.shipCity.value} - ${form.shipPostal.value} (Ph: ${form.shipPhone.value})`;
  addrEl.textContent = addr;

  let methodText = paymentState.method.toUpperCase();
  if (paymentState.method === 'card') {
    const last4 = (form.cardNumber.value || '').slice(-4);
    const brand = detectCardBrand(form.cardNumber.value);
    methodText = `${brand} (•••• ${last4 || '0000'})`;
  } else if (paymentState.method === 'upi') {
    const upi = document.getElementById('upi-id').value || 'UPI Direct App';
    methodText = `Instant UPI (${upi})`;
  } else if (paymentState.method === 'netbanking') {
    const bankSelect = document.getElementById('bank-select');
    const bankName = bankSelect ? bankSelect.options[bankSelect.selectedIndex].text : 'Net Banking';
    methodText = `Net Banking (${bankName})`;
  } else if (paymentState.method === 'cod') {
    methodText = 'Cash / UPI on Delivery';
  }
  methodEl.textContent = methodText;

  const speedRadio = document.querySelector('input[name="shippingMethod"]:checked');
  const speedVal = speedRadio ? speedRadio.value : 'standard';
  paymentState.shippingMethod = speedVal;

  let speedText = 'Standard Express (3-5 Days)';
  if (speedVal === 'express') speedText = 'Priority Air Express (1-2 Days)';
  if (speedVal === 'sameday') speedText = 'Same-Day Metro Delivery';
  if (speedEl) speedEl.textContent = speedText;

  const subtotal = cartSubtotal();
  const discount = calculateDiscount(subtotal);
  const shippingFee = getShippingFee(subtotal - discount, speedVal);
  const grandTotal = Math.max(0, subtotal - discount) + shippingFee;

  document.getElementById('rev-subtotal').textContent = money(subtotal);

  const discountRow = document.getElementById('rev-discount-row');
  if (discount > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    document.getElementById('rev-discount').textContent = `-${money(discount)}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  document.getElementById('rev-shipping').textContent = shippingFee === 0 ? 'FREE' : money(shippingFee);
  document.getElementById('payment-total').textContent = money(grandTotal);
}

function validatePaymentStep(step) {
  const form = document.getElementById('payment-form');
  if (step === 1) {
    const name = form.payerName.value.trim();
    const email = form.payerEmail.value.trim();
    const phone = form.shipPhone.value.trim();
    const shipLine1 = form.shipLine1.value.trim();
    const city = form.shipCity.value.trim();
    const postal = form.shipPostal.value.trim();
    const state = form.shipState.value.trim();

    if (!name || !email || !phone || !shipLine1 || !city || !postal || !state) return false;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false;
    if (!/^[0-9\+\-\s]{8,15}$/.test(phone)) return false;
    return true;
  }
  if (step === 2) {
    if (paymentState.method === 'card') {
      const card = form.cardNumber.value.replace(/\s+/g, '');
      const expiry = form.cardExpiry.value.trim();
      const cvv = form.cardCVV.value.trim();
      if (!/^[0-9]{13,19}$/.test(card)) return false;
      if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) return false;
      if (!/^\d{3,4}$/.test(cvv)) return false;
      return true;
    }
    if (paymentState.method === 'upi') {
      const upi = document.getElementById('upi-id').value.trim();
      if (paymentState.upiScanned) return true;
      if (!upi || !/@/.test(upi)) return false;
      return true;
    }
    return true;
  }
  return false;
}

/* ---------- Order Confirmation & Tracking Modals ---------- */
function placeOrderSuccess(order) {
  placedOrders.unshift(order);
  store.save('sneakin_orders', placedOrders);

  const modal = document.getElementById('order-success-modal');
  const receiptBox = document.getElementById('success-receipt');

  if (receiptBox) {
    receiptBox.innerHTML = `
      <div class="receipt-header">
        <div>
          <div class="receipt-id">Order ID: ${order.id}</div>
          <div class="receipt-date">${order.date}</div>
        </div>
        <span class="payment-badge" style="background:#1f8a5f;color:#fff;">VERIFIED ORDER</span>
      </div>
      <div class="receipt-items">
        ${order.items.map(it => `
          <div class="receipt-item-row">
            <span>${it.name} (Qty ${it.qty}, Size ${it.size})</span>
            <strong>${money(it.price * it.qty)}</strong>
          </div>
        `).join('')}
      </div>
      <div class="receipt-item-row" style="border-top:1px dashed var(--line); padding-top:0.5rem;">
        <span>Est. Delivery Date:</span>
        <strong style="color:var(--cobalt);">${order.estDelivery}</strong>
      </div>
      <div class="receipt-item-row" style="margin-top:0.4rem;">
        <span>Shipping To:</span>
        <span>${order.address.name}, ${order.address.city}</span>
      </div>
      <div class="receipt-item-row" style="border-top:1px solid var(--line); padding-top:0.6rem; font-size:1rem;">
        <strong>Total Paid:</strong>
        <strong style="color:var(--coral);">${money(order.total)}</strong>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openOrderTrackerModal() {
  const modal = document.getElementById('orders-modal');
  const body = document.getElementById('orders-list-body');

  if (!body) return;

  if (placedOrders.length === 0) {
    body.innerHTML = '<div class="drawer-empty" style="padding:2rem 0;">No active orders yet.<br>Place your first order from the shop to track delivery live!</div>';
  } else {
    body.innerHTML = placedOrders.map(ord => `
      <div class="order-card-track">
        <div class="track-header">
          <div>
            <strong style="color:var(--cobalt); font-family:var(--font-mono);">${ord.id}</strong>
            <div style="font-size:0.78rem; color:var(--ink-faint);">${ord.date}</div>
          </div>
          <strong style="font-size:1.1rem; color:var(--coral);">${money(ord.total)}</strong>
        </div>
        <div style="font-size:0.86rem; color:var(--ink-soft); margin-bottom:0.8rem;">
          <strong>Items:</strong> ${ord.items.map(i => `${i.name} (${i.qty})`).join(', ')}
        </div>
        <div style="font-size:0.82rem; color:var(--ink-soft);">
          <strong>Deliver to:</strong> ${ord.address.name}, ${ord.address.line1}, ${ord.address.city} (${ord.address.postal})
        </div>
        <div class="track-timeline">
          <div class="track-step done">
            <div class="track-dot">✓</div>
            <div class="track-label">Confirmed</div>
          </div>
          <div class="track-step done">
            <div class="track-dot">📦</div>
            <div class="track-label">Packed</div>
          </div>
          <div class="track-step current">
            <div class="track-dot">🚚</div>
            <div class="track-label">In Transit</div>
          </div>
          <div class="track-step">
            <div class="track-dot">🏠</div>
            <div class="track-label">Delivered</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openSizeGuideModal() {
  const modal = document.getElementById('sizeguide-modal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

/* ---------- Ticker ---------- */
function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const messages = [
    'NEW DROP — SHIRTS, JEANS & ACTIVEWEAR COLLECTION LIVE',
    'FREE EXPRESS SHIPPING OVER ₹4,999 OR USE CODE "FREESHIP"',
    '<span class="hot">LIMITED PROMO CODE "SNEAK20" FOR 20% OFF</span>',
    '50K+ HAPPY FEET & STYLED WARDROBES',
    'AIR JORDAN & DUNK RETROS IN STOCK NOW',
    '<span class="hot">FLAT ₹1,000 OFF WITH CODE "FIRST10"</span>'
  ];
  const loopContent = [...messages, ...messages].map(m => `<span>${m}</span>`).join('');
  track.innerHTML = loopContent;
}

/* ---------- Scroll UI ---------- */
function updateScrollUI() {
  const progressBar = document.getElementById('progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
  if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollTop > 500);

  const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) current = sec.id;
  });
  navLinkEls.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}

/* ---------- Carousels & Swipe ---------- */
function showNext(category) {
  const container = document.getElementById(category + '-carousel');
  if (!container) return;
  const cards = container.querySelectorAll('.product-card');
  if (!cards.length) return;
  container.appendChild(cards[0]);
  animateCarousel(category);
}
function showPrev(category) {
  const container = document.getElementById(category + '-carousel');
  if (!container) return;
  const cards = container.querySelectorAll('.product-card');
  if (!cards.length) return;
  container.insertBefore(cards[cards.length - 1], cards[0]);
  animateCarousel(category);
}
function animateCarousel(category) {
  const carousel = document.getElementById(category + '-carousel');
  if (!carousel) return;
  carousel.querySelectorAll('.product-card').forEach(card => {
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = 'productSlideIn 0.4s cubic-bezier(.4,2,.6,1)';
  });
}
function addSwipeToCarousel(category) {
  const carousel = document.getElementById(category + '-carousel');
  if (!carousel) return;
  let startX = 0, isDown = false;
  carousel.addEventListener('touchstart', e => { if (e.touches.length === 1) { startX = e.touches[0].clientX; isDown = true; } });
  carousel.addEventListener('touchmove', e => {
    if (!isDown) return;
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) { diff < 0 ? showNext(category) : showPrev(category); isDown = false; }
  });
  carousel.addEventListener('touchend', () => { isDown = false; });
}
function attachCarouselArrowEvents() {
  Object.keys(CATEGORY_META).forEach(cat => {
    const section = document.getElementById(cat + '-carousel');
    if (!section) return;
    const parent = section.parentElement;
    const prevBtn = parent.querySelector('.carousel-btn.prev');
    const nextBtn = parent.querySelector('.carousel-btn.next');
    if (prevBtn) prevBtn.onclick = () => showPrev(cat);
    if (nextBtn) nextBtn.onclick = () => showNext(cat);
  });
}

/* ---------- Testimonial Slider ---------- */
function initTestimonials() {
  const items = Array.from(document.querySelectorAll('.testimonial'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  let index = 0;
  function show(i) {
    index = (i + items.length) % items.length;
    items.forEach((item, n) => item.classList.toggle('active', n === index));
    dots.forEach((dot, n) => dot.classList.toggle('active', n === index));
  }
  if (items.length && dots.length) {
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    setInterval(() => show(index + 1), 5000);
  }
}

/* ---------- DOM Initialization ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderCategoryCarousels();
  renderCart();
  renderWishlist();
  renderRecentlyViewed();
  updateBadges();
  bindSearchControls();
  initTestimonials();

  Object.keys(CATEGORY_META).forEach(addSwipeToCarousel);
  attachCarouselArrowEvents();

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('load', updateScrollUI);

  const b2t = document.getElementById('back-to-top');
  if (b2t) b2t.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Back to Main Feed from Single Product View
  const pBackHomeBtn = document.getElementById('p-back-home');
  if (pBackHomeBtn) {
    pBackHomeBtn.addEventListener('click', () => {
      closeProductPage();
    });
  }

  const pSizeGuideBtn = document.getElementById('p-page-sizeguide-btn');
  if (pSizeGuideBtn) {
    pSizeGuideBtn.addEventListener('click', () => {
      openSizeGuideModal();
    });
  }

  // Back to All Drops button handler
  const backAllBtn = document.getElementById('back-all-btn');
  if (backAllBtn) {
    backAllBtn.addEventListener('click', () => {
      activeCollection = null;
      searchState.category = 'all';
      document.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.dataset.cat === 'all');
      });
      runSearch();
      const shopSec = document.getElementById('products');
      if (shopSec) shopSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Navigation Links
  const trackNavBtn = document.getElementById('track-orders-nav-btn');
  if (trackNavBtn) {
    trackNavBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openOrderTrackerModal();
    });
  }

  // Mobile nav
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Search panel toggle
  const searchToggle = document.getElementById('search-toggle');
  const searchPanel = document.getElementById('search-panel');
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', () => {
      const open = searchPanel.classList.toggle('open');
      searchToggle.setAttribute('aria-expanded', String(open));
      if (open) document.getElementById('global-search').focus();
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-toggle-wrap')) searchPanel.classList.remove('open');
    });
  }

  // Cart / Wishlist Drawers
  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartOverlay = document.getElementById('cart-overlay');
  const wishToggle = document.getElementById('wishlist-toggle');
  const wishClose = document.getElementById('wishlist-close');
  const wishOverlay = document.getElementById('wishlist-overlay');

  if (cartToggle) cartToggle.addEventListener('click', () => openDrawer('cart'));
  if (cartClose) cartClose.addEventListener('click', () => closeDrawer('cart'));
  if (cartOverlay) cartOverlay.addEventListener('click', () => closeDrawer('cart'));

  if (wishToggle) wishToggle.addEventListener('click', () => openDrawer('wishlist'));
  if (wishClose) wishClose.addEventListener('click', () => closeDrawer('wishlist'));
  if (wishOverlay) wishOverlay.addEventListener('click', () => closeDrawer('wishlist'));

  // Promo Code Apply Button
  const promoApplyBtn = document.getElementById('cart-promo-apply');
  if (promoApplyBtn) {
    promoApplyBtn.addEventListener('click', () => {
      const input = document.getElementById('cart-promo-code');
      const val = input ? input.value.trim().toUpperCase() : '';
      if (!val) { showToast('Enter a promo code', '⚠'); return; }

      if (val === 'SNEAK20') {
        appliedCoupon = { code: 'SNEAK20', type: 'percent', val: 20 };
        showToast('20% Promo Discount Applied!', '🎉');
      } else if (val === 'FREESHIP') {
        appliedCoupon = { code: 'FREESHIP', type: 'freeship', val: 0 };
        showToast('Free Express Shipping Unlocked!', '🚚');
      } else if (val === 'FIRST10') {
        appliedCoupon = { code: 'FIRST10', type: 'flat', val: 1000 };
        showToast('₹1,000 Flat Off Applied!', '💰');
      } else {
        showToast('Invalid promo code. Try SNEAK20 or FREESHIP', '❌');
        return;
      }
      const appliedTag = document.getElementById('cart-promo-applied');
      if (appliedTag) {
        appliedTag.style.display = 'flex';
        appliedTag.innerHTML = `<span>Applied: <strong>${appliedCoupon.code}</strong></span><button type="button" id="remove-promo-btn" style="background:none;border:none;cursor:pointer;color:var(--coral);">✕</button>`;
        document.getElementById('remove-promo-btn').onclick = () => {
          appliedCoupon = null;
          appliedTag.style.display = 'none';
          input.value = '';
          renderCart();
          showToast('Promo code removed', 'ℹ');
        };
      }
      renderCart();
    });
  }

  // Cart Checkout
  const cartCheckoutBtn = document.getElementById('cart-checkout');
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) { showToast('Your cart is empty', '⚠'); return; }
      closeDrawer('cart');
      openPaymentModal();
    });
  }

  // Modal Closers
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  const paymentClose = document.getElementById('payment-close');
  if (paymentClose) paymentClose.addEventListener('click', closePaymentModal);

  const ordersClose = document.getElementById('orders-close');
  if (ordersClose) ordersClose.addEventListener('click', () => closeAllModals());

  const sizeguideClose = document.getElementById('sizeguide-close');
  if (sizeguideClose) sizeguideClose.addEventListener('click', () => closeAllModals());

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeDrawer('cart');
      closeDrawer('wishlist');
      closeAllModals();
    }
  });

  // PIN Code Auto-Lookup Database
  const PIN_DATABASE = {
    '110001': { city: 'New Delhi', state: 'Delhi' },
    '110002': { city: 'New Delhi', state: 'Delhi' },
    '110020': { city: 'New Delhi', state: 'Delhi' },
    '400001': { city: 'Mumbai', state: 'Maharashtra' },
    '400050': { city: 'Mumbai', state: 'Maharashtra' },
    '560001': { city: 'Bengaluru', state: 'Karnataka' },
    '700001': { city: 'Kolkata', state: 'West Bengal' },
    '600001': { city: 'Chennai', state: 'Tamil Nadu' },
    '500001': { city: 'Hyderabad', state: 'Telangana' },
    '380001': { city: 'Ahmedabad', state: 'Gujarat' },
    '411001': { city: 'Pune', state: 'Maharashtra' },
    '302001': { city: 'Jaipur', state: 'Rajasthan' },
    '226001': { city: 'Lucknow', state: 'Uttar Pradesh' }
  };

  const shipPostalInput = document.getElementById('ship-postal');
  if (shipPostalInput) {
    shipPostalInput.addEventListener('input', (e) => {
      const pin = e.target.value.replace(/\D/g, '');
      e.target.value = pin;
      if (pin.length === 6 && PIN_DATABASE[pin]) {
        const info = PIN_DATABASE[pin];
        document.getElementById('ship-city').value = info.city;
        document.getElementById('ship-state').value = info.state;
        showToast(`Auto-filled ${info.city}, ${info.state} from PIN`, '📍');
      }
    });
  }

  // Address Tag Chips
  document.querySelectorAll('.addr-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.addr-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('selected', 'active');
      showToast(`Address type set to ${chip.dataset.tag}`, '🏷️');
    });
  });

  // GPS Auto-Detect Location Handler
  const gpsBtn = document.getElementById('gps-detect-btn');
  const gpsStatus = document.getElementById('gps-status');
  const gpsBadge = document.getElementById('gps-accuracy-badge');

  if (gpsBtn) {
    gpsBtn.addEventListener('click', () => {
      gpsBtn.disabled = true;
      gpsBtn.innerHTML = `<span class="spinner-icon">⚡</span> Triangulating Satellite Coordinates...`;
      if (gpsStatus) {
        gpsStatus.style.display = 'block';
        gpsStatus.innerHTML = `🛰️ Accessing High-Accuracy GPS Sensor...`;
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = pos.coords.latitude.toFixed(4);
            const lon = pos.coords.longitude.toFixed(4);
            const acc = Math.round(pos.coords.accuracy || 8);

            if (gpsBadge) {
              gpsBadge.style.display = 'inline-block';
              gpsBadge.textContent = `Accuracy: ±${acc}m`;
            }

            if (gpsStatus) {
              gpsStatus.innerHTML = `📍 GPS Lock Acquired (Lat ${lat}, Lon ${lon}) · Reverse Geocoding...`;
            }

            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)
              .then(res => res.json())
              .then(data => {
                const addr = data.address || {};
                const road = addr.road || addr.pedestrian || addr.suburb || addr.neighbourhood || `GPS Location (${lat}, ${lon})`;
                const city = addr.city || addr.town || addr.village || addr.county || 'Metro Region';
                const state = addr.state || 'State Region';
                const postcode = addr.postcode ? addr.postcode.replace(/\D/g, '').substring(0, 6) : '110001';

                document.getElementById('ship-line1').value = road;
                document.getElementById('ship-city').value = city;
                document.getElementById('ship-postal').value = postcode;
                document.getElementById('ship-state').value = state;

                if (gpsStatus) {
                  gpsStatus.innerHTML = `✓ Auto-Filled: ${road}, ${city} (${postcode})`;
                }
                showToast(`GPS Location Auto-Filled!`, '🛰️');
                gpsBtn.disabled = false;
                gpsBtn.innerHTML = `<span class="gps-icon">🛰️</span> Re-detect Location (GPS)`;
              })
              .catch(() => {
                document.getElementById('ship-line1').value = `GPS Coordinate Pin (${lat}, ${lon})`;
                document.getElementById('ship-city').value = 'New Delhi';
                document.getElementById('ship-postal').value = '110001';
                document.getElementById('ship-state').value = 'Delhi';

                if (gpsStatus) gpsStatus.innerHTML = `✓ GPS Location Set: New Delhi (110001)`;
                showToast('GPS Coordinates Auto-Filled!', '📍');
                gpsBtn.disabled = false;
                gpsBtn.innerHTML = `<span class="gps-icon">🛰️</span> Re-detect Location (GPS)`;
              });
          },
          (err) => {
            document.getElementById('ship-line1').value = 'Sector 42, Tech Park Avenue';
            document.getElementById('ship-city').value = 'New Delhi';
            document.getElementById('ship-postal').value = '110001';
            document.getElementById('ship-state').value = 'Delhi';

            if (gpsStatus) gpsStatus.innerHTML = `⚡ Smart Location Set: New Delhi (110001)`;
            showToast('Smart Location Auto-Filled!', '⚡');
            gpsBtn.disabled = false;
            gpsBtn.innerHTML = `<span class="gps-icon">🛰️</span> Auto-Detect My Location (GPS)`;
          },
          { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
        );
      } else {
        document.getElementById('ship-line1').value = 'Sector 42, Tech Park Avenue';
        document.getElementById('ship-city').value = 'New Delhi';
        document.getElementById('ship-postal').value = '110001';
        document.getElementById('ship-state').value = 'Delhi';
        showToast('Smart Location Auto-Filled!', '⚡');
        gpsBtn.disabled = false;
        gpsBtn.innerHTML = `<span class="gps-icon">🛰️</span> Auto-Detect My Location (GPS)`;
      }
    });
  }

  // Card Brand Detection & Expiry Auto-Format
  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      v = v.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = v.substring(0, 19);

      const badge = document.getElementById('card-brand-badge');
      if (badge) badge.textContent = detectCardBrand(v);
    });
  }

  const cardExpiryInput = document.getElementById('card-expiry');
  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2, 4);
      e.target.value = v.substring(0, 5);
    });
  }

  // Payment Form Controls
  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    const savedSel = document.getElementById('saved-addresses');
    if (savedSel) {
      savedSel.addEventListener('change', () => {
        if (savedSel.value !== '') {
          fillAddressForm(savedAddresses[Number(savedSel.value)]);
        }
      });
    }

    const pm1Next = document.getElementById('pm1-next');
    const pm2Back = document.getElementById('pm2-back');
    const pm2Next = document.getElementById('pm2-next');
    const pm3Back = document.getElementById('pm3-back');

    if (pm1Next) pm1Next.addEventListener('click', () => {
      if (!validatePaymentStep(1)) { showToast('Please complete all required address fields', '⚠'); return; }
      showPaymentStep(2);
    });
    if (pm2Back) pm2Back.addEventListener('click', () => showPaymentStep(1));
    if (pm2Next) pm2Next.addEventListener('click', () => {
      if (!validatePaymentStep(2)) { showToast('Please enter valid payment information', '⚠'); return; }
      showPaymentStep(3);
    });
    if (pm3Back) pm3Back.addEventListener('click', () => showPaymentStep(2));

    // Payment Method Switching
    document.querySelectorAll('input[name="paymentMethod"]').forEach(r => {
      r.addEventListener('change', (e) => setPaymentMethodUI(e.target.value));
    });

    // Delivery Option Switching
    document.querySelectorAll('input[name="shippingMethod"]').forEach(r => {
      r.addEventListener('change', (e) => {
        document.querySelectorAll('.delivery-option').forEach(opt => {
          const chk = opt.querySelector('input');
          opt.classList.toggle('active', chk && chk.checked);
        });
      });
    });

    // UPI QR Generator
    const upiScanBtn = document.getElementById('upi-scan');
    if (upiScanBtn) {
      upiScanBtn.addEventListener('click', () => {
        const upi = document.getElementById('upi-id').value.trim() || 'sneakin@upi';
        const img = document.getElementById('upi-qr-img');
        if (img) {
          img.innerHTML = `<img src="${generateUpiQr(upi)}" alt="UPI QR" style="width:100%;height:100%;">`;
        }
        paymentState.upiScanned = true;
        const qr = document.getElementById('upi-qr'); if (qr) qr.style.display = 'flex';
        showToast('Live UPI QR Code Generated!', '⚡');
      });
    }

    // Final Order Submit
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (paymentState.step !== 3) { showToast('Please review your order details', '⚠'); return; }
      if (!validatePaymentStep(1) || !validatePaymentStep(2)) { showToast('Missing required address or payment fields', '⚠'); return; }

      const name = paymentForm.payerName.value.trim();
      const email = paymentForm.payerEmail.value.trim();
      const phone = paymentForm.shipPhone.value.trim();
      const line1 = paymentForm.shipLine1.value.trim();
      const line2 = paymentForm.shipLine2.value.trim();
      const city = paymentForm.shipCity.value.trim();
      const postal = paymentForm.shipPostal.value.trim();
      const state = paymentForm.shipState.value.trim();

      const addrObj = { name, email, phone, line1, line2, city, postal, state };

      // Save address if not already present
      const exists = savedAddresses.some(a => a.line1 === line1 && a.postal === postal);
      if (!exists) {
        savedAddresses.unshift(addrObj);
        store.save('sneakin_addresses', savedAddresses);
      }

      const subtotal = cartSubtotal();
      const discount = calculateDiscount(subtotal);
      const shippingFee = getShippingFee(subtotal - discount, paymentState.shippingMethod);
      const grandTotal = Math.max(0, subtotal - discount) + shippingFee;

      const orderId = 'SNK-' + Math.floor(100000 + Math.random() * 900000);
      const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

      let daysToAdd = 4;
      if (paymentState.shippingMethod === 'express') daysToAdd = 2;
      if (paymentState.shippingMethod === 'sameday') daysToAdd = 1;

      const estDate = new Date();
      estDate.setDate(estDate.getDate() + daysToAdd);
      const estDeliveryStr = estDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

      const newOrder = {
        id: orderId,
        date: today,
        estDelivery: estDeliveryStr,
        items: cart.map(l => {
          const p = PRODUCTS.find(pr => pr.id === l.id);
          return { id: l.id, name: p ? p.name : 'Product', size: l.size, qty: l.qty, price: p ? p.price : 0 };
        }),
        address: addrObj,
        deliveryMethod: paymentState.shippingMethod,
        total: grandTotal,
        status: 'In Transit'
      };

      closePaymentModal();
      clearCart();
      appliedCoupon = null;

      showToast(`Order ${orderId} placed successfully!`, '🎉');
      placeOrderSuccess(newOrder);
    });
  }

  // Success Modal Actions
  const successTrackBtn = document.getElementById('success-track-btn');
  if (successTrackBtn) {
    successTrackBtn.addEventListener('click', () => {
      closeAllModals();
      openOrderTrackerModal();
    });
  }
  const successContinueBtn = document.getElementById('success-continue-btn');
  if (successContinueBtn) {
    successContinueBtn.addEventListener('click', () => {
      closeAllModals();
    });
  }

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Universal smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  const formMessage = document.getElementById('form-message');
  if (newsletterForm && formMessage) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('email');
      const value = emailInput.value.trim();
      if (value) {
        formMessage.textContent = `Thanks — ${value} is on the list for VIP drops.`;
        formMessage.style.color = '#1f8a5f';
        emailInput.value = '';
        showToast('Subscribed to drop alerts', '✉️');
      }
    });
  }

  // AI Neural Assistant Engine
  const aiBtn = document.getElementById('ai-assistant-btn');
  const aiModal = document.getElementById('ai-modal');
  const aiClose = document.getElementById('ai-modal-close');
  const aiForm = document.getElementById('ai-chat-form');
  const aiInput = document.getElementById('ai-chat-input');
  const aiBody = document.getElementById('ai-chat-body');

  if (aiBtn && aiModal) {
    aiBtn.addEventListener('click', () => {
      aiModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (aiInput) aiInput.focus();
    });
  }
  if (aiClose && aiModal) {
    aiClose.addEventListener('click', () => {
      aiModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  function handleAiQuery(query) {
    if (!query || !aiBody) return;

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'ai-msg user-msg';
    userDiv.innerHTML = `<span class="ai-avatar">👤</span><div class="msg-text">${query}</div>`;
    aiBody.appendChild(userDiv);
    aiBody.scrollTop = aiBody.scrollHeight;

    // AI Processing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-msg bot-msg typing-msg';
    typingDiv.innerHTML = `<span class="ai-avatar">⚡</span><div class="msg-text"><em>Neural AI is searching styles &amp; sizing metrics...</em></div>`;
    aiBody.appendChild(typingDiv);
    aiBody.scrollTop = aiBody.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      const qLower = query.toLowerCase();
      let matches = PRODUCTS.filter(p => matchesQuery(p, qLower));

      if (matches.length === 0) matches = PRODUCTS.slice(0, 3);
      else matches = matches.slice(0, 3);

      const botDiv = document.createElement('div');
      botDiv.className = 'ai-msg bot-msg';

      const cardsHtml = matches.map(p => `
        <div class="ai-recom-card" data-id="${p.id}">
          <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='${getFallbackImg(p.category)}';">
          <div class="ai-recom-info">
            <strong>${p.name}</strong>
            <span>${money(p.price)} · ${p.discount}% OFF</span>
            <button type="button" class="ai-recom-btn" data-id="${p.id}">Quick View &amp; Add 🛍️</button>
          </div>
        </div>
      `).join('');

      botDiv.innerHTML = `
        <span class="ai-avatar">🤖</span>
        <div class="msg-text">
          Based on your request, my <strong>Neural AI Engine</strong> matched these top recommendation drops for you:
          <div class="ai-recom-grid">${cardsHtml}</div>
        </div>`;

      aiBody.appendChild(botDiv);
      aiBody.scrollTop = aiBody.scrollHeight;

      botDiv.querySelectorAll('.ai-recom-btn').forEach(b => {
        b.addEventListener('click', () => {
          aiModal.classList.remove('open');
          openQuickView(b.dataset.id);
        });
      });
    }, 750);
  }

  function matchesQuery(p, q) {
    if (q.includes('dunk') && p.category === 'sneakers') return true;
    if (q.includes('jordan') && p.category === 'sports') return true;
    if (q.includes('blazer') && p.category === 'highrise') return true;
    if (q.includes('shirt') || q.includes('tee') && p.category === 'shirts') return true;
    if (q.includes('jean') || q.includes('denim') && p.category === 'jeans') return true;
    if (q.includes('short') && p.category === 'shorts') return true;
    if (q.includes('gym') || q.includes('sport') || q.includes('active') && (p.category === 'sportswear' || p.category === 'boots')) return true;
    return `${p.name} ${p.categoryLabel}`.toLowerCase().includes(q);
  }

  if (aiForm && aiInput) {
    aiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = aiInput.value.trim();
      if (!text) return;
      aiInput.value = '';
      handleAiQuery(text);
    });
  }

  document.querySelectorAll('.ai-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleAiQuery(btn.dataset.prompt);
    });
  });
});
// Smooth scroll for product nav buttons
const navBtns = document.querySelectorAll('.product-nav-btn');
navBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const href = btn.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 600);
      }
    }
  });
});

// Smooth scroll for Shop Now button
const shopNowBtn = document.querySelector('.cta-button.ripple[href="#products"]');
if (shopNowBtn) {
  shopNowBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      shopNowBtn.classList.add('active');
      setTimeout(() => shopNowBtn.classList.remove('active'), 600);
    }
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Product Carousel for category carousels only
function showNext(category) {
    const container = document.getElementById(category + '-carousel');
    if (!container) return;
    const cards = container.querySelectorAll('.product-card');
    container.appendChild(cards[0]);
    animateCarousel(category);
    attachProductCardClicks();
}

function showPrev(category) {
    const container = document.getElementById(category + '-carousel');
    if (!container) return;
    const cards = container.querySelectorAll('.product-card');
    container.insertBefore(cards[cards.length-1], cards[0]);
    animateCarousel(category);
    attachProductCardClicks();
}

// Carousel arrow click effect and product card animation
function animateCarousel(category) {
  const carousel = document.getElementById(category + '-carousel');
  if (carousel) {
    const cards = carousel.querySelectorAll('.product-card');
    cards.forEach(card => {
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'productSlideIn 0.4s cubic-bezier(.4,2,.6,1)';
    });
  }
}

// Swipe feature for carousels (touch and touchpad)
function addSwipeToCarousel(category) {
  const carousel = document.getElementById(category + '-carousel');
  if (!carousel) return;
  let startX = 0;
  let isDown = false;
  // Touch events
  carousel.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      isDown = true;
    }
  });
  carousel.addEventListener('touchmove', function(e) {
    if (!isDown) return;
    const moveX = e.touches[0].clientX;
    const diff = moveX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        showNext(category);
      } else {
        showPrev(category);
      }
      isDown = false;
    }
  });
  carousel.addEventListener('touchend', function() {
    isDown = false;
  });
  // Touchpad/Mouse swipe events
  let mouseStartX = 0;
  carousel.addEventListener('mousedown', function(e) {
    mouseStartX = e.clientX;
    isDown = true;
  });
  carousel.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    const moveX = e.clientX;
    const diff = moveX - mouseStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        showNext(category);
      } else {
        showPrev(category);
      }
      isDown = false;
    }
  });
  carousel.addEventListener('mouseup', function() {
    isDown = false;
  });
  carousel.addEventListener('mouseleave', function() {
    isDown = false;
  });
}
['sneakers','highrise','sports','boots','slippers'].forEach(addSwipeToCarousel);

// Attach carousel arrow button events for all carousels
function attachCarouselArrowEvents() {
  const carousels = [
    { id: 'slippers', prev: 'slippers', next: 'slippers' },
    { id: 'sneakers', prev: 'sneakers', next: 'sneakers' },
    { id: 'highrise', prev: 'highrise', next: 'highrise' },
    { id: 'sports', prev: 'sports', next: 'sports' },
    { id: 'boots', prev: 'boots', next: 'boots' }
  ];
  carousels.forEach(({ id }) => {
    const section = document.getElementById(id + '-carousel');
    if (!section) return;
    // Find prev/next buttons in the parent .category-products
    const parent = section.parentElement;
    if (!parent) return;
    const prevBtn = parent.querySelector('.carousel-btn.prev');
    const nextBtn = parent.querySelector('.carousel-btn.next');
    if (prevBtn) {
      prevBtn.onclick = function() { showPrev(id); };
    }
    if (nextBtn) {
      nextBtn.onclick = function() { showNext(id); };
    }
  });
}
attachCarouselArrowEvents();

// Modal for Product Details
function showProductModal(product) {
  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  modalBody.innerHTML = `
    <span class="close" style="position:absolute;top:10px;right:20px;font-size:2rem;cursor:pointer;">&times;</span>
    <div style="display:flex;flex-direction:column;align-items:center;gap:1.2rem;width:100%;max-width:420px;margin:auto;">
      <img src="${product.img}" alt="${product.name}" style="width:180px;height:180px;border-radius:1rem;object-fit:cover;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
      <div style="width:100%;display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
        <h2 style="font-size:1.25rem;margin:0;text-align:center;word-break:break-word;max-width:95%;min-height:2.6em;line-height:1.3;display:flex;align-items:center;justify-content:center;">${product.name}</h2>
        <div style="width:100%;display:flex;flex-direction:column;align-items:center;gap:0.3em;">
          <span class="mrp" style="font-size:1.1rem;text-align:center;width:100%;">MRP: <s>₹${product.mrp}</s></span>
          <span class="discount-badge" style="font-size:1.05rem;text-align:center;width:100%;">${product.discount}% OFF</span>
          <span class="new-price" style="font-size:1.15rem;text-align:center;width:100%;font-weight:600;">₹${product.price}</span>
        </div>
        <button id="add-to-cart-btn" class="cta-button" style="font-size:1.1rem;width:100%;max-width:220px;margin-top:0.7em;">Add to Cart</button>
      </div>
    </div>
  `;
  modal.style.display = 'block';
  document.getElementById('add-to-cart-btn').onclick = function() {
    addToCart(product);
    modal.style.display = 'none';
    window.location.hash = '#products';
  };
  modalBody.querySelector('.close').onclick = function() {
    modal.style.display = 'none';
    window.location.hash = '#products';
  };
}

// Cart system
let cart = [];
function addToCart(product) {
  const idx = cart.findIndex(item => item.name === product.name);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
}

// Fix cart quantity controls and total calculation
function showCartModal() {
  let cartModal = document.getElementById('cart-modal');
  if (!cartModal) {
    cartModal = document.createElement('div');
    cartModal.id = 'cart-modal';
    cartModal.className = 'modal';
    document.body.appendChild(cartModal);
  }
  let total = 0;
  let itemsHtml = cart.map(item => {
    total += Number(item.price) * item.qty;
    return `<div class="cart-item" style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
      <img src="${item.img}" alt="${item.name}" style="width:60px;height:60px;border-radius:0.5rem;object-fit:cover;">
      <div style="flex:1;">
        <h4 style="margin:0 0 0.2em 0;">${item.name}</h4>
        <div class="product-pricing">
          <span class="mrp">MRP: <s>₹${item.mrp}</s></span>
          <span class="discount-badge">${item.discount}% OFF</span>
          <span class="new-price">₹${item.price}</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.5em;">
        <button class="cart-qty-btn" data-name="${item.name}" data-action="-">-</button>
        <span>${item.qty}</span>
        <button class="cart-qty-btn" data-name="${item.name}" data-action="+">+</button>
      </div>
    </div>`;
  }).join('');
  cartModal.innerHTML = `
    <div class="modal-content" style="min-width:400px;max-width:600px;">
      <span class="close" style="position:absolute;top:10px;right:20px;font-size:2rem;cursor:pointer;">&times;</span>
      <h2>My Cart</h2>
      <div id="cart-items">${itemsHtml || '<div>Your cart is empty.</div>'}</div>
      <div id="cart-billing" style="margin-top:1.5em;">
        <h3>Billing Details</h3>
        <div class="cart-billing-total" style="font-size:1.2em;font-weight:700;">Total: ₹${total}</div>
        <button id="cart-proceed-btn" class="cta-button" style="margin-top:1em;">Proceed</button>
      </div>
    </div>
  `;
  cartModal.style.display = 'block';
  cartModal.querySelector('.close').onclick = function() {
    cartModal.style.display = 'none';
  };
  cartModal.querySelector('#cart-proceed-btn').onclick = function() {
    alert('Proceeding to checkout!');
    cartModal.style.display = 'none';
  };
  // Attach event listeners for + and - buttons
  cartModal.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.onclick = function() {
      const name = btn.getAttribute('data-name');
      const action = btn.getAttribute('data-action');
      if (action === '+') {
        window.updateCartQty(name, 1);
      } else {
        window.updateCartQty(name, -1);
      }
    };
  });
}

window.updateCartQty = function(name, delta) {
  const idx = cart.findIndex(item => item.name === name);
  if (idx > -1) {
    cart[idx].qty += delta;
    if (cart[idx].qty < 1) {
      cart.splice(idx, 1);
    }
    updateCartCount();
    showCartModal();
  }
};

// Add cart view button at top right and update count
function updateCartCount() {
  let cartCount = document.getElementById('cart-count');
  if (!cartCount) {
    const nav = document.querySelector('nav');
    if (nav) {
      const cartBtn = document.createElement('div');
      cartBtn.className = 'cart-view-btn';
      cartBtn.id = 'cart-view-btn';
      cartBtn.style.position = 'absolute';
      cartBtn.style.top = '18px';
      cartBtn.style.right = '32px';
      cartBtn.style.cursor = 'pointer';
      cartBtn.style.display = 'flex';
      cartBtn.style.alignItems = 'center';
      cartBtn.style.gap = '0.7em';
      cartBtn.innerHTML = `
        <img src="cart.jpg" alt="Cart" class="cart-icon" style="width:48px;height:48px;vertical-align:middle;">
        <span style="font-size:1.2rem;font-weight:700;color:#222;">My Cart</span>
        <span class="cart-count" id="cart-count" style="background:##000000;color:#fff;border-radius:50%;padding:4px 12px;font-size:1.1rem;position:relative;top:-10px;left:-10px;">0</span>
      `;
      nav.appendChild(cartBtn);
      cartCount = cartBtn.querySelector('#cart-count');
      cartBtn.onclick = showCartModal;
    }
  }
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  }
}

// Initialize cart button on page load
window.addEventListener('DOMContentLoaded', updateCartCount);

function attachProductCardClicks() {
  const allCards = document.querySelectorAll('.product-card');
  allCards.forEach(card => {
    card.onclick = function() {
      const img = card.querySelector('img')?.getAttribute('src') || '';
      const name = card.querySelector('h3')?.textContent || '';
      const mrp = card.querySelector('.mrp')?.textContent.replace(/[^\d]/g, '') || card.querySelector('p')?.textContent.replace(/[^\d]/g, '') || '';
      const discount = card.querySelector('.discount-badge')?.textContent.replace(/[^\d]/g, '') || '0';
      const price = card.querySelector('.new-price')?.textContent.replace(/[^\d]/g, '') || card.querySelector('p')?.textContent.replace(/[^\d]/g, '') || '';
      showProductModal({ img, name, mrp, discount, price });
    };
  });
}
attachProductCardClicks();

// Close modal (background click)
window.addEventListener('click', function(event) {
  const modal = document.getElementById('product-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
    window.location.hash = '#products';
  }
});

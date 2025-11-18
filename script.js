// Hide loading spinner after page load
window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
        window.showNext(category);
      } else {
        window.showPrev(category);
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
        window.showNext(category);
      } else {
        window.showPrev(category);
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
    <div style="display:flex;align-items:center;gap:2rem;">
      <img src="${product.img}" alt="${product.name}" style="width:180px;height:180px;border-radius:1rem;object-fit:cover;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
      <div style="display:flex;flex-direction:column;gap:1.2rem;align-items:flex-start;">
        <h2 style="font-size:2rem;margin:0;">${product.name}</h2>
        <p style="font-size:1.2rem;color:#007bff;font-weight:600;margin:0;">₹${product.price}</p>
        <button id="add-to-cart-btn" class="cta-button" style="font-size:1.1rem;">Add to Cart</button>
      </div>
    </div>
  `;
  modal.style.display = 'block';
  document.getElementById('add-to-cart-btn').onclick = function() {
    modal.style.display = 'none';
    window.location.hash = '#products';
  };
  // Attach close handler to the dynamically created close button
  modalBody.querySelector('.close').onclick = function() {
    modal.style.display = 'none';
    window.location.hash = '#products';
  };
}

// Close modal (background click)
window.addEventListener('click', function(event) {
  const modal = document.getElementById('product-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
    window.location.hash = '#products';
  }
});

function attachProductCardClicks() {
  const allCards = document.querySelectorAll('.product-card');
  allCards.forEach(card => {
    card.onclick = function() {
      const img = card.querySelector('img')?.getAttribute('src') || '';
      const name = card.querySelector('h3')?.textContent || '';
      const price = card.querySelector('p')?.textContent.replace(/[^\d]/g, '') || '';
      showProductModal({ img, name, price });
    };
  });
}
attachProductCardClicks();

// Newsletter Form Handling
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message');
    if (email) {
        message.textContent = 'Thank you for subscribing!';
        message.style.color = 'green';
        document.getElementById('email').value = '';
    } else {
        message.textContent = 'Please enter a valid email.';
        message.style.color = 'red';
    }
});

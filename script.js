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

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Product Carousel
let currentIndex = 0;
const carousel = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.product-card');
const totalCards = cards.length;
const visibleCards = Math.floor(document.querySelector('.carousel').offsetWidth / (cards[0].offsetWidth + 32)); // 32px = margin (16px each side)

function clampIndex(idx) {
    // Prevent scrolling past the last visible set
    const maxIndex = Math.max(0, totalCards - visibleCards);
    return Math.min(Math.max(idx, 0), maxIndex);
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = clampIndex(currentIndex + 1);
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = clampIndex(currentIndex - 1);
    updateCarousel();
});

function updateCarousel() {
    const card = cards[0];
    const cardWidth = card.offsetWidth;
    const cardMargin = parseInt(window.getComputedStyle(card).marginLeft) + parseInt(window.getComputedStyle(card).marginRight);
    const offset = -currentIndex * (cardWidth + cardMargin);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Responsive: update visibleCards and reset carousel on resize
window.addEventListener('resize', () => {
    currentIndex = clampIndex(currentIndex);
    updateCarousel();
});

// Testimonial Slider
let slideIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
    });
});

// Auto-slide testimonials
setInterval(() => {
    slideIndex = (slideIndex + 1) % testimonials.length;
    showSlide(slideIndex);
}, 5000); // Change slide every 5 seconds

// Modal for Product Details
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        // Simulate fetching product details (replace with real data)
        const productData = {
            modal1: { title: 'Classic Sneaker', desc: 'Comfortable and stylish everyday sneaker.', price: '₹12000' },
            modal2: { title: 'Urban Boot', desc: 'Perfect for city walks and urban adventures.', price: '₹15000' },
            modal3: { title: 'Casual Loafer', desc: 'Effortless elegance for any occasion.', price: '₹10000' },
            modal4: { title: 'Running Shoe', desc: 'Built for performance and speed.', price: '₹7000' },
            modal5: { title: 'Slip-On Comfort', desc: 'Easy to wear, all-day comfort.', price: '₹5000' },
            modal6: { title: 'High-Top Street', desc: 'Trendy high-top for street style.', price: '₹14000' },
            modal7: { title: 'Eco Runner', desc: 'Eco-friendly runner for the conscious athlete.', price: '₹8000' },
            modal8: { title: 'Bold Trainer', desc: 'Make a statement with bold trainers.', price: '₹9000' }
        };
        const data = productData[modalId];
        if (data) {
            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.desc}</p>
                <p><strong>${data.price}</strong></p>
                <button class="cta-button">Add to Cart</button>
            `;
            modal.style.display = 'block';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

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

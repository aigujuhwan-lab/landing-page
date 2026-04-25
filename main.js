// Initialize Lucide Icons
lucide.createIcons();

// Reveal on Scroll functionality
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once the element is shown, we don't need to observe it anymore
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Smooth Scroll and Menu Close for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu when link is clicked
        if (navLinks) navLinks.classList.remove('active');
        const icon = menuToggle?.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Subtracting nav height
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Navbar opacity
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(5, 5, 5, 0.9)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(5, 5, 5, 0.7)';
        nav.style.boxShadow = 'none';
    }
});

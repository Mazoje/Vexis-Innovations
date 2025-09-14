// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (menuToggleBtn && mobileMenuPanel && mobileMenuOverlay) {
        const toggleMenu = () => {
            mobileMenuPanel.classList.toggle('is-open');
            mobileMenuOverlay.classList.toggle('is-visible');
        };

        menuToggleBtn.addEventListener('click', toggleMenu);
        mobileMenuOverlay.addEventListener('click', toggleMenu);
    }

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    // On page load, check for saved theme
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // --- Active Nav Link ---
    const currentPath = window.location.pathname.split('/').pop(); // Gets the current file name e.g., "about.html"
    const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
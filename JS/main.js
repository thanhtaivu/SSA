document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

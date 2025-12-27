document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation library
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Optional: for animating the hamburger
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Sticky Header Effect (Optional polish)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
            header.style.height = "70px"; // Shrink slightly
        } else {
            header.style.boxShadow = "none";
            header.style.height = "80px";
        }
    });
});

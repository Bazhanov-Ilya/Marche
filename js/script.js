window.addEventListener('scroll', function() {
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const memuToggle = document.querySelector('.menuToggle');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav');
    memuToggle.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
};
const burgerBtn = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const body = document.body;

burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
})
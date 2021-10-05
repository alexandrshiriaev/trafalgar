const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
const navItems = document.querySelectorAll('.nav-item');
const testimonials = document.querySelectorAll('.testimonial');
const slides = 4;
let activeSlide = 1;

function nextSlide() {
    navItems[activeSlide - 1].classList.remove('active');
    navItems[activeSlide].classList.add('active');
    testimonials[activeSlide - 1].classList.remove('active');
    testimonials[activeSlide].classList.add('active');
    activeSlide += 1;
    checkAvailableArrows();
}


function prevSlide() {
    navItems[activeSlide - 2].classList.add('active');
    navItems[activeSlide - 1].classList.remove('active');
    testimonials[activeSlide - 2].classList.add('active');
    testimonials[activeSlide - 1].classList.remove('active');
    activeSlide -= 1;
    checkAvailableArrows();
}

function checkAvailableArrows() {
    if (activeSlide === 1) {
        console.log('first')
        leftArrow.classList.remove('available');
        rightArrow.classList.add('available');
    } else if (activeSlide === slides) {
        console.log('last')
        leftArrow.classList.add('available');
        rightArrow.classList.remove('available');
    } else {
        leftArrow.classList.add('available');
        rightArrow.classList.add('available');
    }
}

leftArrow.addEventListener('click', () => {
    if (!leftArrow.classList.contains('available')) return;
    return prevSlide();
})

rightArrow.addEventListener('click', () => {
    if (!rightArrow.classList.contains('available')) return;
    return nextSlide();
})

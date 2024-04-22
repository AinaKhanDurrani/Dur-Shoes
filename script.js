const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function updateSlide() {
    const slideWidth = slides[currentSlide].clientWidth;
    const offset = -slideWidth * currentSlide;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 7000);
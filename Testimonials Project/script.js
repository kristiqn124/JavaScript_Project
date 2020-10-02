var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var slides = document.querySelectorAll('.slide');
let i = 0;

next.addEventListener('click', NextSlide);

function NextSlide() {
    i++;
    if (i > slides.length - 1) {
        i = 0;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[i].style.display = 'grid';
}

prev.addEventListener('click', PrevSlide);

function PrevSlide() {
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[i].style.display = 'grid';

}

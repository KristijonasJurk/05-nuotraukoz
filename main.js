const slides = document.getElementsByClassName('slides');
const kaire = document.querySelector('.kaire');
const desine = document.querySelector('.desine')
let index = 1;

function plusSlides(n) {
    showSlides(index += n);
}

function showSlides(n) {
    if (n >= slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}
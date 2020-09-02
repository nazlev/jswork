'use strict';
let leftArrow = document.querySelector('.back');
let rightArrow = document.querySelector('.next');

window.addEventListener('load', function () {

leftArrow.addEventListener('click', function () {
    images.setNextLeftImage();
});

rightArrow.addEventListener('click', function () {
    images.setNextRightImage();
});
images.init();
});
let images = {
    currentIdx: 0,

    slides: [],

    init() {
        this.slides = document.querySelectorAll('.sliderPhoto');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove("hiddenPhoto")
    },

    hideVisibleImages() {
        document
            .querySelector('.sliderPhoto:not(.hiddenPhoto)')
            .classList.add('hiddenPhoto');
    },

    setNextLeftImage() {
        this.hideVisibleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const changeSlide = this.slides[this.currentIdx];
        changeSlide.classList.add('slider-leftToRightAnimation');
        changeSlide.classList.remove('hiddenPhoto');
        setTimeout(() => {
            changeSlide.classList.remove('slider-leftToRightAnimation');
        }, 500);

    },

    setNextRightImage() {
        this.hideVisibleImages();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const changeSlide = this.slides[this.currentIdx];
        changeSlide.classList.add('slider-rightToLeftAnimation');
        changeSlide.classList.remove('hiddenPhoto');
        setTimeout(() => {
            changeSlide.classList.remove('slider-rightToLeftAnimation');
        }, 500);
    },
};
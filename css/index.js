document.addEventListener("DOMContentLoaded",'resize', function () {
    const slides = document.querySelector('.slides');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let slideIndex = 0;
    const totalSlides = document.querySelectorAll('.slides li').length;
    
    function showNextSlide() {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateSlidePosition();
    }

    function showPrevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = totalSlides - 1;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slides.style.marginLeft = `-${slideIndex * 100}%`;
    }
    next.addEventListener('click', showNextSlide);
    prev.addEventListener('click', showPrevSlide);
    let sliderWidth = slider.offsetWidth;
    slides.style.width = `${sliderWidth * images.length}px`;
    images.forEach(img => {
        img.style.width = `${sliderWidth}px`;
        img.style.height = `auto`;})
});


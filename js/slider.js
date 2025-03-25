// Client Engagements Slider
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let slideWidth = document.querySelector('.slide').offsetWidth;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateSlidePosition(withTransition = true) {
    if (slides) { // Check if slides exist to avoid errors
        slides.style.transition = withTransition ? 'transform 0.5s ease-in-out' : 'none';
        slides.style.transform = `translateX(-${currentSlide * (slideWidth + 10)}px)`; // +10 for margin
        // Hide/show buttons based on loop (optional, can be removed for seamless loop)
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

function autoSlide() {
    if (slides) {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop to 0 after the last slide
        updateSlidePosition(true);
    }
}

if (prevBtn && nextBtn && slides) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to last slide if at 0
        updateSlidePosition(true);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop to 0 after the last slide
        updateSlidePosition(true);
    });

    let slideInterval = setInterval(autoSlide, 3000);

    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseover', () => clearInterval(slideInterval));
        slider.addEventListener('mouseout', () => {
            slideInterval = setInterval(autoSlide, 3000);
        });
    }

    window.addEventListener('resize', () => {
        slideWidth = document.querySelector('.slide').offsetWidth;
        updateSlidePosition(true);
    });

    // Initialize the slider position
    updateSlidePosition();
}
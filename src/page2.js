let slideIndex = 0;
let autoSlideInterval;
let isPaused = false;

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.gallery-slide img');
    const slideWidth = slides[0].clientWidth;

    function changeSlide(direction) {
        slideIndex += direction;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        document.querySelector('.gallery-slide').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function togglePause() {
        const pauseButton = document.querySelector('.pause');
        if (isPaused) {
            startAutoSlide();
            pauseButton.textContent = 'Pause';
        } else {
            stopAutoSlide();
            pauseButton.textContent = 'Play';
        }
        isPaused = !isPaused;
    }

    function navigateToPage() {
        window.location.href = 'another-page.html'; // Replace with the URL of the target page
    }

    // Event listeners
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
    document.querySelector('.pause').addEventListener('click', togglePause);
    document.querySelector('.navigate').addEventListener('click', navigateToPage);

    // Start automatic slide show
    startAutoSlide();

   
});

function backhome() {
        window.location.href = 'index.html';
    
    }
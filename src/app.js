let slideIndex = 0;
let slideInterval;

// Function to initialize the slideshow
function initSlideShow() {
    showSlides(slideIndex);
    startSlideInterval();
}

// Function to change slides
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let thumbnails = document.getElementsByClassName("thumbnail");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Highlight the current thumbnail
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    thumbnails[slideIndex].classList.add("active");
}

// Function to start automatic slideshow
function startSlideInterval() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 4000); // Change slide every 3 seconds (adjust interval as needed)
}


// Function to reset automatic slideshow timer
function resetSlideInterval() {
    clearInterval(slideInterval); // Clear previous interval
    startSlideInterval(); // Start new interval
}


// Function to navigate directly to a slide using thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Initialize the slideshow
initSlideShow();

function page2btn() {
    window.location.href = 'page2.html';

}

function naturebtn() {
    window.location.href = 'nature.html';

}

function filmbtn() {
    window.location.href = 'film.html'


}

function backhome() {
    window.location.href = 'index.html';

}
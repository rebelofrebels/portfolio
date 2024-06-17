let slideIndex = 0;

// Function to initialize the slideshow
function initSlideShow() {
    showSlides(slideIndex);
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

// Function to navigate directly to a slide using thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Initialize the slideshow
initSlideShow();
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;
let interval;

// Function to show the current slide
function showSlide(i) {
    if (i >= images.length) {
        index = 0;  
    }
    if (i < 0) {
        index = images.length - 1;
    }
    console.log(index, " " ,i, " ", images.length);
    // console.log(index, " " ,i, " ", images.length);
   
   
    slides.style.transform = `translateX(-${index * 100}%)`;
    console.log(slides.style.transform);


}

// Next and Previous functions
function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// Function to start the slider
function startSlider() {
    interval = setInterval(nextSlide, 3000);
}

// Function to stop the slider
function stopSlider() {
    clearInterval(interval);
}

// Start the slider on page load
startSlider();

// Add hover events to pause and resume slider
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', stopSlider);
slider.addEventListener('mouseout', startSlider);

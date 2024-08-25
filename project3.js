let currentIndex = 0;
const slideInterval = 5000; // Interval time in milliseconds (5000ms = 5 seconds)

// Function to show a slide based on the index
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const dots = document.querySelectorAll('.dot');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Function to move to the next or previous slide
function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Function to handle dot click
function dotClick(index) {
    showSlide(index);
}

// Initialize the slider
function initSlider() {
    const totalSlides = document.querySelectorAll('.slide').length;
    const dotsContainer = document.querySelector('.dots');

    // Create dots dynamically
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => dotClick(i));
        dotsContainer.appendChild(dot);
    }

    showSlide(currentIndex);

    // Auto-slide functionality
    setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

// Initialize the slider on page load
document.addEventListener('DOMContentLoaded', initSlider);
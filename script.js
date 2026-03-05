// script.js

// -----------------------------
// Portfolio JS Template
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  
    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open'); // slides menu in/out
      navToggle.classList.toggle('active'); // optional: animate hamburger
    });
  
    // ===== OPTIONAL: Smooth Scroll for Nav Links =====
    const navLinkElements = document.querySelectorAll('.nav-link');
  
    navLinkElements.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jump
        const targetID = link.getAttribute('href').substring(1); // remove #
        const targetSection = document.getElementById(targetID);
  
        if(targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // adjust for sticky nav height
            behavior: 'smooth'
          });
        }
  
        // Close mobile menu after click
        if(navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          navToggle.classList.remove('active');
        }
      });
    });
  
    // ===== FUTURE PLACEHOLDER =====
    // You can add animations, scrollspy, or other interactivity here
  
  });

  const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open'); // slide-in menu
  navToggle.classList.toggle('open'); // hamburger to X
});




// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-arrow');
const prevButton = document.querySelector('.left-arrow');

const slideWidth = slides[0].getBoundingClientRect().width + 20; // image width + gap

// Move carousel by width of one slide
nextButton.addEventListener('click', () => {
  track.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
  track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});
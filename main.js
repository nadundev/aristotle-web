import "./style.css";
import Typewriter from 'typewriter-effect/dist/core';
import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

new Typewriter('#typewriter', {
  strings: ['Ready to win with Aristotle HQ.', 'Welcome to Aristotle HQ.', 'Making the world a better place.'],
  autoStart: true,
  loop: true,
  cursor: "|",
  delay: 75,
});

// JavaScript to handle opening and closing of the mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");
  const menuLinks = mobileMenu.querySelectorAll('a'); // Select all links within the mobile menu

  // Function to open the mobile menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden"); // Show the mobile menu
  });

  // Function to close the mobile menu
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Hide the mobile menu
  });

  // Function to close the mobile menu when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden"); // Hide the mobile menu
    });
  });
});

// Function to change header background opacity based on scroll position
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});

// Initialize smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll('a[href*="#"]', {
    // Options
    speed: 700, // How fast to complete the scroll in milliseconds
    speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
    easing: 'easeInOutCubic', // Easing pattern to use
  });
});

document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});
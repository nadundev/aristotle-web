import "./style.css";

// JavaScript to handle opening and closing of the mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");

  // Function to open the mobile menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden"); // Show the mobile menu
  });

  // Function to close the mobile menu
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Hide the mobile menu
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
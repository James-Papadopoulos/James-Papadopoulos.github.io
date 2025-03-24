document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  mobileMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Update footer year dynamically
  const yearEl = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;

  // Add scroll effect for sticky navbar shadow
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Initialize Swiper slider if available
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

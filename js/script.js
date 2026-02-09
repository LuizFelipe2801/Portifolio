/* ============================================
   PORTFOLIO - JAVASCRIPT FUNCTIONALITY
   ============================================ */

// DOM Elements
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".nav-link");
const topBtn = document.getElementById("top");

// ============================================
// STICKY HEADER ON SCROLL
// ============================================
window.addEventListener("scroll", () => {
  // Add sticky class to header
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // Show or hide back-to-top button
  if (window.scrollY > 200 && topBtn) {
    topBtn.classList.add("show-top");
  } else if (topBtn) {
    topBtn.classList.remove("show-top");
  }

  // Close menu if scrolling
  if (navlist.classList.contains("open")) {
    navlist.classList.remove("open");
    menu.classList.remove("bx-x");
  }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
menu.addEventListener("click", () => {
  navlist.classList.toggle("open");
  menu.classList.toggle("bx-x");

  // Add sticky effect on mobile menu
  if (window.scrollY < 50) {
    header.classList.toggle("sticky");
  }
});

// ============================================
// SMOOTH NAVIGATION LINKS
// ============================================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove active class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Close mobile menu
    if (navlist.classList.contains("open")) {
      navlist.classList.remove("open");
      menu.classList.remove("bx-x");
      header.classList.remove("sticky");
    }
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ============================================
// SET ACTIVE NAV LINK ON PAGE LOAD
// ============================================
window.addEventListener("load", () => {
  const sections = document.querySelectorAll("main > section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

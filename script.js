const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const topBtn = document.getElementById("top");

// Toggle sticky header on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // Show or hide back-to-top button
  if (window.scrollY > 200) {
    topBtn.classList.add("show-top");
  } else {
    topBtn.classList.remove("show-top");
  }

  // Close menu if scrolling
  navlist.classList.remove("open");
  menu.classList.remove("bx-x");
});

// Toggle mobile menu
menu.addEventListener("click", () => {
  navlist.classList.toggle("open");
  menu.classList.toggle("bx-x");

  if (window.scrollY < 50) {
    header.classList.toggle("sticky");
  }
});

// Scroll to top smoothly
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

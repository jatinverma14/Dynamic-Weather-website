const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("mob-view");
  hamburger.classList.toggle("cross-burger");
});

// ===========================================
// BEM JavaScript - Om Os Page
// Uses BEM modifier classes: --active
// ===========================================

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  sidebar.classList.toggle("sidebar--active");
  overlay.classList.toggle("overlay--active");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("burger--active");
  sidebar.classList.remove("sidebar--active");
  overlay.classList.remove("overlay--active");
});

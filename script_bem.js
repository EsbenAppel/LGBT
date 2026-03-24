// ===========================================
// BEM JavaScript - Homepage (Index)
// Uses BEM modifier classes: --active
// ===========================================

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  burger.classList.toggle("burger--active");
  sidebar.classList.toggle("sidebar--active");
  overlay.classList.toggle("overlay--active");
}

burger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    burger.classList.remove("burger--active");
    sidebar.classList.remove("sidebar--active");
    overlay.classList.remove("overlay--active");
  }
});

// ===========================================
// Slideshow functionality
// ===========================================

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  let dots = document.getElementsByClassName("slideshow__dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slideshow__dot--active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("slideshow__dot--active");
}

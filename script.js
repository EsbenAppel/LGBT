document.addEventListener("DOMContentLoaded", () => {

  // BURGER MENU
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (burger && sidebar && overlay) {
    burger.onclick = () => {
      burger.classList.toggle("active");
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    overlay.onclick = () => {
      burger.classList.remove("active");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    };
  }

  // SLIDESHOW
  let slideIndex = 1;

  const slides = document.getElementsByClassName("mySlides");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    showSlides(slideIndex);

    if (prev) prev.onclick = () => plusSlides(-1);
    if (next) next.onclick = () => plusSlides(1);

    dots.forEach((dot, i) => {
      dot.onclick = () => currentSlide(i + 1);
    });
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let slide of slides) {
      slide.style.display = "none";
    }

    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

});

const burger = document.getElementById("burger")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

function toggleMenu(){

burger.classList.toggle("active")
sidebar.classList.toggle("active")
overlay.classList.toggle("active")

}

burger.addEventListener("click", toggleMenu)

overlay.addEventListener("click", toggleMenu)

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){

burger.classList.remove("active")
sidebar.classList.remove("active")
overlay.classList.remove("active")

}

})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
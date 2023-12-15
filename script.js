let slideIndex = 1;
showSlides(slideIndex,"maintenanceSlides");

// Next/previous controls
function plusSlides(n,slide) {
  showSlides(slideIndex += n, slide);
}

// Thumbnail image controls
function currentSlide(n,slide) {
  showSlides(slideIndex = n,slide);
}

function showSlides(n,slide) {
  let i;
  let slides = document.getElementsByClassName(slide);
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}


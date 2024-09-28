const mainSiteBtn = document.getElementById('main-site-btn');
const mainSiteMsg = document.getElementById('main-site-message');
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-image');

function showSlides() {
  slides.forEach((slide, _index) => {
    slide.classList.remove('active');
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop Back to first image
  }

  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 6000); // 6 Sec Interval
}

showSlides();

/* If Main Site is Disabled, shows notification message.
mainSiteBtn.addEventListener('click', function() {
    mainSiteMsg.classList.remove('hidden');
  });

*/


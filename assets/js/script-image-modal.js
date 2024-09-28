// Image Modal
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imageModal');
const fullSizeImage = document.getElementById('fullSizeImage');
const captionText = document.getElementById('captionText');
const closeBtn = document.querySelector('.close');
let currentImageIndex;

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    fullSizeImage.src = item.src;
    captionText.innerHTML = item.alt;
    currentImageIndex = index;
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

document.querySelector('.prev').onclick = () => {
  currentImageIndex = (currentImageIndex === 0) ? galleryItems.length - 1 : currentImageIndex - 1;
  updateModalImage();
};

document.querySelector('.next').onclick = () => {
  currentImageIndex = (currentImageIndex === galleryItems.length - 1) ? 0 : currentImageIndex + 1;
  updateModalImage();
};

const updateModalImage = () => {
  fullSizeImage.src = galleryItems[currentImageIndex].src;
  captionText.innerHTML = galleryItems[currentImageIndex].alt;
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
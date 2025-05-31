const images = document.querySelectorAll('.gallery-image');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.getElementById('closeBtn');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImage.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

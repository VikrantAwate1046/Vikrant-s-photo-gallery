document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your feedback!");
});

const images = document.querySelectorAll(".gallery img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");

images.forEach((img) => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

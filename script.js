const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".thumbnail").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

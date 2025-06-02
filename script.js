// Get references to the HTML elements we'll interact with
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

// Select all elements that have the class "thumbnail" (your gallery images)
const thumbnails = document.querySelectorAll(".thumbnail");

// Loop through each thumbnail image and add a click listener
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src; // Set the source of the large popup image to the clicked thumbnail's source
        popup.style.display = "flex"; // Make the popup visible (using flexbox for centering)

        // A small delay to allow the 'display' change to register before starting opacity transition
        setTimeout(() => {
            popup.classList.add("active"); // Add 'active' class to trigger the fade-in effect
        }, 10);
    });
});

// Add a click listener to the close button inside the popup
closeBtn.addEventListener("click", () => {
    popup.classList.remove("active"); // Remove 'active' class to start the fade-out effect

    // After a short delay (matching CSS transition), hide the popup completely
    setTimeout(() => {
        popup.style.display = "none";
    }, 300); // This delay should match your CSS transition duration for 'opacity'
});

// Optional: Close popup when clicking on the blurred background itself
popup.addEventListener("click", (event) => {
    // Check if the click event originated directly on the 'popup' element (the background),
    // and not on the image or close button inside it.
    if (event.target === popup) {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    }
});

// Optional: Close popup when the Escape key is pressed
document.addEventListener("keydown", (event) => {
    // If the Escape key is pressed AND the popup is currently active (visible)
    if (event.key === "Escape" && popup.classList.contains("active")) {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    }
});

// JavaScript to dynamically add images to the gallery
document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.querySelector(".gallery-grid");

    // Sample image URLs (replace with your own)
    const imageUrls = [
        "/Users/hrushikeshgoud/Desktop/mini project /heic /1.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /2.jpg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /3.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /4.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /5.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /6.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /7.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /8.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /9.jpeg",
        "/Users/hrushikeshgoud/Desktop/mini project /heic /10.jpeg",
        // Add more image URLs as needed
    ];

    // Loop through image URLs and create thumbnails
    imageUrls.forEach(function(url) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = url;
        image.alt = "Gallery Image";

        galleryItem.appendChild(image);
        galleryGrid.appendChild(galleryItem);
    });
});

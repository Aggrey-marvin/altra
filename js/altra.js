var imageUrls = [
    "images/resource/connection.jpeg",
    "images/resource/connection1.jpeg",
    "images/resource/connection2.jpeg",
    // "images/resource/connection3.jpeg",
    "images/resource/connection4.jpeg",
]

// Function to set a random image source
function setRandomImage() {
    var randomNumber = Math.floor(Math.random() * imageUrls.length);
    var randomImageUrl = imageUrls[randomNumber];
    document.getElementById("dynamicImage").src = randomImageUrl;
}

// Call the function to set a random image source initially
setRandomImage();
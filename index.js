const images = [
    "./images/firstImg.jpg",
    "./images/secondImg.jpg",
    "./images/thirdImg.jpg",
    "./images/fourthImg.jpg",
];

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

let currentIndex = 0;

function updateImageAndButtons() {
    image.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImageAndButtons();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImageAndButtons();
    }
});

updateImageAndButtons();

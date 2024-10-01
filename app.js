const leftArrow = document.querySelector('.left-arrow');
let currentImg = document.querySelector('.carousel-img');
const rightArrow = document.querySelector('.right-arrow');
let imageCounter = 0;

const imageArray = ['/images/car-img-1.jpg', '/images/car-img-2.jpg', '/images/car-img-3.jpg', '/images/car-img-4.jpg'];

rightArrow.addEventListener('click', () => {
    if(imageCounter > 2) {
        imageCounter = 0;
        currentImg.src = imageArray[0];
    } else {
        imageCounter++;
        currentImg.src = imageArray[imageCounter];
    }
})


leftArrow.addEventListener('click', () => {
    if(imageCounter <= 0) {
        imageCounter = 3;
        currentImg.src = imageArray[3];
    } else {
        imageCounter--;
        currentImg.src = imageArray[imageCounter];
    }
})
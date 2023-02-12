const btnBackward = document.querySelector('.btn-backward');
const btnForward = document.querySelector('.btn-forward');
const currentImage = document.querySelector('.current-image');

const images = [
    './src/img/slider/01.jpg',
    './src/img/slider/02.jpg',
    './src/img/slider/03.jpg',
    './src/img/slider/04.jpg',
    './src/img/slider/05.jpg',
    './src/img/slider/06.jpg',
];

// setting a default img index
let currentIndex = 0;

function imgForward() {
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
}

function imgBackward() {
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }
        showImage();
}

function showImage() {
    currentImage.setAttribute('src', images[currentIndex]);
}

btnForward.addEventListener('click', imgForward);
btnBackward.addEventListener('click', imgBackward);

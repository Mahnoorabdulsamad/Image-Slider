let images = document.querySelectorAll('.carousal-img');
let preBtn =document.getElementById('preBtn')
let nextBtn =document.getElementById('nextBtn')

let currentImageIndex = 0;

function showImages(index){
    images[currentImageIndex].classList.remove('active');

       currentImageIndex = (index + images.length)  %  images.length; 

       images[currentImageIndex].classList.add ('active');
}


function showNextImage(){
    showImages(currentImageIndex + 1);

}

function showPreImage(){
    showImages(currentImageIndex - 1);

}

preBtn.addEventListener('click', showPreImage);
nextBtn.addEventListener('click', showNextImage);

setInterval(showNextImage,3000);
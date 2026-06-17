const images = Array.from(
    document.querySelectorAll('.galeria img')
);

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

const counter = document.getElementById('counter');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener('click', () => {

        currentIndex = index;

        modal.style.display = 'flex';

        updateModal();

    });

});

function updateModal(){

    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;

    counter.textContent =
        `Memória ${currentIndex + 1} de ${images.length}`;

}

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    updateModal();

});

prevBtn.addEventListener('click', () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    updateModal();

});

counter.textContent = `Memória ${currentIndex + 1} de ${images.length}`;

closeBtn.addEventListener('click', () => {

    modal.style.display = 'none';

});
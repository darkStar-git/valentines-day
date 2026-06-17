const video = document.getElementById('dedicatoria');
const btnFinal = document.getElementById('btnFinal');

video.addEventListener('ended', () => {

    btnFinal.style.opacity = '1';
    btnFinal.style.pointerEvents = 'auto';

    btnFinal.textContent = 'Tem mais uma coisa que preciso te dizer ❤️';

    btnFinal.classList.add('show');

});
document.addEventListener('DOMContentLoaded'), () => {
    const myImage = document.querySelector('.myImage');

    fadeInButton.addEventListener('click', () => {
        myImage.classList.remove('hidden');
        myImage.classList.add('visible');
    });
}
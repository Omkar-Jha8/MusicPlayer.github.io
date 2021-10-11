const play = document.querySelector('#play');
const music = document.querySelector('audio')
play.addEventListener('click', () => {
    music.play();
})
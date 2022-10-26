let cube = document.querySelector('.cube');
let cube2 = document.querySelector('.cube-2');
let cube3 = document.querySelector('.cube-3');

let btnPrev = document.querySelector('.left-arrow');
let btnNext = document.querySelector('.right-arrow');

let btnPlay = document.querySelector('.play-pause');

let pos = 0;

btnPrev.addEventListener('click', () => {
    pos += 90;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

btnNext.addEventListener('click', () => {
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

btnPrev.addEventListener('mouseover', () => {
    pos -= 25;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

btnNext.addEventListener('mouseover', () => {
    pos += 25;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

btnPrev.addEventListener('mouseout', () => {
    pos += 25;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

btnNext.addEventListener('mouseout', () => {
    pos -= 25;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

interval = -1;

btnPlay.addEventListener('click', () => {
    if (interval == -1) {
        interval = setInterval(loop,2000);
    } else {
        clearInterval(interval);
        interval = -1;
        pos += 90;
    }
    loop();
});


function loop(){
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
};

changePlayPause = () => {
    const playIcon = document.querySelector('.play-pause i');
    const playIconClass = playIcon.classList[1];
    let togglePlay = (play, pause) => {
        playIcon.classList.remove(play);
        playIcon.classList.add(pause);
    }
    if (playIconClass === 'fa-play') {
        togglePlay('fa-play', 'fa-pause');
    } else {
        togglePlay('fa-pause', 'fa-play');
    }
}
const playPauseBtn = document.querySelector('.play-pause');
playPauseBtn.addEventListener('click', changePlayPause);

const closeTape = document.querySelector('.tape-close'),
      tape = document.querySelector('.tape'),
      countTape = document.querySelector('.tape-count');


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY,
        featuresOffset = document.querySelector('.features').offsetTop;

    if (scrollY >= featuresOffset - 500) {
        tape.style.bottom = '0';
        
    }
    
});

const startTimer = (time = 600)  => {
    let timer = setInterval( () => {
        
        let minutes = parseInt(time / 60, 10);
        let seconds = parseInt(time % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        countTape.textContent = minutes + ":" + seconds;
        
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
        
    }, 1000);
}

startTimer();





closeTape.addEventListener('click', () =>{
    tape.style.bottom = '-50%';
    tape.remove();
});


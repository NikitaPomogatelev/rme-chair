import Timer from './timer';

const tape = () => {
    const closeTape = document.querySelector('.tape-close'),
      tape = document.querySelector('.tape'),
      countTape = document.querySelector('.tape-count');
        
      let isOpen = false;

        let timer1 = new Timer('.tape-count', 600);
        timer1.start();

        window.addEventListener('scroll', (e) => {
            let scrollY = window.scrollY,
                featuresOffset = document.querySelector('.features').offsetTop;
        
            if (!isOpen && (scrollY >= featuresOffset - 400)) {
                tape.style.bottom = '0';
                isOpen = true;
                e.stopPropagation();
            } 
          
        });

        closeTape.addEventListener('click', () =>{
            tape.style.bottom = '-50%';
            timer1.stop();
        });


}
export default tape;









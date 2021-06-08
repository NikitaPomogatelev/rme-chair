const aboutBtn = document.querySelector('.about__btn'),
      aboutBox = document.querySelector('.about__box');

      aboutBtn.addEventListener('click', () => {
        aboutBox.classList.add('is-open');
        aboutBtn.remove();
      });
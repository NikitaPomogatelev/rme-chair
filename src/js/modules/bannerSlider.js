import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const bannerSlider = () => {
  const bannerContainer = document.querySelector('.hero-section__slider');

    const bannerSwiper = new Swiper(bannerContainer, {
       
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
        loop: true,
        
        
        navigation: {
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
          },
        

        
    });
}
export default bannerSlider;

    
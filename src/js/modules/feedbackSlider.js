import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);


const FeedbackMainSlider = new Swiper('.feedback__main-slider', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    // speed: 1500,
    navigation: {
          nextEl: '.feedback-button-next',
          prevEl: '.feedback-button-prev',
        },
  });
  
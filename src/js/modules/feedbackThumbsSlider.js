import Swiper, { Navigation, Autoplay, EffectFade, Thumbs} from 'swiper';

Swiper.use([Navigation, Autoplay, EffectFade, Thumbs]);


// document.querySelectorAll('.feedback__main-block').forEach(n => {
//   const thumbs = new Swiper(n.querySelector('.main-thumbs'), {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     centeredSlides: true,
//     slideToClickedSlide: true,
//   });

//   const slider = new Swiper(n.querySelector('.main-top'), {
//     navigation: {
//       nextEl: n.querySelector('.main-thumbs-next'),
//       prevEl: n.querySelector('.main-thumbs-prev'),
//     },
//     spaceBetween: 10,
//     thumbs: {
//       swiper: thumbs
//     }
//   });
// });

const feedbackThumbsSlider = () => {
  const mainThumbs1 = new Swiper('.main-thumbs-1', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
    centeredSlides: true,

    speed: 1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },


  });

const mainTopSlider1 = new Swiper('.main-top-1', {
  slidesPerView: 1,
  loop: true,

  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  centeredSlides: true,
  
  

  speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: '.main-thumbs-next',
    prevEl: '.main-thumbs-prev',
  },

  thumbs: {  
    swiper: mainThumbs1
  },

  

});





const mainThumbs2 = new Swiper('.main-thumbs-2', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
    centeredSlides: true,

    speed: 1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },


  });

const mainTopSlider2 = new Swiper('.main-top-2', {
  slidesPerView: 1,
  loop: true,

  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  centeredSlides: true,
  
  

  speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: '.main-thumbs-next',
    prevEl: '.main-thumbs-prev',
  },

  thumbs: {  
    swiper: mainThumbs2
  },

  

});
const mainThumbs3 = new Swiper('.main-thumbs-3', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
    centeredSlides: true,

    speed: 1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },


  });

const mainTopSlide3 = new Swiper('.main-top-3', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  centeredSlides: true,
  speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: '.main-thumbs-next',
    prevEl: '.main-thumbs-prev',
  },

  thumbs: {  
    swiper: mainThumbs3
  },

});
}
export default feedbackThumbsSlider;


    
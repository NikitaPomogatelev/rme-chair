import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Thumbs} from 'swiper';

Swiper.use([Navigation, Autoplay, EffectFade, Pagination, Thumbs]);


const safetySlider = new Swiper('.safety-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: '.safety-button-next',
      prevEl: '.safety-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    breakpoints: {
      // when window width is >= 1000px
      1000: {
        slidesPerView: 7,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      // when window width is >= 480px
      430: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 20
        
      },
      
    }

  });
  



    

  



 



  

  

  
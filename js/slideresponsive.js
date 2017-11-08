var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 50,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
module.exports = function () {

  const topSlider = new Swiper("#top-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
  });

  const servicesSlider = new Swiper("#services-slider", {
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 1.5,
    freeMode: true,
    freeModeMomentum: false,
    loop: true,
    speed: 8000,
    mousewheelControl: false,
    keyboardControl: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true
    },
    breakpoints: {
      576: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 3.3,
      },
      1024: {
        slidesPerView: 4.3,
      },
    },
  });

  const projectsSlider = new Swiper("#projects-slider", {
    navigation: {
      nextEl: ".projects-slider__btn--next",
      prevEl: ".projects-slider__btn--prev",
    },
    loop: true,
    simulateTouch: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1024: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      },
    },
  });

  const projectsSmSlider = new Swiper(".projects-sm-slider", {
    navigation: {
      nextEl: ".projects-sm-slider__btn--next",
      prevEl: ".projects-sm-slider__btn--prev",
    },
    effect: "fade",
    loop: true,
  });

};
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
    slidesPerView: 1.5,
    spaceBetween: 10,
    grabCursor: true,
    // mousewheel: {
    //   releaseOnEdges: true,
    // },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
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
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 4000000,
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
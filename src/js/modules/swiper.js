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

};
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

};
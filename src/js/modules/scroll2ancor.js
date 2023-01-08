module.exports = function() {

  $(function() {
    $('.scroll[href*=\\#]').on("click", function(e){
       let anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });

};
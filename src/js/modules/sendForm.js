module.exports = function () {
  $('#footer__form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'assets/php/form.php',
      data: $(this).serialize(),
    }).done(function () {
      $('#footer__form')[0].reset();
      $('#footer__form-message').addClass('footer__form-message--success');
    });
    return false;
  });
};

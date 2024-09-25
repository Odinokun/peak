module.exports = function () {
  window.addEventListener('scroll', function () {
    var element = document.getElementById('top__whatsapp-text');
    if (window.scrollY > 250) {
      element.style.opacity = '0'; // Скрыть элемент
      element.style.pointerEvents = 'none'; // Скрыть элемент
    } else {
      element.style.opacity = '1'; // Показать элемент
      element.style.pointerEvents = 'auto'; // Показать элемент
    }
  });
};

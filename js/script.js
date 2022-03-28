const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');

modalBtn.click(function () {
  $('.modal-order').show(500);
});

modalClose.click(function () {
  $('.modal-order').hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function () {
  modalOrderTitle.text('Заполните форму');
});

$('.modal-order__form').submit(function (e) {
  e.preventDefault();
});

const navigation = $('.navigation');
const headerBurger = $('.header__burger');
const burgerCloseBtn = $('.navigation__close');

headerBurger.on('click', function () {
  navigation.animate({
    left: 0,
  }, 500, function () {
    burgerCloseBtn.animate({
      opacity: 1,
    }, 300, 'swing');
  });
});

const burgerClosed = () => {
  navigation.animate({
    left: -400,
  }, 500);
};

burgerCloseBtn.on('click', burgerClosed);
$('body').on('click', function (e) {
  if (!e.target.closest('.navigation') && navigation.css('left') === '0px')
    burgerClosed();
});
document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.menu img[src="images/menu.png"]');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerClose = document.querySelector('.burger-close');

  burgerButton.addEventListener('click', function() {
    burgerMenu.classList.add('active');
  });

  burgerClose.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
  });

  document.querySelector('.burger-menu__overlay').addEventListener('click', function() {
    burgerMenu.classList.remove('active');
  });

  // Закрытие меню при клике на ссылки
  document.querySelectorAll('.burger-menu__list a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
    });
  });
});
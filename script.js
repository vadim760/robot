function showPopup(popupId) {
  // Сначала скрываем все попапы
  document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
  });
  
  // Показываем нужный попап
  document.getElementById(`popup-${popupId}`).style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = 'none';
  });
  document.getElementById('overlay').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  // Остальной код для бургер-меню
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

  document.querySelectorAll('.burger-menu__list a').forEach(link => {
      link.addEventListener('click', () => {
          burgerMenu.classList.remove('active');
      });
  });

  // Добавляем обработчик для оверлея
  document.getElementById('overlay').addEventListener('click', closePopup);
});
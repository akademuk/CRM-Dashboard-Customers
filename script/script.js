document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.dashboard__nav-item a');

  items.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      items.forEach(i => i.parentElement.classList.remove('dashboard__nav-item--active'));
      item.parentElement.classList.add('dashboard__nav-item--active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const closeButton = document.getElementById('close-button');
  const navbarLinks = document.getElementById('navbar-links');
  const body = document.getElementById('body');

  function toggleMenu(event) {
      event.stopPropagation(); // Останавливаем распространение события
      navbarLinks.classList.toggle('active');
      toggleButton.classList.toggle('open');
      body.classList.toggle('body-active');
  }

  toggleButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  // Закрытие меню при клике вне его области
  body.addEventListener('click', function (event) {
    if (navbarLinks.classList.contains('active') && !navbarLinks.contains(event.target) && !toggleButton.contains(event.target)) {
        toggleMenu(event);
    }
  });

  // Предотвращение закрытия меню при клике внутри него
  navbarLinks.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

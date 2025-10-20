document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.burger-btn'); // кнопка открытия
    const cart = document.getElementById('menu-cart');     // само меню
    const closeBtn = cart.querySelector('.menu-close');   // кнопка закрытия
    const menuLinks = cart.querySelectorAll('a[href^="#"]'); // якорные ссылки

    if (!cartBtn || !cart || !closeBtn) return;

    // Открыть меню
    cartBtn.addEventListener('click', function () {
        cart.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // 🔒 запрет скролла страницы
    });

    // Закрыть меню
    function closeMenu() {
        cart.classList.remove('is-open');
        document.body.style.overflow = ''; // 🔓 вернуть скролл
    }

    closeBtn.addEventListener('click', closeMenu);

    // Закрытие при клике на фон
    cart.addEventListener('click', function (e) {
        if (e.target === cart) {
            closeMenu();
        }
    });

    // Закрытие при клике на якорные ссылки
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });
});
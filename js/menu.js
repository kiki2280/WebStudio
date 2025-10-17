document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.burger-btn'); // кнопка открытия
    const cart = document.getElementById('menu-cart');     // само меню
    const closeBtn = cart.querySelector('.menu-close');   // кнопка закрытия

        console.log(cartBtn, cart, closeBtn);

    if (!cartBtn || !cart || !closeBtn) return;

    // Открыть меню
    cartBtn.addEventListener('click', function () {
        cart.classList.add('is-open');
    });

    // Закрыть меню
    closeBtn.addEventListener('click', function () {
        cart.classList.remove('is-open');
    });

    // Закрытие при клике на фон
    cart.addEventListener('click', function (e) {
        if (e.target === cart) {
            cart.classList.remove('is-open');
        }
    });
});
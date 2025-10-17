const cart = function () { // инкопсуляция кода
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')

    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex'     //открытие мод окна
        
    })

    closeBtn.addEventListener('click', function () {
        cart.style.display = ''         //закрытие мод окна
        
    })
}

cart()
(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active')
    })
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.navbar');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('burger__active');
    });
    
}());


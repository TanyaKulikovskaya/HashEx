const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const menuList = document.querySelectorAll(".menu__item");

burger.addEventListener('click', () => {
    toogleMobileMenu();
});

overlay.addEventListener('click', function () {
    closeMobileMenu();
});

menuList.forEach(i => {
    i.addEventListener('click', (e) => {
        closeMobileMenu();
    })
});

const toogleMobileMenu = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('show');
}

const closeMobileMenu = () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    overlay.classList.remove('show');
}



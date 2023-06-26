document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__col--menu");
    const header = document.querySelector("header");

    menu.style.top = header.clientHeight + 10 +  "px";

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    });

    if (window.innerWidth <= 576) {
        
    }
});
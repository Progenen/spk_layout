'use strict'; 

const subMenu = () => {
    const subMenuBtn = document.querySelectorAll('.header__submenu-btn');
    const subMenu = document.querySelectorAll('.header__submenu');

    for (let i = 0; i < subMenuBtn.length; i++) {
        subMenuBtn[i].addEventListener('click', () => {
            let menu = subMenuBtn[i].querySelector('.header__submenu');
            
            subMenuBtn[i].classList.add('active');
            menu.classList.add('active');
            for (let i = 0; i < subMenuBtn.length; i++) {
                subMenuBtn[i].classList.remove('active');
                subMenu[i].classList.remove('active');
            }
        })
    } 
}

export default subMenu;
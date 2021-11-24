

class Menu {
    constructor () {
        this.menuBody = document.querySelector(".header-menu");
        this.menuBtn = document.querySelector(".burger-menu");
        this.menuOpenedFlag = this.menuBtn.classList.contains('burger-menu_active') && this.menuBody.classList.contains('header-menu_active') ? true : false;
        this.subMenuPos = this.menuBody.clientLeft;
    }
    openMenu = () => {
       this.menuBody.classList.add('header-menu_active');
       this.menuBtn.classList.add('burger-menu_active');
    }

    closeMenu = () => {
        this.menuBody.classList.remove('header-menu_active');
        this.menuBtn.classList.remove('burger-menu_active');
    }

    render () {
        this.menuBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.menuOpenedFlag) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        });
    }
} 

export default Menu;
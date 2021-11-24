'use strict';
import 'bootstrap';
import adaptive from "./modules/adaptive";
import subMenu from './modules/subMenu';
document.addEventListener('DOMContentLoaded', function () {
    adaptive();
    subMenu();
    document.querySelectorAll('.header__submenu').forEach(element => {
        element.style.bottom = '-100px';
    });
});
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {

    const headerFixed = document.querySelector(".header-new--fixed");
    const header = document.querySelector(".header-new");
    const mobMenu = document.querySelector(".mobile-menu");
    const mobMenuContent = document.querySelector(".mobile-menu__content");
    const sectionAfterHeaderFixed = document.querySelector(".header-new--fixed + main>section");
    const imgMob = document.querySelectorAll("[data-img-mob]");
    const imgTablet = document.querySelectorAll("[data-img-tablet]");
    const bgMob = document.querySelectorAll("[data-bg-mob]");
    const bgTablet = document.querySelectorAll("[data-bg-tablet]");
    const langItems = document.querySelectorAll(".header-new__lang-list-item");
    const langList = document.querySelector(".header-new__lang-list");

    function sectionAfterHeaderFixedPaddingInit() {
        if (headerFixed) {
            sectionAfterHeaderFixed.style.paddingTop = headerFixed.getBoundingClientRect().height + "px";
        }
    }

    function mobMenuTopInit() {
        mobMenu.style.top = header.getBoundingClientRect().height + "px";
        mobMenu.style.paddingBottom = header.getBoundingClientRect().height + "px";
    }

    function dropdownMenu(dropItems) {
        dropItems.forEach(el => {
            el.querySelector(":scope > a").addEventListener("click", (e) => {
                e.preventDefault();

                const elList = el.querySelector("ul");
                const elListHeight = elList.scrollHeight;
                const elListMargin = 5;
                
    
                if (el.classList.contains("active")) {
                    el.classList.remove("active")
                    elList.style.height = 0 + "px";
                    elList.style.marginTop = 0;
                } else {
                    dropItems.forEach((elJ) => {
                        elJ.classList.remove("active");
                        elJ.querySelector("ul").style.height = 0;
                        elList.style.marginTop = 0;
                    })
                    el.classList.add("active");
                    elList.style.height = elListHeight + "px";
                    elList.style.marginTop = elListMargin + "px";
                }
            })
        });
    }

    sectionAfterHeaderFixedPaddingInit();

    langItems.forEach(item => {
        item.addEventListener("click", () => {
            if (!item.classList.contains("header-new__lang-list-item--cur")) {
                langItems.forEach(item2 => {
                    item2.classList.remove("header-new__lang-list-item--cur")
                })
                item.classList.add("header-new__lang-list-item--cur");
                langList.prepend(item);
            }
        })
    })

    if (document.querySelectorAll(".support__item").length > 0 && window.innerWidth >= 768) {
        let maxItemHeight = 0;

        document.querySelectorAll(".support__item").forEach(el => {
            let para = el.querySelector("p");

            if (para) {
                let paraHeight = para.scrollHeight

                el.style.height = el.scrollHeight + "px";

                para.style.maxHeight = "0px";

                el.addEventListener("mouseenter", () => {
                    para.style.maxHeight = para.scrollHeight + "px";
                    el.classList.add("hover");
                })

                el.addEventListener("mouseout", () => {
                    para.style.maxHeight = "0px";
                    el.classList.remove("hover");
                })
            }
        })

    }
        const burger = document.querySelector(".header-new__burger");

        sectionAfterHeaderFixedPaddingInit();
        mobMenuTopInit();

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            mobMenu.classList.toggle("active");
            document.body.classList.toggle("lock");
        });


        if (window.innerWidth <= 576) {

            const headerLang = document.querySelector(".header-new__lang");

            mobMenuContent.append(headerLang);
        }


    if (window.innerWidth <= 992) {
        const headerSearch = document.querySelector(".header-new__search");

        mobMenuContent.prepend(headerSearch);
        mobMenuTopInit();

        if (imgTablet.length > -1) {
            imgTablet.forEach(el => {
                el.setAttribute("src", el.getAttribute("data-img-tablet"));
            })
        }

        if (bgTablet.length > -1) {
            bgTablet.forEach(el => {
                el.style.backgroundImage = `url(${el.getAttribute('data-bg-tablet')})`
            })
        }
    }

    if (window.innerWidth <= 768) {
        const dataBgsMob = document.querySelectorAll("[data-bg-mob]");
        const headerCall = document.querySelector(".header-new__call");
        const footerMenuLinkDropdown = document.querySelectorAll(".footer-new__menu > li:has(ul)");

        dropdownMenu(footerMenuLinkDropdown);

        mobMenuContent.append(headerCall);

        dataBgsMob.forEach(el => {
            el.style.backgroundImage = `url(${el.getAttribute("data-bg-mob")})`
        });

        sectionAfterHeaderFixedPaddingInit();
        mobMenuTopInit();


        if (imgMob.length > -1) {
            imgMob.forEach(el => {
                el.setAttribute("src", el.getAttribute("data-img-mob"));
            });
        }

        if (bgMob.length > -1) {
            bgMob.forEach(el => {
                el.style.backgroundImage = `url(${el.getAttribute('data-bg-mob')})`
            })
        }

    }

    if (window.innerWidth <= 576) {

        sectionAfterHeaderFixedPaddingInit();
    }

    if (document.querySelector(".news")) {
        document.querySelectorAll(".news").forEach(el => {
            new Swiper(el.querySelector(".news__slider"), {
                slidesPerView: "auto",
                modules: [Navigation],
                spaceBetween: 5,
                navigation: {
                    prevEl: el.querySelector(".news__nav-arrow--prev"),
                    nextEl: el.querySelector(".news__nav-arrow--next")
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                }
            })
        })
    }

    if (document.querySelector(".partners")) {
        const partnersSlider = new Swiper('.partners__slider', {
            slidesPerView: "auto",
            spaceBetween: 5,
            freeMode: true,
            breakpoints: {
                768: {
                    spaceBetween: 48
                }
            }
        })
    }

});
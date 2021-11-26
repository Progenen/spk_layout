'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Offer alert event
    document.querySelector('.offer__alert-close').addEventListener('click', () => {
        document.querySelector('.offer__alert').classList.add('offer__alert-hide');
    });

    // Chage btn place in home-found
    if (window.screen.width < 992) {
        document.querySelector('.home-found__col').append(document.querySelector('.home-found__btn'));
    }

    // Home Blog Adaptive slider
    if (window.screen.width < 1200) {
        if (document.querySelector('.home-blog__items')) {
            $('.home-blog__items').slick({
                dots: true,
                arrows: false,
                slidesToShow: 3,
                autoplay: true,
                dotsClass: 'home-blog__dots',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }
});
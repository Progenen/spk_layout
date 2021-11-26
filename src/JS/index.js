document.addEventListener('DOMContentLoaded', function () {
  
    // Offer alert event
    if (document.querySelector('.offer__alert-close')) {
      document.querySelector('.offer__alert-close').addEventListener('click', () => {
        document.querySelector('.offer__alert').classList.add('offer__alert-hide');
    });
    }

    // Chage btn place in home-found
    if (window.screen.width < 992) {
        if (document.querySelector('.home-found')) {
          document.querySelector('.home-found__col').append(document.querySelector('.home-found__btn'));
        }
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

  initSimpleUi()
  initMenu()
  initFilter()
  initFooter()
  initSlider()

  function initSimpleUi() {

    // custom select
    $(".product-select select").niceSelect()

    // filter dropdown
    $(".filter-type__name").on("click", function(){
      $(this).toggleClass("active")
      $(this).next().slideToggle(400)
    });
  }

  function initMenu() {

    let items = $(".main-menu__item.has-submenu")

    if(window.outerWidth < 1200) {
      items.each(function(index) {
        switch(index) {
          case 0:
            $(this).addClass("active")
        }
      })
    }

    items.on("click", function(e){
      e.preventDefault()
      if(!$(this).hasClass("active")) {
        items.removeClass("active")
        $(this).addClass("active")
      } else {
        $(this).removeClass("active")
      }
    })

    $(".burger-menu").on("click", function(){
      if(window.outerWidth < 1200)
        $(this).toggleClass("active")
        $(".main-menu").slideToggle(500)
    })
  }

  function initFilter() {

    let fTrigger = $(".filter-trigger")
    let filter = $(".filter-sidebar")

    fTrigger.on("click", function(){
      filter.fadeIn(300)
    })

    $(".filter-sidebar__overlay, .active-filters__close").on("click", function(){
      filter.fadeOut(300)
    })
  }

  function initFooter() {

    $(".footer__title").on("click", function() {
      $(this).next().slideToggle(500)
    })
  }

  function initSlider() {

    if(window.screen.width < 768) {
      $("#reviewsMob").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1
      })
    }
  }
});
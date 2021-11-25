document.addEventListener('DOMContentLoaded', function () {

  initSimpleUi()
  initMenu()
  initFooter()

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
    //menu

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

  function initFooter() {

    $(".footer__title").on("click", function() {
      $(this).next().slideToggle(500)
    })
  }

});
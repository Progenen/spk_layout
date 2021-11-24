document.addEventListener('DOMContentLoaded', function () {

  initSimpleUi()

  function initSimpleUi() {
    $(".product-select select").niceSelect()
    $(".filter-type__name").on("click", function(){
      $(this).toggleClass("active")
      $(this).next().slideToggle(400)
    });
  }

});
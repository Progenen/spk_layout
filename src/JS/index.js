document.addEventListener('DOMContentLoaded', function () {
  
    // Offer alert event
    if (document.querySelector('.home-offer__alert-close')) {
      document.querySelector('.home-offer__alert-close').addEventListener('click', () => {
        document.querySelector('.home-offer__alert').classList.add('home-offer__alert-hide');
      });
    }

    // Chage btn place in home-found
    if (document.querySelector('.home-found')) {
      if (window.screen.width < 992) {
          document.querySelector('.home-found__col').append(document.querySelector('.home-found__btn'));
      }
    }

    if (window.screen.width > 992) {
      scrollBlock('.card-wrapper', '.stop-block', 64);
    }

    // Replace card-product and share-block in storie
    if (document.querySelector('.storie-share-block')) {
      if (window.screen.width < 992) {
        document.querySelector('.storie-product-mob-place').append(document.querySelector('.storie-product'));
        document.querySelector('.share-block-mob-place').append(document.querySelector('.storie-share-block'));
      }
    }

    // Adaptive in blogPage
    if (document.querySelector(".blog-catalog__tabs")) {
      if (window.screen.width < 768) {
        const tabs = document.querySelector('.blog-catalog__tabs');
        const tabsCurrent = document.querySelector('.blog-catalog__tabs-current');
        const tabsLink = document.querySelectorAll('.blog-catalog__tabs-item');
        const dropMenu = document.querySelector('.blog-catalog__tabs-dropdown-menu')

        dropMenu.append(tabs);

        for (let i = 0; i < tabsLink.length; i++ ){
          tabsLink[i].classList.add('dropdown-item');
          if (tabsLink[i].querySelector('a').classList.contains('active')) {
            tabsCurrent.append(tabsLink[i].textContent);
          }
          tabsLink[i].addEventListener('click', () => {
              tabsLink.forEach(element => {
                element.classList.remove('active');
              });
              tabsCurrent.textContent = '';
              tabsCurrent.append(tabsLink[i].textContent)
              tabsLink[i].classList.add('active')
          })
        }
      }
    }
    
  
  initSimpleUi();
  initMenu();
  initFooter();


    function scrollBlock (block, stopBlock, padding) { 
			if (document.querySelector(block)) {
        var a = document.querySelector(block), b = null, P = 55;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				if (b == null) {
					var Sa = getComputedStyle(a, ''), s = '';
					for (var i = 0; i < Sa.length; i++) {
						if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
							s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
						}
					}
					b = document.createElement('div');
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Ra = a.getBoundingClientRect(),
					R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector(stopBlock).getBoundingClientRect().top + padding);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
				if ((Ra.top - P) <= 0) {
					if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = - R +'px';
					} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
					}
				} else {
					b.className = '';
					b.style.top = '';
				}
				window.addEventListener('resize', function() {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
      }
		}

    if (window.screen.width > 992) {
      scrollBlock('.card-wrapper', '.stop-block', 64);
    }

    // Replace card-product and share-block in storie
    if (document.querySelector('.storie-share-block')) {
      if (window.screen.width < 992) {
        document.querySelector('.storie-product-mob-place').append(document.querySelector('.storie-product'));
        document.querySelector('.share-block-mob-place').append(document.querySelector('.storie-share-block'));
      }
    }
    

    function scrollBlock (block, stopBlock, padding) { 
			if (document.querySelector(block)) {
        var a = document.querySelector(block), b = null, P = 55;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				if (b == null) {
					var Sa = getComputedStyle(a, ''), s = '';
					for (var i = 0; i < Sa.length; i++) {
						if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
							s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
						}
					}
					b = document.createElement('div');
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Ra = a.getBoundingClientRect(),
					R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector(stopBlock).getBoundingClientRect().top + padding);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
				if ((Ra.top - P) <= 0) {
					if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = - R +'px';
					} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
					}
				} else {
					b.className = '';
					b.style.top = '';
				}
				window.addEventListener('resize', function() {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
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
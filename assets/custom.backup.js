(function($){

    $(document).ready(function (){
        // PRODUCT IMAGE zoom
        if($(window).width() >= 680) {
            $('.productFeaturedImage img')
                .wrap('<span style="display:inline-block; overflow: hidden; width: 100%; height: auto;"></span>')
                .css('display', 'block')
                .parent()
                .zoom({
                    on: 'click',
                    touch: true,
    				magnify: 1
    			});
        };

        // WISHLIST HIDE COUNTER IF ZERO

        if($('span.iWishCount').text() == 0) {
    	   $('#iWishFull').hide();
           $('.iwishTitle h1').hide();
    	   $('#iWishEmpty').show();
           $('#iWishEmpty .iWishCount').hide();
    	   } else {
    		   $('#iWishEmpty').hide();
    		   $('#iWishFull').show();
               $('.iwishTitle h1').show();
	   };

       if($('.iwishMsgInfo').length) {
           $('.iwishTitle h1').hide();
       }

        if($(window).width() >= 1023) {
            hh = $('header').height();
            $('header').removeClass('fixed');
            if ($(this).scrollTop() > hh){
                $('header').addClass("sticky");
                // $('header.standard').removeClass("active");
            } else {
                $('header.sticky').removeClass("sticky");
                // $('header.standard').addClass("active");
            }

        } else {
            $('header').addClass('fixed');
        };

        Shopify.onItemAdded = function(cart) {
           jQuery.getJSON('/cart.js', function(cart) {
               $('.cartCount').html(cart.item_count);
            });
        };


        $('#related .productWrapper').pick(10);


        // Cookies.remove('promoBanner');

        if(Cookies.get('promoBanner') == 'displayed') {
            $('body').addClass('promoHidden');
        } else {
            $('header .subscribe').addClass('active');
        }

        // SEARCH BAR REVEAL DESKTOP

        $('.searchTrigger').click(function(e) {
            if($('header').hasClass('sticky')) {
                $('.searchBar').addClass('reveal');
                $('.searchBar input').focus();
            } else {
                $('.searchBar').addClass('reveal');
                $(this).addClass('reveal');
                $('.searchBar input').focus();
            };
        });

        $('.refresh').click(function(e) {
            $('.searchBar').removeClass('reveal');
            $('.searchTrigger').removeClass('reveal');
        });

        // LOAD MORE PAGINATION ON BLOG PAGE

        $('.loadMore').on('click', function(e){
           e.preventDefault();
           $(this).addClass('loading').text('LOADING...');
           $.ajax({
               type: "GET",
               url: $(this).attr('href') + '#loop',
               dataType: "html",
               success: function(out){
                //    console.log('test');
                   result = $(out).find('.blogWrapper');
                    // console.log(result);
                   nextlink = $(out).find('.loadMore').attr('href');
                   $('.featuredBlogPaginate .container').append(result.fadeIn(300));
                   $('.loadMore').removeClass('loading').text('Load More');
                   if (nextlink != undefined) {
                       $('.loadMore').attr('href', nextlink);
                   } else {
                       $('.loadMore').remove();
                       $('a.backTop').addClass('active');
                   }
                }
            });
        });


        // SEARCH BAR REVEAL MOBILE

        $('.headerLeft form.mobile button').click(function(e) {
            e.preventDefault();
            $('.searchBar').addClass('revealMobile');
            $('.searchBar input').focus();
        });

        $('.refresh').click(function(e) {
            $('.searchBar').removeClass('revealMobile');
        });

        // MOBILE MENU
        $('a.nav').click(function (e) {
            e.preventDefault();
            $('#mobileMenu').addClass('active');
            $('.menuOverlayBlock').addClass('active');
            $('html').addClass('menuActive');
        });

        $('.close').click(function (e) {
            e.preventDefault();
            $('#mobileMenu').removeClass('active');
            $('.menuOverlayBlock').removeClass('active');
            $('html').removeClass('menuActive');
        });

        $('section.menuOverlayBlock').click(function(e) {
            e.preventDefault();
            $('section.miniCart').removeClass('active');
            $('html').removeClass('menuActive');
            $('section.menuOverlayBlock').removeClass('active');
            $('header .headerContainer .headerRight a.cartButton').removeClass('active');
            $('#mobileMenu').removeClass('active');
        });

        // PRODUCT FILTER FILTERWIDGET CLASS ADD

        $('#bc-sf-filter-tree-mobile').click(function(e) {
            e.preventDefault();
            if($('.filterWidget').hasClass('active')) {
                $('.filterWidget').removeClass('active');
                $('.menuOverlayBlock').removeClass('active');
                $('.seeResults').removeClass('active');
                $('body, html').removeClass('filter');
                $('#bc-sf-filter-tree-mobile button').html('Refine by');
            } else {
                $('.filterWidget').addClass('active');
                $('.menuOverlayBlock').addClass('active');
                $('.menuOverlayBlock').css({'z-index' : '999'});
                $('.seeResults').addClass('active');
                $('body, html').addClass('filter');
                $('#bc-sf-filter-tree-mobile button').html('close');
            };
        });

        $('.seeResults').click(function(e) {
            $('.filterWidget').removeClass('active');
            $('.menuOverlayBlock').removeClass('active');
            $('.seeResults').removeClass('active');
            $('#bc-sf-filter-tree').css({'display' : 'none'});
            $('#bc-sf-filter-tree-mobile button').html('Refine by');
        });

        //Cart JS

        $('.productMain .productDetails .addToCart button').click(function(e) {
            //e.preventDefault();
            $('header .headerContainer .headerRight a.cartButton').addClass('active');
            $('section.miniCart').addClass('active');
            $('html').addClass('menuActive');
            $('section.menuOverlayBlock').addClass('active');
        });

        $('header .headerContainer .headerRight a.cartButton').click(function(e) {
            /*e.preventDefault();
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('section.miniCart').removeClass('active');
                $('html').removeClass('menuActive');
                $('section.menuOverlayBlock').removeClass('active');
            } else {
                $(this).addClass('active');
                $('section.miniCart').addClass('active');
                $('html').addClass('menuActive');
                $('section.menuOverlayBlock').addClass('active');
            }*/
        });

        $('.cart-view span.close').click(function(e) {
            e.preventDefault();
            if($('section.miniCart').hasClass('active')) {
                $('section.miniCart').removeClass('active');
                $('html').removeClass('menuActive');
                $('section.menuOverlayBlock').removeClass('active');
                $('.cartButton').removeClass('active');
            } else {

            }
        });




        //  AJAX MAILCHIMP SUBSCRIPTION

        $('form.subscribeForm').submit(function(e) {
           var $this = $(this);
               $.ajax({
               type: "GET", // GET & url for json slightly different
               url: "https://minimax.us13.list-manage.com/subscribe/post-json?c=?",
               data: $this.serialize(),
               dataType    : 'json',
               contentType: "application/json; charset=utf-8",
               error       : function(err) { alert("Could not connect to the registration server."); },
               success     : function(data) {
                   if (data.result != "success") {
                      $('p.errorMessage').addClass('error');
                      $('p.successMessage').removeClass('success');
                      $('a.successMessageButton').removeClass('success');
                      $('.subscribeText').removeClass('success');
                   } else {
                       $('form.subscribeForm').addClass('success');
                       $('p.successMessage').addClass('success');
                       $('a.successMessageButton').addClass('success');
                       $('.subscribeText').addClass('success');
                       $('p.errorMessage').removeClass('error');
                   }
               }
           });
           return false;
        });

        $('.productThumbnails a').click(function(e) {
            e.preventDefault();
            thisHref = $(this).attr('href');
            $('.productFeaturedImage img').attr('src', thisHref);
        });

        // BACK TO TOP

		$('.backTop').click(function (e) {
	        e.preventDefault();
			$('html, body').animate({ scrollTop: 0}, 1000);
		});


       $(window).on('scroll', function () {
           if ($(window).scrollTop() > 200) {
               $('.backTop').fadeIn();
           } else {
               $('.backTop').fadeOut();
           }
       });

        // GOOGLE MAPS

        $('.googleMap').each(function(){

        // create map
        map = new_map( $(this) );

        });

        // Footer Links reveal

		var speed = "500";

        $('span.location').click(function(e) {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.minus').removeClass('active');
                $(this).children('.plus').addClass('active');
                thisId = $(this).attr('id')
                $('.storeWrapper[rel='+thisId+']').removeClass('active');
            } else {
                $('.storeList .location').removeClass('active');
                $(this).addClass('active');
                $('.storeWrapper').removeClass('active');
                thisId = $(this).attr('id')
                $('.storeWrapper[rel='+thisId+']').addClass('active');
                $('.minus').removeClass('active');
                $('.plus').addClass('active');
                $(this).children('.minus').addClass('active');
                $(this).children('.plus').removeClass('active');
            }
        });




        $('.storeList .state').eq(0).children('.locations').children('.location').eq(0).addClass('active');

        $('.storeWrapper').eq(0).addClass('active');

        $('section.ourBrands .searchType span').click(function(e) {
            e.preventDefault();
            thisIndex = $(this).index();
            if($(this).hasClass('active')) {

            } else {
                $('section.ourBrands .searchType span').removeClass('active');
                $(this).addClass('active');
                if(thisIndex == 0) {
                    $('section.ourBrands .brandsCollection').removeClass('active');
                    $('section.ourBrands .brandsAZ').addClass('active');
                } else {
                    $('section.ourBrands .brandsCollection').addClass('active');
                    $('section.ourBrands .brandsAZ').removeClass('active')
                }

            }
        });

        $('section.ourBrands .alphabet span.category.available').click(function(e) {
            e.preventDefault();
            $('section.ourBrands .alphabet span.category.available').removeClass('active');
            $(this).addClass('active');
            thisLetter = $(this).text();
            $('.brandsAZ .brandListWrapper').children('span').remove();
            $('.brandsHidden span').each(function() {
                thisTitle = $(this).text();
                thisTitleLetter = thisTitle.slice(0,1);
                if(thisTitleLetter == thisLetter) {
                    $('.brandsAZ .brandListWrapper').append($(this).clone());
                }
            });
        });

        $('section.ourBrands .categorySelect .category').click(function(e) {
            e.preventDefault();
            thisIndex = $(this).index();
            if($(this).hasClass('active')) {

            } else {
                $('section.ourBrands .categorySelect .category').removeClass('active');
                $(this).addClass('active');
                $('section.ourBrands .brandList .brandListWrapper .colBlock').removeClass('active');
                $('section.ourBrands .brandList .brandListWrapper .colBlock').eq(thisIndex).addClass('active');
            }
        });

        if($(window).width() <= 767) {

            var speed = "500";

    		$('.footerColumn span').click(function(e) {
                e.preventDefault();
                $(this).parent().siblings('.footerColumn').children('ul.footerExpand').slideUp(speed);
                $(this).parent().siblings().children('span').removeClass('active');

                if($(this).hasClass('active')) {
                    $(this).siblings('ul.footerExpand').slideUp(speed);
                    $(this).removeClass('active');
                } else {
                    $(this).siblings('ul.footerExpand').slideDown(speed);
                    $(this).addClass('active');
                };
    		});
        } else {
            $('.footerColumn span').siblings('ul.footerExpand').show();
        };
        // PRODUCT INFORMATION TABS

        $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	   })

       // PRODUCT INFORMATION TABS MOBILE

       $('span.title').click(function(){
       var tab_id = $(this).attr('data-tab');

           if($(this).hasClass('current')) {
               $('span.title').removeClass('current');
               $('.tab-content-mobile').removeClass('current');
           } else {
               $('span.title').removeClass('current');
               $('.tab-content-mobile').removeClass('current');

               $(this).addClass('current');
               $("#"+tab_id).addClass('current');
           }
       });

       // MEGAMENU
       if($('html').hasClass('touchevents')) {
           $('.headerNav .site-nav li a').on('click', function(e){
               e.preventDefault();
               thisIndex = $(this).parent().index();
               if($('.megaMenu').children('.block').eq(thisIndex).length ) {

                   if($(this).hasClass('active')) {
                       $(this).removeClass('active');
                       $('.megaMenu').children('.block').eq(thisIndex).removeClass('active');
                   } else {
                       $('.site-nav li a').removeClass('active');
                       $('.megaMenu .block').removeClass('active');
                       $(this).addClass('active');
                       $('.megaMenu').children('.block').eq(thisIndex).addClass('active');
                   };
               } else {
                   thisUrl = $(this).attr('href');
                   window.location.href = thisUrl;
               };

           });
       } else {
           $('.headerNav .site-nav li a').mouseenter(function() {
                thisIndex = $(this).parent().index();
                $('.megaMenu').children('.block').removeClass('active');
                $('.headerNav .site-nav li a').removeClass('active');
                $(this).addClass('active');
                if($('.megaMenu').children('.block').eq(thisIndex).length ) {

                   $('.megaMenu').children('.block').eq(thisIndex).addClass('active');
                }
           });

           $('.headerNav .site-nav li a').mouseleave(function() {
               $('.megaMenu').children('.block').removeClass('active');
               $('.headerNav .site-nav li a').removeClass('active');
           });

           $('.megaMenu').children('.block').mouseenter(function() {
               thisIndex = $(this).index();
               $(this).addClass('active');
               $('.headerNav .site-nav li').eq(thisIndex).children('a').addClass('active');
           });

           $('.megaMenu').children('.block').mouseleave(function() {
               $(this).removeClass('active');
               $('.headerNav .site-nav li a').removeClass('active');
           });
       }

        // MEGAMENU MOBILE

         $('#mobileMenu ul.site-nav li a').on('click', function(e){
             e.preventDefault();
             thisIndex = $(this).parent().index();

             if($('.mobileMegaMenu').children('.block').eq(thisIndex).length ) {

                 if($(this).hasClass('active')) {
                     $(this).removeClass('active');
                     $('.mobileMegaMenu').children('.block').eq(thisIndex).removeClass('active');
                     $('.mobileMegaMenu').removeClass('active');
                     $('#mobileMenu ul.site-nav').removeClass('hide');
                     $('#mobileMenu .login').removeClass('hide');
                 } else {
                     $('#mobileMenu > .site-nav > li > a').removeClass('active');
                     $('.mobileMegaMenu > .block').removeClass('active');
                     $(this).addClass('active');
                     $('.mobileMegaMenu').addClass('active');
                     $('.mobileMegaMenu').children('.block').eq(thisIndex).addClass('active');
                     $('#mobileMenu ul.site-nav').addClass('hide');
                     $('#mobileMenu .login').addClass('hide');
                 };
             } else {
                 thisUrl = $(this).attr('href');
                 window.location.href = thisUrl;
             };

         });

         $('.back').on('click', function(e){
            e.preventDefault();
            $('.mobileMegaMenu').removeClass('active');
            $('#mobileMenu ul.site-nav li a').removeClass('active');
            $('#mobileMenu ul.site-nav').removeClass('hide');
            $('#mobileMenu .login').removeClass('hide');
         });

          $('.mobileMegaMenu ul li:first-child').on('click', function(e) {
              return;
              if($(this).parents('ul').hasClass('top') && $(this).parents('ul').hasClass('one')) {
                  console.log(this);
              } else {
                  e.preventDefault();
                  $(this).parents().siblings().children().removeClass('active');

                  if($(this).hasClass('active')) {
                      $(this).removeClass('active');
                      $(this).siblings().removeClass('active');
                  } else {
                      $(this).addClass('active');
                      $(this).siblings().addClass('active');
                  }
              }

          });

         $('.mobileMegaMenu ul.menuColumn.top.one li:nth-child(2)').on('click', function(e) {
                e.preventDefault();
                $(this).parents().siblings().children().removeClass('active');

                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).siblings().removeClass('active');
                } else {
                    $(this).addClass('active');
                    $(this).siblings().addClass('active');
                }
          });


        // OWL CAROUSEL - HOME

        $('.productCarousel .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{

                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false,
                    dots: true
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false,
                    dots: false
                }
            }
        });

        $('.shoppableOverlay .owl-carousel.oneColumnCarousel').owlCarousel({
            loop:false,
            margin:10,
            responsiveClass:true,
            navigationText: false,
            responsive:{

                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true,
                    dots: false
                },
                1000:{
                    items:3,
                    nav:true,
                    dots: false
                }
            }
        });

        $('.shoppableOverlay .owl-carousel.twoColumnCarousel').owlCarousel({
            loop:false,
            margin:10,
            responsiveClass:true,
            responsive:{

                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    dots: false
                },
                1000:{
                    items:2,
                    nav:true,
                    dots: false
                }
            }
        });

        $('.shoppableOverlay .owl-carousel.threeColumnCarousel').owlCarousel({
            loop:false,
            margin:10,
            responsiveClass:true,
            responsive:{

                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    dots: false
                },
                1000:{
                    items:1,
                    nav:true,
                    dots: false
                }
            }
        });


        // OWL CAROUSEL - PRODUCT MOBILE

        $('.productThumbnails .owl-carousel.product').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:false,
            items:1
        });

        // SHOPPABLE BANNER OPEN AND CLOSE

        $('a.shoppableButton').click(function(e) {
            e.preventDefault();
            $(this).siblings('.shoppableContainer').addClass('active');
        });

        $('a.shoppableClose').click(function(e) {
            e.preventDefault();
            $(this).parents('.shoppableContainer').removeClass('active');
        });

        // Flexslider

        $('.flexslider').flexslider({
            animation: "slide"
        });

        // Close Subscription Header

        $('.subscribe .close').click(function(e) {
            $('body').addClass('promoHidden');
            $('.megaMenu .block').removeClass('active');
            $('header nav ul li a').removeClass('active');
            //$(this).parent().addClass('hide');
            Cookies.set('promoBanner', 'displayed', { expires: 7 });
		});

        // Share block reveal

        $('.shareBlock a.share').click(function(e) {
			$('.shareOptions').addClass('active');
		});

        // BLOG TAGS REVEAL ON MOBILE

        $('li.tagDropdown').click(function(e) {
            if($(this).hasClass('active')) {
                 $(this).siblings().removeClass('active');
                 $(this).children('a.tagDropdown').removeClass('active');
                 $(this).removeClass('active');
            } else {
                $(this).siblings().addClass('active');
                 $(this).children('a.tagDropdown').addClass('active');
                $(this).addClass('active');
            }
		});


        if($(window).width() <= 1023) {
            $('header.sticky').removeClass('sticky');
            $('header').addClass('fixed');
            $('body').addClass('stickyHeader');
        };

        // STICKY HEADER

		$(window).scroll(function() {

            if($(window).width() >= 1023) {
                hh = $('header').height();
    			if ($(this).scrollTop() > hh){
    		    	$('header').addClass("sticky");
                    $('.searchTrigger').removeClass('reveal');
                    $('body').addClass('stickyHeader');
                    // $('header.standard').removeClass("active");
    		  	} else {
    		    	$('header.sticky').removeClass("sticky");
                    // $('header.standard').addClass("active");
                    $('body').removeClass('stickyHeader');
    			}

            } else {
                $('header').addClass('fixed');
            };

		});

        // SUBSCRIBE COOKIE POPUP

        $('.popupLink').magnificPopup({
            type: 'inline'
        });

        if($('body').hasClass('template-product')) {
            initPopup();
        } else {

        }

    });

    function initPopup() {
        //Cookies.remove('popup');
        if(Cookies.get('popup') == 'displayed') {
            //jQuery('.popupLink').trigger('click');
        } else {
            $('.popupLink').trigger('click');
            //console.log('test');
            Cookies.set('popup', 'displayed', { expires: 7 });
        }
    }

    // GOOGLE MAPS

        /*
    *  new_map
    *
    *  This function will render a Google Map onto the selected jQuery element
    *
    *  @type    function
    *  @date    8/11/2013
    *  @since    4.3.0
    *
    *  @param    $el (jQuery element)
    *  @return    n/a
    */

    function new_map( $el ) {

        // var
        var $markers = $el.find('.marker');


        // vars
        var args = {
            zoom        : 11,
            center        : new google.maps.LatLng(0, 0),
            mapTypeId    : google.maps.MapTypeId.ROADMAP
        };


        // create map
        var map = new google.maps.Map( $el[0], args);


        // add a markers reference
        map.markers = [];


        // add markers
        $markers.each(function(){

           add_marker( $(this), map );

        });


        // center map
        center_map( map );


        // return
        return map;

    }

    /*
    *  add_marker
    *
    *  This function will add a marker to the selected Google Map
    *
    *  @type    function
    *  @date    8/11/2013
    *  @since    4.3.0
    *
    *  @param    $marker (jQuery element)
    *  @param    map (Google Map object)
    *  @return    n/a
    */

    function add_marker( $marker, map ) {

        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
        var dataPin = $marker.attr('data-pin');

        // create marker
        var marker = new google.maps.Marker({
            position    : latlng,
            map            : map,
           icon        : dataPin
        });

        // add to array
        map.markers.push( marker );

        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content        : $marker.html()
            });

            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {

                infowindow.open( map, marker );

            });
        }

    }

    /*
    *  center_map
    *
    *  This function will center the map, showing all markers attached to this map
    *
    *  @type    function
    *  @date    8/11/2013
    *  @since    4.3.0
    *
    *  @param    map (Google Map object)
    *  @return    n/a
    */

    function center_map( map ) {

    	// vars
    	var bounds = new google.maps.LatLngBounds();

    	// loop through all markers and create bounds
    	$.each( map.markers, function( i, marker ){

    		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

    		bounds.extend( latlng );

    	});

    	// only 1 marker?
    	if( map.markers.length == 1 )
    	{
    		// set center of map
    	    map.setCenter( bounds.getCenter() );
    	    if($(window).width() >= 767) {
                map.setZoom( 16 );
            } else {
                map.setZoom( 15 );
            }
    	}
    	else
    	{
    		// fit to bounds
    		map.fitBounds( bounds );
    	}

    }

    $.fn.pick = function(how_many) {

        var how_many = how_many || 4;

        // Picking random numbers without repeating.
        var index_array = [];
        var original_obj_size = this.size();
        for (var i=0; i<original_obj_size; i++) {
          index_array.push(i);
        }
        //+ Jonas Raoni Soares Silva
        //@ http://jsfromhell.com/array/shuffle [rev. #1]
        var shuffle = function(v) {
          for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
          return v;
        };
        var new_index_array = shuffle(index_array).slice(0,how_many);

        // Ditching unpicked elements and removing those from the returned set.
        return this.each(function(i) {
           if ($.inArray(i,new_index_array) === -1) {
              $(this).remove();
           }
        }).filter(function() {
          if (this.parentNode === null) {
            return false;
          }
          else {
            return true;
          }
        });

    };

    /*
    *  document ready
    *
    *  This function will render each map when the document is ready (page has loaded)
    *
    *  @type    function
    *  @date    8/11/2013
    *  @since    5.0.0
    *
    *  @param    n/a
    *  @return    n/a
    */
    // global var
    var map = null;



	$( window ).scroll(function() {

	});

	$(window).load(function() {

	});


	$(window).resize(function() {
        if($(window).width() >= 1023) {
            $('header').removeClass('fixed');
            hh = $('header').height();
            if ($(this).scrollTop() > hh){
                $('header').addClass("sticky");
                // $('header.standard').removeClass("active");
            } else {
                $('header.sticky').removeClass("sticky");
                // $('header.standard').addClass("active");
            }
        } else {
            $('header').addClass('fixed');
        };
	});
})(window.jQuery);

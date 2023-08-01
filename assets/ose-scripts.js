(function($){

    $(document).ready(function () {

        $('.covid-19-banner .close').click(function () {
            $('.covid-19-banner').hide();
            $('.boost-pfs-search-suggestion-wrapper').addClass('noRedBanner');
            $('main').addClass('noRedBanner');
        });

        $('.header-form input').click(function () {
            $('.header-form').addClass('red-border');
        });

        $('.header-form input').blur(function () {
            $('.header-form').removeClass('red-border');
        });

        var lastScrollTop = 0, delta = 5;
        $(window).scroll(function() {

            if($(window).width() >= 1023) {
                hh = $('header').height();
    			if ($(this).scrollTop() > hh){
                    $('.covid-19-banner').hide();
    		    	$('header').addClass("sticky");
                    $('.searchTrigger').removeClass('reveal');
                    $('body').addClass('stickyHeader');
    		  	} else {
    		    	$('header.sticky').removeClass("sticky");
                    $('body').removeClass('stickyHeader');
    			}

            } else if(!$('.boost-pfs-search-box').val()) {
                $('.boost-pfs-search-suggestion-wrapper').addClass('noWhiteBanner');
                $('.boost-pfs-search-suggestion-wrapper').addClass('noRedBanner');
                var nowScrollTop = $(this).scrollTop();
                if(Math.abs(lastScrollTop - nowScrollTop) >= delta) {
                    if (nowScrollTop > lastScrollTop && nowScrollTop > 121) {
                        $('.covid-19-banner').hide();
                        $('.search-bar').addClass('moveup');
                        $('.white-header-menu').hide();
                        $('main').addClass('noWhiteBanner');
                        
                    } else {
                        $('.search-bar').removeClass('moveup');
                        $('.covid-19-banner').hide();
                    }
                lastScrollTop = nowScrollTop;
                }
            };

		});

        $('.fieldNext').click(function() {
            var theNext = $(this).siblings('.qty-text').val();
            var theId = $(this).siblings('.qty-text').data('item-id');

            if(theNext << 99) {
                var theCount = parseInt(theNext) + 1;
                $(this).siblings('.qty-text').val(theCount);
                $.ajax({
                    method:'POST',
                    url:'/cart/change.js',
                    data:{ id:theId, quantity:(theCount) },
                    dataType: 'json'
                }).done(function(e) {
                        window.location.reload();
                    }
                );
            }
        });

        $('.fieldPrev').click(function() {
            var thePrev = $(this).siblings('.qty-text').val();
            var theId = $(this).siblings('.qty-text').data('item-id');

            if(thePrev >> 0) {
                var theCount = parseInt(thePrev) - 1;
                $(this).siblings('.qty-text').val(theCount);
                $.ajax({
                    method:'POST',
                    url:'/cart/change.js',
                    data:{ id:theId, quantity:(theCount) },
                    dataType: 'json'
                }).done(function(e) {
                        window.location.reload();
                    }
                );
            }
        });

        $('.qty-text').on('change', function() {
            var theId = $(this).data('item-id');
            var theCount = parseInt($(this).val());
            $.ajax({
                method:'POST',
                url:'/cart/change.js',
                data:{ id:theId, quantity:(theCount) },
                dataType: 'json'
            }).done(function(e) {
                    window.location.reload();
                }
            );
        });

        $('.collection-readmore').on('click', function(e) {
            $('.boost-pfs-filter-collection-description').toggleClass('open');
            $(this).toggle();
        });
    });

})(window.jQuery);
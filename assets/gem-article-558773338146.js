

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1659673216752').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1659676976037').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1659678772902').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1659678772849').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659678772957').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1659678772941').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659677938314').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1659677938361').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659677938334').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1659677938299').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659678612599').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1659678612490').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659678612535').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1659678612555').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659677076448').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1659677076518').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1659677076559').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1659677076510').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505538').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661308505576').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505555').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661308505517').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505580').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661308505516').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505561').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661308505587').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505543').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661308505524').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505549').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661308505558').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505515').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661308505493').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661308505575').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661308505567').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
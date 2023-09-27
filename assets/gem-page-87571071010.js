

(function( jQuery ){
  var $module = jQuery('#m-1662014568397').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
  
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1691459933858').children('.module');   
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
  var $module = jQuery('#m-1691459933798').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1691459933736').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1691459933847').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1677820224744').children('.module');   
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
  var $module = jQuery('#m-1677822556035').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1677822556092').children('.module');
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
  var $module = jQuery('#m-1677822556032').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1677822556080').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1677822556147').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1677822556070').children('.module');
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
  var $module = jQuery('#m-1677822556132').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1677822556124').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1677822556156').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1677822556051').children('.module');
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
  var $module = jQuery('#m-1677822556094').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1677822556096').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1677822556113').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1677822556038').children('.module');
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
  var $module = jQuery('#m-1677822556163').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1677822556125').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1691468546671').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1691468546675').children('.module');
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
  var $module = jQuery('#m-1691468546716').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1691468546689').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1691468546715').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1691468546676').children('.module');
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
  var $module = jQuery('#m-1691468546635').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1691468546642').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1691468546616').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1691468546662').children('.module');
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
  var $module = jQuery('#m-1691468546610').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1691468546687').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1691468546618').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1691468546722').children('.module');
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
  var $module = jQuery('#m-1691468546620').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1691468546743').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
  
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1694389067276').children('.module');   
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
  var $module = jQuery('#m-1694389067293').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1694389067310').children('.module');   
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
  var $module = jQuery('#m-1694389067339').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067274').children('.module');
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
  var $module = jQuery('#m-1694389067253').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067315').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1694389067335').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067258').children('.module');
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
  var $module = jQuery('#m-1694389067314').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067307').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1694389067321').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067317').children('.module');
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
  var $module = jQuery('#m-1694389067284').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067381').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1694389067357').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067296').children('.module');
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
  var $module = jQuery('#m-1694389067341').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067383').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694389067356').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067398').children('.module');
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
  var $module = jQuery('#m-1694389067378').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067359').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1694389067224').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1694389067283').children('.module');
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
  var $module = jQuery('#m-1694389067311').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
    var $module = jQuery('#m-1694389067340').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
  
    
    
    
    
    
    
    
  
    
    
    
    
    
  
    
    
  
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1662014482857').children('.module');   
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
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
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
  var $module = jQuery('#m-1678069174869').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694394031031').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694393972463').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1694393753451').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1689576248077').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1689576082635').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1682475272401').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1682475212316').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1682474766681').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1662334825693').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1662335112012').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1662335476518').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1662335594367').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    


    
    
    
    
  
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1692061384790').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1691989102117').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1691985476230').children('.module');
  // You can add custom Javascript code right here.
  $(document).ready(function() {
    if($('.gempage-editing').length < 1){
      var row = $('#r-1658991813687');
      
      row.find(('.gf_column:nth-child(2) > [data-label="Row"]')).hide();
      row.find(('.gf_column:nth-child(2) > [data-label="Row"]:nth-child(1)')).show();
      row.find(('.gf_column:nth-child(2) > .tab1')).fadeIn();
      row.find('.gf_column:first-child .gf_button').removeClass('active');
      
      var button = row.find('.gf_column:first-child .gf_button');
      button[0].classList.add("active");
      button.removeAttr('href');
      
      row.find('.gf_column:first-child .gf_button').click(function(){
        $(this).removeAttr('href');
        var target = $(this).attr('data-exc');
        row.find('.gf_column:first-child .gf_button').removeClass('active');
        $(this).addClass('active');

        row.find(('.gf_column:nth-child(2) > [data-label="Row"]')).hide();

        row.find((`.gf_column:nth-child(2) .${target}`)).fadeIn();
      });
    }
  });
})( window.GemQuery || jQuery );
    
    
    
  
    
  
    
  
    
  
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1692145140912').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1692145140818').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    
    
    
    
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1692145140799').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1692145140868').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1692145140907').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1692145140900').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1692145140766').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
(function( jQuery ){
  try {
    var $module = jQuery('#m-1692145140890').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
  
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1692150794767').children('.module');
  // You can add custom Javascript code right here.
  $(document).ready(function() {
    if($('.gempage-editing').length < 1){
      var row = $('#r-1692145140858');
      
      row.find(('.gf_column:nth-child(2) > [data-label="Row"]')).hide();
      row.find(('.gf_column:nth-child(2) > [data-label="Row"]:nth-child(1)')).show();
      row.find(('.gf_column:nth-child(2) > .tab1')).fadeIn();
      row.find('.gf_column:first-child .gf_button').removeClass('active');
      
      var button = row.find('.gf_column:first-child .gf_button');
      button[0].classList.add("active");
      button.removeAttr('href');
      
      row.find('.gf_column:first-child .gf_button').click(function(){
        $(this).removeAttr('href');
        var target = $(this).attr('data-exc');
        row.find('.gf_column:first-child .gf_button').removeClass('active');
        $(this).addClass('active');

        row.find(('.gf_column:nth-child(2) > [data-label="Row"]')).hide();

        row.find((`.gf_column:nth-child(2) .${target}`)).fadeIn();
      });
    }
  });
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1658990380556').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
  
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1660627577423').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1661133924139').children('.module');   
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
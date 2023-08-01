

(function( jQuery ){
  var $module = jQuery('#m-1665550587524').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1669351484000').children('.module');
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
  try {
    var $module = jQuery('#m-1669351483981').children('.module');
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
  var $module = jQuery('#m-1665551299294').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551299317').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551299403').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551285881').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551285939').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551285913').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551187908').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551187877').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665551187946').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587506').children('.module');

  var sameHeightTitle = $module.data('sameheightitle'),
  spacing = $module.data('spacing');
  collg = $module.data('collg'),
  colmd = $module.data('colmd'),
  colsm = $module.data('colsm'),
  colxs = $module.data('colxs');

  var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
  var col = collg;

  jQuery(window).resize(function() {
    setTimeout(function() {
      for(var i = 0; i < $clearfixes.length; i++) {
        if($clearfixes.eq(i).css('display') == 'block') {
          if($clearfixes.eq(i).hasClass('visible-lg')) {
            col = collg;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-md')) {
            col = colmd;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-sm')) {
            col = colsm;
            break;
          }
          if($clearfixes.eq(i).hasClass('visible-xs')) {
            col = colxs;
            break;
          }
        }
      }
    }, 1000);
  });

  jQuery($module).css('padding', spacing);
})( window.GemQuery || jQuery );
    
    
  
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child1').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child1-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child1-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child1-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child1-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child2').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child2-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child2-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child2-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child2-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child3').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child3-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child3-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child3-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child3-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child4').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child4-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child4-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child4-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child4-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child5').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child5-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child5-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child5-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child5-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child6').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child6-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child6-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child6-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child6-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child7').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child7-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child7-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child7-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child7-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1665550587506-child8').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587506-child8-42').children('.module');
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
  var $module = jQuery('#m-1665550587506-child8-54').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587506-child8-44').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1665550587506-child8-52').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587465').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1665550587541').children('.module');   
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
  var $module = jQuery('#m-1665550587488').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587559').children('.module');
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
  var $module = jQuery('#m-1665550587478').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587494').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587510').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587395').children('.module');
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
  var $module = jQuery('#m-1665550587432').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587498').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587457').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587502').children('.module');
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
  var $module = jQuery('#m-1665550587445').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587485').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587557').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587585').children('.module');
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
  var $module = jQuery('#m-1665550587438').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587551').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587421').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587576').children('.module');
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
  var $module = jQuery('#m-1665550587500').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587499').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1665550587484').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1665550587565').children('.module');
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
  var $module = jQuery('#m-1665550587531').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1665550587460').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1665550587419').children('.module');   
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
    var $module = jQuery('#m-1669350670930').children('.module');   
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    window.__gfFlowActions = []; window.__gfFlowActions.push([]); window.__gfV1FlowActions.init();
(function($){$(document).ready(function(){680<=$(window).width()&&$(".productFeaturedImage img").wrap('<span style="display:inline-block; overflow: hidden; width: 100%; height: auto;"></span>').css("display","block").parent().zoom({on:"click",touch:!0,magnify:1});if(0==$("span.iWishCount").text()){$("#iWishFull").hide();$(".iwishTitle h1").hide();$("#iWishEmpty").show();$("#iWishEmpty .iWishCount").hide()}else{$("#iWishEmpty").hide();$("#iWishFull").show();$(".iwishTitle h1").show()}$(".iwishMsgInfo").length&&$(".iwishTitle h1").hide();if(1023<=$(window).width()){hh=$("header").height();$("header").removeClass("fixed");$(this).scrollTop()>hh?$("header").addClass("sticky"):$("header.sticky").removeClass("sticky")}else $("header").addClass("fixed");Shopify.onItemAdded=function(cart){jQuery.getJSON("/cart.js",function(cart){$(".cartCount").html(cart.item_count)})};$("#related .productWrapper").pick(10);"displayed"==Cookies.get("promoBanner")?$("body").addClass("promoHidden"):$("header .subscribe").addClass("active");$(".searchTrigger").click(function(e){if($("header").hasClass("sticky")){$(".searchBar").addClass("reveal");$(".searchBar input").focus()}else{$(".searchBar").addClass("reveal");$(this).addClass("reveal");$(".searchBar input").focus()}});$(".refresh").click(function(e){$(".searchBar").removeClass("reveal");$(".searchTrigger").removeClass("reveal")});$(".loadMore").on("click",function(e){e.preventDefault();$(this).addClass("loading").text("LOADING...");$.ajax({type:"GET",url:$(this).attr("href")+"#loop",dataType:"html",success:function(out){result=$(out).find(".blogWrapper");nextlink=$(out).find(".loadMore").attr("href");$(".featuredBlogPaginate .container").append(result.fadeIn(300));$(".loadMore").removeClass("loading").text("Load More");if(null!=nextlink)$(".loadMore").attr("href",nextlink);else{$(".loadMore").remove();$("a.backTop").addClass("active")}}})});$(".headerLeft form.mobile button").click(function(e){e.preventDefault();$(".searchBar").addClass("revealMobile");$(".searchBar input").focus()});$(".refresh").click(function(e){$(".searchBar").removeClass("revealMobile")});$("a.nav").click(function(e){e.preventDefault();$("#mobileMenu").addClass("active");$(".menuOverlayBlock").addClass("active");$("html").addClass("menuActive")});$(".close").click(function(e){e.preventDefault();$("#mobileMenu").removeClass("active");$(".menuOverlayBlock").removeClass("active");$("html").removeClass("menuActive")});$("section.menuOverlayBlock").click(function(e){e.preventDefault();$("section.miniCart").removeClass("active");$("html").removeClass("menuActive");$("section.menuOverlayBlock").removeClass("active");$("header .headerContainer .headerRight a.cartButton").removeClass("active");$("#mobileMenu").removeClass("active")});$(".boost-pfs-filter-tree-mobile-button").click(function(e){e.preventDefault();if($(".filterWidget").hasClass("active")){$(".filterWidget").removeClass("active");$(".menuOverlayBlock").removeClass("active");$(".seeResults").removeClass("active");$("body, html").removeClass("filter");$(".boost-pfs-filter-tree-mobile-button button").html("Refine by")}else{$(".filterWidget").addClass("active");$(".menuOverlayBlock").addClass("active");$(".menuOverlayBlock").css({"z-index":"999"});$(".seeResults").addClass("active");$("body, html").addClass("filter");$(".boost-pfs-filter-tree-mobile-button button").html("close")}});$(".seeResults").click(function(e){$(".filterWidget").removeClass("active");$(".menuOverlayBlock").removeClass("active");$(".seeResults").removeClass("active");$(".boost-pfs-filter-tree-v").css({display:"none"});$(".boost-pfs-filter-tree-mobile-button button").html("Refine by")});$(".productMain .productDetails .addToCart button").click(function(e){$("header .headerContainer .headerRight a.cartButton").addClass("active");$("section.miniCart").addClass("active");$("html").addClass("menuActive");$("section.menuOverlayBlock").addClass("active")});$("header .headerContainer .headerRight a.cartButton").click(function(e){});$(".cart-view span.close").click(function(e){e.preventDefault();if($("section.miniCart").hasClass("active")){$("section.miniCart").removeClass("active");$("html").removeClass("menuActive");$("section.menuOverlayBlock").removeClass("active");$(".cartButton").removeClass("active")}});$("form.subscribeForm").submit(function(e){var $this=$(this);$.ajax({type:"GET",url:"https://minimax.us13.list-manage.com/subscribe/post-json?c=?",data:$this.serialize(),dataType:"json",contentType:"application/json; charset=utf-8",error:function(err){alert("Could not connect to the registration server.")},success:function(data){if("success"!=data.result){$("p.errorMessage").addClass("error");$("p.successMessage").removeClass("success");$("a.successMessageButton").removeClass("success");$(".subscribeText").removeClass("success")}else{$("form.subscribeForm").addClass("success");$("p.successMessage").addClass("success");$("a.successMessageButton").addClass("success");$(".subscribeText").addClass("success");$("p.errorMessage").removeClass("error")}}});return!1});$(".productThumbnails a").click(function(e){e.preventDefault();thisHref=$(this).attr("href");$(".productFeaturedImage img").attr("src",thisHref)});$(".backTop").click(function(e){e.preventDefault();$("html, body").animate({scrollTop:0},1e3)});$(window).on("scroll",function(){200<$(window).scrollTop()?$(".backTop").fadeIn():$(".backTop").fadeOut()});$(".googleMap").each(function(){(function new_map($el){var $markers=$el.find(".marker"),args={zoom:11,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP},map=new google.maps.Map($el[0],args);map.markers=[];$markers.each(function(){(function add_marker($marker,map){var latlng=new google.maps.LatLng($marker.attr("data-lat"),$marker.attr("data-lng")),dataPin=$marker.attr("data-pin"),marker=new google.maps.Marker({position:latlng,map:map,icon:dataPin});map.markers.push(marker);if($marker.html()){var infowindow=new google.maps.InfoWindow({content:$marker.html()});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}})($(this),map)});(function center_map(map){var bounds=new google.maps.LatLngBounds;$.each(map.markers,function(i,marker){var latlng=new google.maps.LatLng(marker.position.lat(),marker.position.lng());bounds.extend(latlng)});if(1==map.markers.length){map.setCenter(bounds.getCenter());767<=$(window).width()?map.setZoom(16):map.setZoom(15)}else map.fitBounds(bounds)})(map)})($(this))});speed="500";$("span.location").click(function(e){if($(this).hasClass("active")){$(this).removeClass("active");$(".minus").removeClass("active");$(this).children(".plus").addClass("active");thisId=$(this).attr("id");$(".storeWrapper[rel="+thisId+"]").removeClass("active")}else{$(".storeList .location").removeClass("active");$(this).addClass("active");$(".storeWrapper").removeClass("active");thisId=$(this).attr("id");$(".storeWrapper[rel="+thisId+"]").addClass("active");$(".minus").removeClass("active");$(".plus").addClass("active");$(this).children(".minus").addClass("active");$(this).children(".plus").removeClass("active")}});$(".storeList .state").eq(0).children(".locations").children(".location").eq(0).addClass("active");$(".storeWrapper").eq(0).addClass("active");$("section.ourBrands .searchType span").click(function(e){e.preventDefault();thisIndex=$(this).index();if($(this).hasClass("active"));else{$("section.ourBrands .searchType span").removeClass("active");$(this).addClass("active");if(0==thisIndex){$("section.ourBrands .brandsCollection").removeClass("active");$("section.ourBrands .brandsAZ").addClass("active")}else{$("section.ourBrands .brandsCollection").addClass("active");$("section.ourBrands .brandsAZ").removeClass("active")}}});$("section.ourBrands .alphabet span.category.available").click(function(e){e.preventDefault();$("section.ourBrands .alphabet span.category.available").removeClass("active");$(this).addClass("active");thisLetter=$(this).text();$(".brandsAZ .brandListWrapper").children("span").remove();$(".brandsHidden span").each(function(){thisTitle=$(this).text();thisTitleLetter=thisTitle.slice(0,1);thisTitleLetter==thisLetter&&$(".brandsAZ .brandListWrapper").append($(this).clone())})});$("section.ourBrands .categorySelect .category").click(function(e){e.preventDefault();thisIndex=$(this).index();if($(this).hasClass("active"));else{$("section.ourBrands .categorySelect .category").removeClass("active");$(this).addClass("active");$("section.ourBrands .brandList .brandListWrapper .colBlock").removeClass("active");$("section.ourBrands .brandList .brandListWrapper .colBlock").eq(thisIndex).addClass("active")}});if($(window).width()<=767){var speed="500";$(".footerColumn span").click(function(e){e.preventDefault();$(this).parent().siblings(".footerColumn").children("ul.footerExpand").slideUp(speed);$(this).parent().siblings().children("span").removeClass("active");if($(this).hasClass("active")){$(this).siblings("ul.footerExpand").slideUp(speed);$(this).removeClass("active")}else{$(this).siblings("ul.footerExpand").slideDown(speed);$(this).addClass("active")}})}else $(".footerColumn span").siblings("ul.footerExpand").show();$("ul.tabs li").click(function(){var tab_id=$(this).attr("data-tab");$("ul.tabs li").removeClass("current");$(".tab-content").removeClass("current");$(this).addClass("current");$("#"+tab_id).addClass("current")});$("span.title").click(function(){var tab_id=$(this).attr("data-tab");if($(this).hasClass("current")){$("span.title").removeClass("current");$(".tab-content-mobile").removeClass("current")}else{$("span.title").removeClass("current");$(".tab-content-mobile").removeClass("current");$(this).addClass("current");$("#"+tab_id).addClass("current")}});if($("html").hasClass("touchevents"))$(".headerNav .site-nav li a").on("click",function(e){e.preventDefault();thisIndex=$(this).parent().index();if($(".megaMenu").children(".block").eq(thisIndex).length)if($(this).hasClass("active")){$(this).removeClass("active");$(".megaMenu").children(".block").eq(thisIndex).removeClass("active")}else{$(".site-nav li a").removeClass("active");$(".megaMenu .block").removeClass("active");$(this).addClass("active");$(".megaMenu").children(".block").eq(thisIndex).addClass("active")}else{thisUrl=$(this).attr("href");window.location.href=thisUrl}});else{$(".headerNav .site-nav li a").mouseenter(function(){thisIndex=$(this).parent().index();$(".megaMenu").children(".block").removeClass("active");$(".headerNav .site-nav li a").removeClass("active");$(this).addClass("active");$(".megaMenu").children(".block").eq(thisIndex).length&&$(".megaMenu").children(".block").eq(thisIndex).addClass("active")});$(".headerNav .site-nav li a").mouseleave(function(){$(".megaMenu").children(".block").removeClass("active");$(".headerNav .site-nav li a").removeClass("active")});$(".megaMenu").children(".block").mouseenter(function(){thisIndex=$(this).index();$(this).addClass("active");$(".headerNav .site-nav li").eq(thisIndex).children("a").addClass("active")});$(".megaMenu").children(".block").mouseleave(function(){$(this).removeClass("active");$(".headerNav .site-nav li a").removeClass("active")})}$("#mobileMenu ul.site-nav li a").on("click",function(e){e.preventDefault();thisIndex=$(this).parent().index();if($(".mobileMegaMenu").children(".block").eq(thisIndex).length)if($(this).hasClass("active")){$(this).removeClass("active");$(".mobileMegaMenu").children(".block").eq(thisIndex).removeClass("active");$(".mobileMegaMenu").removeClass("active");$("#mobileMenu ul.site-nav").removeClass("hide");$("#mobileMenu .login").removeClass("hide")}else{$("#mobileMenu > .site-nav > li > a").removeClass("active");$(".mobileMegaMenu > .block").removeClass("active");$(this).addClass("active");$(".mobileMegaMenu").addClass("active");$(".mobileMegaMenu").children(".block").eq(thisIndex).addClass("active");$("#mobileMenu ul.site-nav").addClass("hide");$("#mobileMenu .login").addClass("hide")}else{thisUrl=$(this).attr("href");window.location.href=thisUrl}});$(".back").on("click",function(e){e.preventDefault();$(".mobileMegaMenu").removeClass("active");$("#mobileMenu ul.site-nav li a").removeClass("active");$("#mobileMenu ul.site-nav").removeClass("hide");$("#mobileMenu .login").removeClass("hide")});$(".mobileMegaMenu ul li:first-child").on("click",function(e){return;if($(this).parents("ul").hasClass("top")&&$(this).parents("ul").hasClass("one"))console.log(this);else{e.preventDefault();$(this).parents().siblings().children().removeClass("active");if($(this).hasClass("active")){$(this).removeClass("active");$(this).siblings().removeClass("active")}else{$(this).addClass("active");$(this).siblings().addClass("active")}}});$(".mobileMegaMenu ul.menuColumn.top.one li:nth-child(2)").on("click",function(e){e.preventDefault();$(this).parents().siblings().children().removeClass("active");if($(this).hasClass("active")){$(this).removeClass("active");$(this).siblings().removeClass("active")}else{$(this).addClass("active");$(this).siblings().addClass("active")}});$(".productCarousel .owl-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,responsive:{0:{items:2,nav:!0},600:{items:3,nav:!1,dots:!0},1e3:{items:5,nav:!0,loop:!1,dots:!1}}});$(".shoppableOverlay .owl-carousel.oneColumnCarousel").owlCarousel({loop:!1,margin:10,responsiveClass:!0,navigationText:!1,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,dots:!1},1e3:{items:3,nav:!0,dots:!1}}});$(".shoppableOverlay .owl-carousel.twoColumnCarousel").owlCarousel({loop:!1,margin:10,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!0,dots:!1},1e3:{items:2,nav:!0,dots:!1}}});$(".shoppableOverlay .owl-carousel.threeColumnCarousel").owlCarousel({loop:!1,margin:10,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!0,dots:!1},1e3:{items:1,nav:!0,dots:!1}}});$(".productThumbnails .owl-carousel.product").owlCarousel({loop:!0,margin:0,responsiveClass:!1,items:1});$("a.shoppableButton").click(function(e){e.preventDefault();$(this).siblings(".shoppableContainer").addClass("active")});$("a.shoppableClose").click(function(e){e.preventDefault();$(this).parents(".shoppableContainer").removeClass("active")});$(".flexslider").flexslider({animation:"slide"});$(".subscribe .close").click(function(e){$("body").addClass("promoHidden");$(".megaMenu .block").removeClass("active");$("header nav ul li a").removeClass("active");Cookies.set("promoBanner","displayed",{expires:7})});$(".shareBlock a.share").click(function(e){$(".shareOptions").addClass("active")});$("li.tagDropdown").click(function(e){if($(this).hasClass("active")){$(this).siblings().removeClass("active");$(this).children("a.tagDropdown").removeClass("active");$(this).removeClass("active")}else{$(this).siblings().addClass("active");$(this).children("a.tagDropdown").addClass("active");$(this).addClass("active")}});if($(window).width()<=1023){$("header.sticky").removeClass("sticky");$("header").addClass("fixed");$("body").addClass("stickyHeader")}$(window).scroll(function(){if(1023<=$(window).width()){hh=$("header").height();if($(this).scrollTop()>hh){$("header").addClass("sticky");$(".searchTrigger").removeClass("reveal");$("body").addClass("stickyHeader")}else{$("header.sticky").removeClass("sticky");$("body").removeClass("stickyHeader")}}else $("header").addClass("fixed")});$(".popupLink").magnificPopup({type:"inline"});$("body").hasClass("template-product")&&function initPopup(){if("displayed"==Cookies.get("popup"));else{/*$(".popupLink").trigger("click");*/Cookies.set("popup","displayed",{expires:7})}}()});$.fn.pick=function(how_many){how_many=how_many||4;for(var index_array=[],original_obj_size=this.size(),i=0;i<original_obj_size;i++)index_array.push(i);var new_index_array=function(v){for(var j,x,i=v.length;i;j=parseInt(Math.random()*i),x=v[--i],v[i]=v[j],v[j]=x);return v}(index_array).slice(0,how_many);return this.each(function(i){-1===$.inArray(i,new_index_array)&&$(this).remove()}).filter(function(){return null!==this.parentNode})};$(window).scroll(function(){});$(window).load(function(){});$(window).resize(function(){if(1023<=$(window).width()){$("header").removeClass("fixed");hh=$("header").height();$(this).scrollTop()>hh?$("header").addClass("sticky"):$("header.sticky").removeClass("sticky")}else $("header").addClass("fixed")})})(window.jQuery);
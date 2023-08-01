
// Copyright 2021 stockinstore
/**
 * Front End UI for stockinstore click and collect
 * Platform: Shopify Plus 
 */

 var sisextend = function() {

    // Variables
var extended = {};
var deep = false;
var i = 0;


// Check if a deep merge
if (typeof (arguments[0]) === 'boolean') {
    deep = arguments[0];
    i++;
}


// Merge the object into the extended object
var merge = function (obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                // If we're doing a deep merge and the property is an object
                extended[prop] = sisextend(true, extended[prop], obj[prop]);
            } else {
                // Otherwise, do a regular merge
                extended[prop] = obj[prop];
            }
        }
    }
};

// Loop through each object and conduct a merge
for (; i < arguments.length; i++) {
    merge(arguments[i]);
}

return extended;
}

window.sismobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
return check;
};

var sisCartCheckout = {
showClickCollectCartMessage:true,
showClickCollectLineItemMessage:true,
enableClickCollectRestrictedMessaging:true,
objTargetClickCollectCartMessage:{
                                       checkoutpage:{
                                           targetElement:'#order-summary .product-table',
                                           action:'before'
                                       },
                                       cartpage:{
                                            targetElement:'#sub-header-cart',
                                            action:'after'
                                       } 
    },
objTargetClickCollectLineItemMessage:{
                                        checkoutpage:{
                                            targetElementRow:'#order-summary .product-table tr.product',
                                            targetElementCell:'th.product__description',
                                            action:'append'
                                        },
                                        cartpage:{
                                            targetElementRow:'.cart-lines-table tr.cart-line-item',
                                            targetElementCell:'.sis-message-placeholder',
                                            action:'after'
                                        }
},
htmlClickCollectCartMessage:'<div class="sis-cnc-basket-availability notice--error hide">\
                                <div class="notice__icon">\
                                      Sorry, one or more items are <strong>NOT</strong> available for Click &amp; Collect<span class="sis-store-name-wrap hide"> at <span class="sis-store-name"></span></span>.\
                                      <a href="javascript:void(0);" onclick="stockInStore.showClickCollectWidget();">Change Store</a>\
                                </div>\
                            </div>',
htmlClickCollectCartCheckoutMessage:'<div class="sis-cnc-basket-availability notice--error hide">\
                            <div class="notice__icon">\
                                  Sorry, one or more items are <strong>NOT</strong> available for Click &amp; Collect<span class="sis-store-name-wrap hide"> at <span class="sis-store-name"></span></span>.\
                            </div>\
                        </div>',                                    
htmlClickCollectLineItemMessage:'<div data-sis-upi="[]" class="sis-cnc-basket-item-availability hide">\
                                        <div class="field--error">\
                                            <div class="field__message--error">\
                                                <i class="fa fa-times-circle"></i>\
                                                <span>Qty exceeds availability or item is not in store.</span>\
                                            </div>\
                                        </div>\
                                </div>',
htmlClickCollectCheckoutStepMessage:'<div class="sis-cnc-checkout-step-availability notice--error"><div class="notice__icon">Click & Collect not available on some items,\
                                    please update <a class="sis-link-cart" href="/cart">cart</a> or <a class="sis-link-change-delivery" href="#">change shipping method.</a></div></div>',
htmlClickCollectCheckoutStepMessage_contactinfo:'<div class="sis-cnc-checkout-step-availability notice--error""><div class="notice__icon">Click & Collect not available on some items,\
please update <a class="sis-link-cart" href="/cart">shopping bag</a> or <a href="javascript:void(0);" onclick="stockInStore.showClickCollectWidget();">change store.</a></div></div>',

htmlClickCollectMetaFields:'<div class="additional-checkout-cnc-fields" style="display:none">\
                                <input data-backup="checkout_cnc_store_code" type="hidden" name="checkout[attributes][Store Code]" id="checkout_cnc_store_code" value="" />\
                                <input data-backup="checkout_cnc_store_phone" type="hidden" name="checkout[attributes][Store Phone]" id="checkout_cnc_store_phone" value="" />\
                                <input data-backup="checkout_cnc_store_email" type="hidden" name="checkout[attributes][Store Email]" id="checkout_cnc_store_email" value="" />\
                            </div>',
moveShippingPhoneField:true,
expandOrderSummaryOnMobile:true,
hideClickCollectShippingFields:true,
showSelectedStoreContent:true,
hideClickCollectSaveAddressOption:true,
strStoreNameDelimiter:':::',
selectCCTabWhenStoreSelected:false,
addCCValidationToCompleteOrder:false,
showSelectedStoreWithinCartMessages:true,
initialTargetElement:'.section--shipping-address h2.section__title',
htmlClickCollectWrap:'<div class=""></div>',
htmlClickCollectLinks:'<div class="click-collect-controls"><ul class="wrap-options">\
                        <li id="my_address_link" class="selected section__delivery">\
                            <span class="visually-hidden">My Address</span>\
                            <strong>Delivery</strong><br>\
                            We\'ll deliver to your door!\
                        </li>\
                        <li class="option-no-click-collect hide">\
                            <strong class="title">Click & Collect</strong>\
                            <div>One or more Items are NOT available for Click & Collect.</div>\
                        </li>\
                        <li id="click_collect_link" class="option-click-collect section__delivery">\
                            <span class="visually-hidden">Click and Collect</span>\
                            <strong>Click & Collect</strong><br>\
                            <div class="unseltext">Pick up at your preferred store</div>\
                            <div class="seltext">\
                                <div class="sis-cc-preferred-store  hide">\
                                    <span class="sis-cc-store-info">Selected store: <span class="sis-cc-store-name"></span></span>\
                                    <div class="sis-cc-store-address">\
                                        <div class="sis-cc-store-address-lines"></div>\
                                        <div class="sis-cc-stores-address-details">\
                                            <span class="sis-cc-store-address-city"></span> <span class="sis-cc-store-address-state"></span> <span class="sis-cc-store-address-postcode"></span>\
                                        </div>\
                                        <span class="sis-cc-store-address-country"></span>\
                                    </div>\
                                    <span class="sis-cc-link"><a href="javascript:void(0);" onclick="stockInStore.showClickCollectWidget();">Change store</a>.</span>\
                                </div>\
                                <div class="sis-cc-unselected-store ">No store selected.\
                                    <span class="sis-cc-link"><a href="javascript:void(0);" onclick="stockInStore.showClickCollectWidget();">Change store</a>.</span>\
                                </div>\
                            </div>\
                        </li>\
                    </ul></div>',
extraWrapClass:'layout-flex__item layout-flex__item--stretch',
clickcollectShippingMethodLabel:'shopify-Click%20&%20Collect-0.00',
clickcollectInvalidAddressMessage:'<div class="sis-cnc-checkout-step-availability notice--error">\
<div class="notice__icon">Your order contains an invalid or incomplete shipping address,\
 please <a class="sis-link-change-delivery" href="#">click here</a> to update.</div></div>',

 clickcollectInvalidShippingMethodMessage:'<div class="sis-cnc-checkout-step-availability notice--error">\
 <div class="notice__icon">Your order contains an invalid shipping method,\
  please <a class="sis-link-change-delivery" href="#">click here</a> to update.</div></div>',

 clickcollectShippingMethodName:'Click &amp; Collect', 
arrFieldsShipping:[
    '#checkout_shipping_address_company',
    '#checkout_shipping_address_address1',
    '#checkout_shipping_address_address2',
    '#checkout_shipping_address_city',
    '#checkout_shipping_address_country',
    '#checkout_shipping_address_province',
    '#checkout_shipping_address_zip'
    //,'#checkout_shipping_address_phone'
], 
objSavedMyShippingAddress:{
     company:''
    ,address1:''
    ,address2:''
    ,city:''
    ,country:''
    ,province:''
    ,zip:''
},   

                
init:function(opts){
    if(opts!==null){
        sisCartCheckout = sisextend( true,sisCartCheckout, opts || {} );
    }
    if(sisCartCheckoutConfig.mode.toLowerCase() == "demo"){
        var getQsCNCShow = sisCartCheckout.getUrlParameter(location.search,'setcncshow') 
        if(getQsCNCShow!==""){
            if(!isNaN(getQsCNCShow)){

                if(getQsCNCShow=="0"){
                    sisCartCheckout.deleteCookie('cncshow')
                }else{
                    sisCartCheckout.setCookie('cncshow','1',getQsCNCShow)
                }
            }
        }

             

        
        if(sisCartCheckout.getCookie('cncshow')!=="1"){

            if(sisCartCheckoutConfig.templatename == "checkout"){
                if(Shopify.Checkout.step == "shipping_method"){
                    var nonCCShip = null;
                    $(".section--shipping-method .radio-wrapper").each(function(){
                        if($(this).attr("data-shipping-method") == sisCartCheckout.clickcollectShippingMethodLabel){
                            //$(this).find("label").trigger("click")
                            $(this).parent().addClass("hide")
                        }else{
                            if(nonCCShip==null){
                                nonCCShip = $(this)
                            }
                            
                        }	
                    })
                    if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
                        if(nonCCShip!==null){
                            nonCCShip.find("label").trigger("click")
                        }
                    }

                    $(".section--shipping-method").addClass("shipping-method-ready")
                    $("#continue_button").addClass("completed")
                  
                }

            }else if(sisCartCheckoutConfig.templatename == "cart"){
                //nothing yet
            }else{
                //nothing yet
            }
            return; 
        }


        $(document.body).addClass('click-collect-demo-enabled')
    }else{
        $(document.body).addClass('click-collect-enabled')
    }
    

    if(sisCartCheckoutConfig.templatename == "checkout"){
        //Add UI Options for Click and Collect

        if($("#my_address_link").length<=0){ //prevent duplicating the controls
            $(sisCartCheckout.initialTargetElement).eq(0).wrap(sisCartCheckout.htmlClickCollectWrap).after(sisCartCheckout.htmlClickCollectLinks).addClass(sisCartCheckout.extraWrapClass)
            //Chaging order of Tabs
            /*if(sisCartCheckout.getCookie("_SISSTORECODEINFO")!==""){
                $(".click-collect-controls .wrap-options").prepend($(".click-collect-controls .wrap-options #click_collect_link"))
            }*/
        }

        sisCartCheckout.createCartCCMessages();
        
        if(sisCartCheckout.moveShippingPhoneField){
            if($("#phoneInput").length>0){
                if($("#checkout_shipping_address_last_name").length>0){
                    $("#checkout_shipping_address_last_name").closest("div.field").after($("#checkout_shipping_address_phone").closest("div.field"))
                }
            }
        }

        if(sisCartCheckout.expandOrderSummaryOnMobile){
            if(window.sismobilecheck()){
                $("button.order-summary-toggle").click();
            }
        }

        sisCartCheckout.checkAvailabilityStatus();

        if(typeof(sisCartCheckout.checkoutEventsEnabled)=="undefined"){
            sisCartCheckout.registerEvents();
            sisCartCheckout.checkoutEventsEnabled = "registered"
        }else{
            if($("#checkout_shipping_address_company").length > 0){
                var compName = $("#checkout_shipping_address_company").val() 
                if(compName!==""){
                    if(compName.toLowerCase().indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                        if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                            $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-select")
                        }
                        $("#click_collect_link").trigger("click")
                        $(".free-shipping-message").addClass("hide")
                        $("#order-summary").addClass("click-collect");
                    }else{
                        if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                            $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
                        }
                    }
                }else{
                    if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                        $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
                    }
                } 
            }
        }

    }else if(sisCartCheckoutConfig.templatename == "cart"){
        sisCartCheckout.createCartCCMessages();
        sisCartCheckout.checkAvailabilityStatus();
        if(typeof(sisCartCheckout.cartEventsEnabled)=="undefined"){
            sisCartCheckout.registerCartEvents();
            sisCartCheckout.cartEventsEnabled = "registered"
        }
        
    }else{
        //nothing yet
    }

   

     
},

setCookie:function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict;Secure;";
},
deleteCookie:function(cname){
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;Secure;";
},
getCookie:function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
},
getUrlParameter:function(stringsearch,name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(stringsearch);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
},

checkAvailabilityStatus:function(){
    //console.log(typeof(stockInStore))
    if(typeof(stockInStore)!=="undefined"){
        stockInStore.getCartCNCStatus(function(data){
           
            if(data!==null){

                if(sisCartCheckout.showSelectedStoreWithinCartMessages){
                    if(typeof(stockInStore)!=='undefined'){
                        stockInStore.getSelectedStoreInfo(function(checkSelectedStore){
                            if(checkSelectedStore!==null){
                                $(".sis-cnc-basket-availability .sis-store-name").html(checkSelectedStore.store_name)
                                $(".sis-cnc-basket-availability .sis-store-name-wrap").removeClass("hide")
                                if(sisCartCheckout.showClickCollectCartMessage){
                                    if(data.response.available == 0){
                                        $(".sis-cnc-basket-availability").removeClass("hide")
                                    }else{
                                        $(".sis-cnc-basket-availability").addClass("hide")
                                    }
                                }
                            }
                        })
                    }
                }else{
                    if(sisCartCheckout.showClickCollectCartMessage){
                        if(data.response.available == 0){
                            $(".sis-cnc-basket-availability").removeClass("hide")
                        }else{
                            $(".sis-cnc-basket-availability").addClass("hide")
                        }
                    }
                }



                if(data.response.available == 0){
                    $(document.body).addClass("click-collect-not-available").removeClass("click-collect-available")
                }else{
                    $(document.body).addClass("click-collect-available").removeClass("click-collect-not-available")
                }


                if(sisCartCheckout.showClickCollectLineItemMessage){
                    for(var i=0;i<data.response.upis.length;i++){
                        var refVariantID = sisCartCheckout.getVariantIDForUPI(data.response.upis[i].upi)  
                        
                        if(data.response.upis[i].available == 0){
                            $(".sis-cnc-basket-item-availability[data-sis-upi='" + refVariantID + "']").removeClass("hide")
                        }else{
                            $(".sis-cnc-basket-item-availability[data-sis-upi='" + refVariantID + "']").addClass("hide")
                        }

                    }
                }        






            }
          
             //only on checkout
             if(sisCartCheckoutConfig.templatename == "checkout"){
                //we need to check which section of the checkout page we are on.
                sisCartCheckout.updateCheckoutSteps(data)
            
            
            }
        })

    }
},
/*updateCheckoutAttributes:function(){
    if($(".additional-checkout-cnc-fields").length <=0){
        $(document.body).append(sisCartCheckout.htmlClickCollectMetaFields)
    }

    //try to populate custom cart Attributes
    if(typeof(stockInStore)!=='undefined'){
        var store = stockInStore.getSelectedStore();
        if(store!==null){
            $("#checkout_cnc_store_code").val(store.code)
            $("#checkout_cnc_store_phone").val(store.phone)
            $("#checkout_cnc_store_email").val(store.email)
        }
        
        
    }

},*/
updateCheckoutSteps:function(data){
    var isCCAvailable = null;
    if(data!==null){
        isCCAvailable = data.response.available;
    }
     
        
    //sisCartCheckout.updateCheckoutAttributes()
    

    //We make sure the saves address drop down (if exist)
    //does not show any selectable store addresses

    //Remove any addresses option that have word in the company name
    if($("#checkout_shipping_address_id").length>0){
        $("#checkout_shipping_address_id option").each(function(){
            if($(this).attr("data-properties")){
                var dataprop = JSON.parse($(this).attr("data-properties"));
                if(dataprop.company!==""){
                    if(dataprop.company.indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                        $(this).remove();
                    }
                };
            }
        })


        $(document).on("change","#checkout_shipping_address_id",function(){

            if(sisCartCheckout.moveShippingPhoneField){
                if($("#checkout_shipping_address_phone").length>0){
                    if($("#checkout_shipping_address_last_name").length>0){
                        $("#checkout_shipping_address_last_name").closest("div.field").after($("#checkout_shipping_address_phone").closest("div.field"))
                         $("#checkout_shipping_address_phone").addClass("moved")
                    }
                }
            }
        })
    }
   
    if($("#checkout_billing_address_id").length>0){
        //var checkDefault = 0;
        $("#checkout_billing_address_id option").each(function(indopt){
            if($(this).attr("data-properties")){
                var dataprop = JSON.parse($(this).attr("data-properties"));
                
                if(dataprop.company!==""){
                    if(dataprop.company.indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                        $(this).remove();
                    }
                };
            }
        })
        
        if($("#checkout_billing_address_company").val().indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
            $("#checkout_billing_address_first_name").val("");
            $("#checkout_billing_address_last_name").val("");
            $("#checkout_billing_address_company").val("");
            $("#checkout_billing_address_id").val("");
            $("#checkout_billing_address_address1").val("");
            if( $("#checkout_billing_address_address2").length >0){
                $("#checkout_billing_address_address2").val("");
            }
            $("#checkout_billing_address_city").val("");
            $("#checkout_billing_address_zip").val("");
            $("#checkout_billing_address_phone").val("")
        }


    }

    if(Shopify.Checkout.step == "shipping_method"){

        var getAddress = $("address").text().toLowerCase()

        if(getAddress.indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                 if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                    $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
                }    

                $(".free-shipping-message").addClass("hide");
                $("#order-summary").addClass("click-collect");
                
                $(".section--shipping-method .radio-wrapper").each(function(){
                    if($(this).attr("data-shipping-method") == sisCartCheckout.clickcollectShippingMethodLabel){
                        $(this).find("label").trigger("click")
                        $(this).parent().removeClass("hide")
                    }else{
                        $(this).parent().addClass("hide")
                    }	
                })
           
                if(isCCAvailable == 0){

                    if($(".sis-cnc-checkout-step-availability").length <=0){
                        $(".step__sections").before(sisCartCheckout.htmlClickCollectCheckoutStepMessage)
                    }else{
                        $(".sis-cnc-checkout-step-availability").removeClass("hide")    
                    }
                    
                    $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
                    $("#continue_button").addClass("btn--disabled").prop("disabled",true)
                }else{
                    $(".sis-cnc-checkout-step-availability").addClass("hide")
                    $("#continue_button").removeClass("btn--disabled").prop("disabled",false)

                    
                    //The selected store cookie is not available anymore (cleared from expiry)
                    //the localstorage is also not available but user has already
                    //selected a store in the shipping information
                    stockInStore.getSelectedStoreInfo(function(checkSelectedStore){
                        if(checkSelectedStore == null){
                            if($(".sis-cnc-checkout-step-availability").length <=0){
                                $(".step__sections").before('<div class="sis-cnc-checkout-step-availability notice--error"><div class="notice__icon">Your Click & Collect session has expired, please <a class="sis-link-change-delivery" href="#">click here</a> to re-check availability.</div></div>')
                            
                            
                            }else{
                                $(".sis-cnc-checkout-step-availability").removeClass("hide")    
                            }
                            $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
                            $(".sis-cnc-checkout-step-availability").removeClass("hide")
                            $("#continue_button").addClass("btn--disabled").prop("disabled",true)
                            
                        }

                    }) 
                }
           
        }else{
            if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
            }

            $(".section--shipping-method .radio-wrapper").each(function(){
                if($(this).attr("data-shipping-method") == sisCartCheckout.clickcollectShippingMethodLabel){
                    
                    $(this).parent().addClass("hide")
                }else{
                    $(this).parent().removeClass("hide")
                }	
            })



            $(".section--shipping-method .radio-wrapper").each(function(){
                    if(!$(this).parent().hasClass("hide")){
                        $(this).find("label").trigger("click")
                        return false;
                    }
            })
        }	



        $(".section--shipping-method").addClass("shipping-method-ready")
        $("#continue_button").addClass("completed")

        return;

    }else if(Shopify.Checkout.step == "payment_method"){
        
        var getAddress = $("address").text().toLowerCase()
        var displayInvalidAddressMessage = false;
        if(getAddress.indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){ //exist
            if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
            }

            if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
                if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                    $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
                }
                $(".free-shipping-message").addClass("hide");
                $("#order-summary").addClass("click-collect");
                
                $(".section--billing-address").addClass("click-collect");
                $(".section--billing-address .radio-wrapper").addClass("hide");
                
                if($("#section--billing-address__different").hasClass("hidden")){
                    //force show billing info if C&C is selected
                    $("[data-different-billing-address] label").trigger("click");
                }
                
            }else{
                displayInvalidAddressMessage = true;//it is a cc order with no store info :::
            }
        }else{ //does not contain delimieter but cc order
            if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
            }
            if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
                displayInvalidAddressMessage = true;
                if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                    $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
                }
            }
        }

        if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
            if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
            }
            if(isCCAvailable == 0){
            
                if($(".sis-cnc-checkout-step-availability").length <=0){
                    $(".step__sections").before(sisCartCheckout.htmlClickCollectCheckoutStepMessage)
                }
                $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
                $("#continue_button").addClass("btn--disabled").prop("disabled",true)
            }else{

                    
                $(".sis-cnc-checkout-step-availability").addClass("hide")
                $("#continue_button").removeClass("btn--disabled").prop("disabled",false)

                
                //The selected store cookie is not available anymore (cleared from expiry)
                //the localstorage is also not available but user has already
                //selected a store in the shipping information
                stockInStore.getSelectedStoreInfo(function(checkSelectedStore){
                    if(checkSelectedStore == null){
                        if($(".sis-cnc-checkout-step-availability").length <=0){
                            $(".step__sections").before('<div class="sis-cnc-checkout-step-availability notice--error"><div class="notice__icon">Your Click & Collect session has expired, please <a class="sis-link-change-delivery" href="#">click here</a> to re-check availability.</div></div>')
                        
                        }else{
                            $(".sis-cnc-checkout-step-availability").removeClass("hide")    
                        }
                        $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
                        $(".sis-cnc-checkout-step-availability").removeClass("hide")
                        $("#continue_button").addClass("btn--disabled").prop("disabled",true)
                        
                    }
                })
                   
            }
        }

        

        if(displayInvalidAddressMessage){
            $(".step__sections").before(sisCartCheckout.clickcollectInvalidAddressMessage)
            $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
            $("#continue_button").addClass("btn--disabled").prop("disabled",true)
        }


        return
    }else if(Shopify.Checkout.step =="contact_information"){
        if($(".sis-cnc-checkout-step-availability").length <=0){
            $(".section--shipping-address .section__content").before(sisCartCheckout.htmlClickCollectCheckoutStepMessage_contactinfo)
             
        }
      
        if($(".sis-cnc-intro-text").length >0){
            $(".sis-cnc-intro-text").remove()
        }

        $(".section--shipping-address .section__content").before("<div class=\"sis-cnc-intro-text\"><p>Please provide details of person picking up the item/s</p></div>");

        $(".sis-cnc-checkout-step-availability").addClass("hide")
        


        if($("#click_collect_link").hasClass("selected")){//(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
            
            
            if(isCCAvailable == 0){
            
                $(".sis-cnc-checkout-step-availability").removeClass("hide")    
                $("#continue_button").addClass("btn--disabled").prop("disabled",true)
            }else{
                $(".sis-cnc-checkout-step-availability").addClass("hide")    
                $("#continue_button").removeClass("btn--disabled").prop("disabled",false)

            }


        }
    
    }else{

    }
},
getVariantIDForUPI:function(upi){
    var retVariantID = ""
        for(var i=0;i<_stockinstore.items.length;i++){

         
            if(_stockinstore.items[i].upi == upi){
                retVariantID = _stockinstore.items[i].itemid;
                break;
            }
        }
        return retVariantID
},
utilPlaceElement:function(targetElem,contentElem,action){
    if(typeof(targetElem) == "string"){
        targetElem = $(targetElem)
    }
    if(action =="append"){
        targetElem.append(contentElem);
    }else if(action == "prepend"){
        targetElem.prepend(contentElem);
    }else if(action == "after"){
        targetElem.after(contentElem);
    }else if(action == "before"){
        targetElem.before(contentElem);
    }

},
createCartCCMessages:function(){
    
    var validElement = $(sisCartCheckout.objTargetClickCollectCartMessage.checkoutpage.targetElement).length > 0

    if(sisCartCheckoutConfig.templatename == "cart"){

        validElement = $(sisCartCheckout.objTargetClickCollectCartMessage.cartpage.targetElement).length > 0

    }


    if(sisCartCheckout.showClickCollectCartMessage){
     
            if(validElement){
                $(".sis-cnc-basket-availability").remove()
                if(sisCartCheckoutConfig.templatename == "cart"){
                    //$("#sub-header-cart").after(sisCartCheckout.htmlClickCollectCartMessage)
                    sisCartCheckout.utilPlaceElement(sisCartCheckout.objTargetClickCollectCartMessage.cartpage.targetElement,
                        sisCartCheckout.htmlClickCollectCartMessage,
                        sisCartCheckout.objTargetClickCollectCartMessage.cartpage.action)
                }else{
                   // $("#order-summary .product-table").before(sisCartCheckout.htmlClickCollectCartMessage)
                   sisCartCheckout.utilPlaceElement(sisCartCheckout.objTargetClickCollectCartMessage.checkoutpage.targetElement,
                    sisCartCheckout.htmlClickCollectCartCheckoutMessage,
                    sisCartCheckout.objTargetClickCollectCartMessage.checkoutpage.action)
                }

            }
    }

    if(sisCartCheckout.showClickCollectLineItemMessage){
       
        $(".sis-cnc-basket-item-availability").remove();
        if(sisCartCheckoutConfig.templatename == "cart"){
            validElement = $(sisCartCheckout.objTargetClickCollectLineItemMessage.cartpage.targetElementRow 
                                + " " 
                                + sisCartCheckout.objTargetClickCollectLineItemMessage.cartpage.targetElementCell).length > 0     
            if(validElement){
                $(sisCartCheckout.objTargetClickCollectLineItemMessage.cartpage.targetElementRow).each(function(){
                    var variantID = $(this).find(".sis-message-placeholder").attr("data-sis-variant-id")
                   
                    //$(this).find("td.product-description").append(sisCartCheckout.htmlClickCollectLineItemMessage)
                    sisCartCheckout.utilPlaceElement($(this).find(sisCartCheckout.objTargetClickCollectLineItemMessage.cartpage.targetElementCell)
                                                    ,sisCartCheckout.htmlClickCollectLineItemMessage
                                                    ,sisCartCheckout.objTargetClickCollectLineItemMessage.cartpage.action)
                                                    $(this).find('.sis-cnc-basket-item-availability').attr("data-sis-upi",variantID)
                })
            }


        }else{
            validElement = $(sisCartCheckout.objTargetClickCollectLineItemMessage.checkoutpage.targetElementRow 
                                + " " 
                                + sisCartCheckout.objTargetClickCollectLineItemMessage.checkoutpage.targetElementCell).length > 0     
            if(validElement){
                $(sisCartCheckout.objTargetClickCollectLineItemMessage.checkoutpage.targetElementRow).each(function(){
                    var variantID = $(this).attr("data-variant-id")
                    //$(this).find("th.product__description").append(sisCartCheckout.htmlClickCollectLineItemMessage)
                    sisCartCheckout.utilPlaceElement($(this).find(sisCartCheckout.objTargetClickCollectLineItemMessage.checkoutpage.targetElementCell)
                                                        ,sisCartCheckout.htmlClickCollectLineItemMessage
                                                        ,sisCartCheckout.objTargetClickCollectLineItemMessage.checkoutpage.action)
                    
                    $(this).find('.sis-cnc-basket-item-availability').attr("data-sis-upi",variantID)
                })
            }

        }
    }

},
registerCartEvents:function(){

    //Refresh the stockinstore items array and reinitialise accordingly
    //on any cart update
    //We trap any AJAX performed on the cart page
    $( document ).ajaxComplete(function( event, xhr, settings ) {
        //Filter any ajax call to change.js
        if (settings.url.match(/change.js/) || settings.url.match(/update.js/)) {
           
            //we check the response
            if(xhr.responseText!==""){
                var response = xhr.responseText;
            
                if(typeof(xhr.responseText) == "string"){
                    response = (JSON.parse(xhr.responseText))
                }
                
                var tempStockinstoreItems = [];
                //Now we update the stockinstore.items object
                for(var i=0;i<_stockinstore.items.length;i++){
                    var searchVarID = _stockinstore.items[i].itemid
                    var foundID = false;
                    for(var j=0;j<response.items.length;j++){
                        var resultVarID = response.items[j].variant_id
                        
                
                        if(searchVarID == resultVarID){
                            _stockinstore.items[i].quantity =  response.items[j].quantity
                            tempStockinstoreItems.push(_stockinstore.items[i])
                            foundID = true;
                        }
                    }
                }
                
                //After we scan the items we replace the stockinstore Items Array
                _stockinstore.items = tempStockinstoreItems
                
                sisCartCheckout.init(sisCartCheckoutConfig.options);
            }
        }
    });

},
refreshCart:function(cartinfo){
    var response = cartinfo;
    if(response!==""){
        if(typeof(response) == "string"){
            response = (JSON.parse(response))
        }
        
        var tempStockinstoreItems = [];
        //Now we update the stockinstore.items object
        for(var i=0;i<_stockinstore.items.length;i++){
            var searchVarID = _stockinstore.items[i].itemid
            var foundID = false;
            for(var j=0;j<response.items.length;j++){
                var resultVarID = response.items[j].variant_id
                
        
                if(searchVarID == resultVarID){
                    _stockinstore.items[i].quantity =  response.items[j].quantity
                    tempStockinstoreItems.push(_stockinstore.items[i])
                    foundID = true;
                }
            }
        }
        
        //After we scan the items we replace the stockinstore Items Array
        _stockinstore.items = tempStockinstoreItems
        
        sisCartCheckout.init(sisCartCheckoutConfig.options);

    }        
},
registerEvents:function(){
    
    //Add Events
    $(document).on("click","#click_collect_link",function(e){
        e.preventDefault();
        $(".section.section--shipping-address").addClass("click-collect-active");
        if(sisCartCheckout.enableClickCollectRestrictedMessaging){
            $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-selected");
        }

        if($(this).hasClass("selected")){return;}
        $(this).addClass("selected")
        $("#my_address_link").removeClass("selected");
        sisCartCheckout.updateSavedMyAddress();
        sisCartCheckout.showClickCollect();
    })

    //Track when section is repainted
    $(document).on('page:load page:change', function() {
        // add content

        sisCartCheckout.init(sisCartCheckoutConfig.options);
        

    });

    $(document).on("click","#my_address_link",function(e){
        e.preventDefault();
        $(".section.section--shipping-address").removeClass("click-collect-active");
        if(sisCartCheckout.enableClickCollectRestrictedMessaging){
            $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
        }
        if($(this).hasClass("selected")){return;}
        $(this).addClass("selected")
        $("#click_collect_link").removeClass("selected")
        sisCartCheckout.showMyAddress();
    })

    //When editing the address details we need to check if the address is a CC address
    if($("#checkout_shipping_address_company").length > 0){
        var compName = $("#checkout_shipping_address_company").val() 
        if(compName!==""){
            if(compName.toLowerCase().indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                    $(document.body).removeClass("click-collect-not-selected").addClass("click-collect-select")
                }
                $("#click_collect_link").trigger("click")
                $(".free-shipping-message").addClass("hide")
                $("#order-summary").addClass("click-collect");
            }else{
                if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                    $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
                }
            }
        }else{
            if(sisCartCheckout.enableClickCollectRestrictedMessaging){
                $(document.body).removeClass("click-collect-selected").addClass("click-collect-not-selected");
            }

            if(sisCartCheckout.selectCCTabWhenStoreSelected){
                if(sisCartCheckoutConfig.shipMethodSelected == '' || sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
                   if(sisCartCheckout.getCookie("_SISSTORECODEINFO")!==""){
                       
                        $("#click_collect_link").trigger("click")
                        $(".free-shipping-message").addClass("hide")
                        $("#order-summary").addClass("click-collect");
                    }
                }
            }

        }

        //Put a valiation when CC option is not selected
        //Remove the delimiter from the company name to avoid
        //conflicts
            
        $(document).on("blur paste change","#checkout_shipping_address_company",function(e){

            if($("#my_address_link").hasClass("selected")){
                if($(this).val()!==""){
                    var valcomp = $(this).val();
                    if(valcomp.indexOf(sisCartCheckout.strStoreNameDelimiter)!==-1){
                        $(this).val(valcomp.split(sisCartCheckout.strStoreNameDelimiter).join(""))
                    }
                }
            }

        })
    }

        /** Hijack Complete Order Button to check for CC validity */
        if(sisCartCheckout.addCCValidationToCompleteOrder){
            if(Shopify.Checkout.step == "payment_method"){
                $(document).on("click","#continue_button",function(event){
                    $(".section--payment-method .sis-cnc-checkout-step-availability").remove(); 
                   if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
                    var getAddress = $("address").text().toLowerCase()
                        if(getAddress.indexOf(sisCartCheckout.strStoreNameDelimiter)==-1){
                            event.preventDefault();
                            $(".section--payment-method .section__header").after(sisCartCheckout.clickcollectInvalidAddressMessage)
                            $(".sis-link-change-delivery").attr("href",$(".review-block__link a").eq(0).attr("href"))
                            $("#continue_button").addClass("btn--disabled").prop("disabled",true)
                            return false;
                        }
                   }     
    
                })
            }
        }
},
updateSelectedStoreInfo:function(store){

    if(store!==null){

        //console.log("updateSelectedStoreInfo")
        $("li.option-click-collect .sis-cc-unselected-store").addClass("hide")
        if(sisCartCheckout.showSelectedStoreContent){
            $("li.option-click-collect .sis-cc-preferred-store").removeClass("hide")
        }else{
            $("li.option-click-collect .sis-cc-preferred-store").removeClass("hide")
            $("li.option-click-collect .sis-cc-preferred-store .sis-cc-store-info").addClass("hide")
            $("li.option-click-collect .sis-cc-preferred-store .sis-cc-store-address").addClass("hide")

        }
        $("li.option-click-collect .sis-cc-store-name").html(store.store_name)

        $("li.option-click-collect  .sis-cc-store-address-lines").html("")

        var arrAddressLines = store.address_lines;
        var addressContent = "";
        //loop through lines
        for(var i=0;i<arrAddressLines.length;i++){
            addressContent += (i>0?"<br/>":"") + arrAddressLines[i]  
        }
        
        $("li.option-click-collect  .sis-cc-store-address-lines").html(addressContent)

        $("li.option-click-collect .sis-cc-store-address-city").html(store.city)
        $("li.option-click-collect .sis-cc-store-address-state").html(store.state)
        $("li.option-click-collect .sis-cc-store-address-postcode").html(store.postcode)
        $("li.option-click-collect .sis-cc-store-address-country").html(store.country)
        //$(".cnc-user-prompt .sis-cc-store-name").html(store.store_name)
        //$(".cnc-user-prompt").removeClass("hide")

    }else{
        $("li.option-click-collect .sis-cc-unselected-store").removeClass("hide")
        $("li.option-click-collect .sis-cc-preferred-store").addClass("hide")
        //$(".cnc-user-prompt").addClass("hide")
    }


},
showMyAddress:function(){
    $(".step__footer__continue-btn").removeClass("btn--disabled").prop("disabled",false)
    $("#checkout_shipping_address_id").closest("div.field").removeClass("hide")
    //$("#checkout_remember_me").closest(".section").removeClass("hide")
    $(".free-shipping-message").removeClass("hide")
    $("#order-summary").removeClass("click-collect");
    //$("#continue_button").prop("disabled",false)


    for(var i=0;i<sisCartCheckout.arrFieldsShipping.length;i++){
        var fld = $(sisCartCheckout.arrFieldsShipping[i]);
        if(sisCartCheckout.arrFieldsShipping[i]!=='#checkout_shipping_address_country'){
            fld.val("")
        }

        if(sisCartCheckout.hideClickCollectShippingFields){

            fld.parent().parent().removeClass("hide")
            
        }

        fld.prop("readonly","")
        fld.parent().parent().removeClass("readonly")
    }

    if(sisCartCheckout.hideClickCollectSaveAddressOption){
        $("#checkout_remember_me").prop("checked",false)
        $("#checkout_remember_me").closest("div.field").removeClass("hide")
    }


    $("#checkout_shipping_address_company").val(sisCartCheckout.objSavedMyShippingAddress.company);
    $("#checkout_shipping_address_address1").val(sisCartCheckout.objSavedMyShippingAddress.address1);
    $("#checkout_shipping_address_address2").val(sisCartCheckout.objSavedMyShippingAddress.address2);
    $("#checkout_shipping_address_city").val(sisCartCheckout.objSavedMyShippingAddress.city);
    if(sisCartCheckout.objSavedMyShippingAddress.country!==""){
        $("#checkout_shipping_address_country").val(sisCartCheckout.objSavedMyShippingAddress.country);
    }
    if(sisCartCheckout.objSavedMyShippingAddress.province!==""){
        $("#checkout_shipping_address_province").val(sisCartCheckout.objSavedMyShippingAddress.province);
    }
    $("#checkout_shipping_address_zip").val(sisCartCheckout.objSavedMyShippingAddress.zip);
  
    if($(document.body).hasClass("click-collect-not-available")){
        $(".sis-cnc-checkout-step-availability").addClass("hide")
        $("#continue_button").removeClass("btn--disabled").prop("disabled",false)
    }

},
showClickCollect:function(){

    $(".step__footer__continue-btn").addClass("btn--disabled").prop("disabled",true)
    $(".free-shipping-message").addClass("hide")
    $("#order-summary").addClass("click-collect");

    $("#checkout_shipping_address_id").closest("div.field").addClass("hide")
    $("#checkout_remember_me").prop("checked",false)
    //Checkout upgrade 02/20 commented code below
    //.closest(".section").addClass("hide")

    for(var i=0;i<sisCartCheckout.arrFieldsShipping.length;i++){
        var fld = $(sisCartCheckout.arrFieldsShipping[i]);
        if(sisCartCheckout.arrFieldsShipping[i]!=='#checkout_shipping_address_country'){
            fld.val("")
        }
        if(sisCartCheckout.hideClickCollectShippingFields){

            fld.parent().parent().addClass("hide")
            
        }
        
        fld.prop("readonly","readonly")
        fld.parent().parent().addClass("readonly")
        fld.parent().parent().removeClass("field--error")
    }

    if(sisCartCheckout.hideClickCollectSaveAddressOption){
        $("#checkout_remember_me").prop("checked",false)
        $("#checkout_remember_me").closest("div.field").addClass("hide")

    }
    sisCartCheckout.checkSubmitClickCollect();
},
updateSavedMyAddress:function(){
  
    //When editing the address details we need to check if the address is a CC address
    if($("#checkout_shipping_address_company").length > 0){
        var compName = $("#checkout_shipping_address_company").val() 
        //if(compName!==""){
            if(compName.toLowerCase().indexOf(sisCartCheckout.strStoreNameDelimiter)==-1){
                sisCartCheckout.objSavedMyShippingAddress.company = $("#checkout_shipping_address_company").val();
                sisCartCheckout.objSavedMyShippingAddress.address1 = $("#checkout_shipping_address_address1").val();
                sisCartCheckout.objSavedMyShippingAddress.address2 = $("#checkout_shipping_address_address2").val();
                sisCartCheckout.objSavedMyShippingAddress.city = $("#checkout_shipping_address_city").val();
                sisCartCheckout.objSavedMyShippingAddress.country = $("#checkout_shipping_address_country").val();
                sisCartCheckout.objSavedMyShippingAddress.province = $("#checkout_shipping_address_province").val();
                sisCartCheckout.objSavedMyShippingAddress.zip = $("#checkout_shipping_address_zip").val();
                //sisCartCheckout.objSavedMyShippingAddress.phone = $("#checkout_shipping_address_phone").val();
                        
            }
        //}
    }
        
              
},
checkSubmitClickCollect:function(){
    if($('#click_collect_link').hasClass("selected")){
        var validCCinfo = true;


        stockInStore.getSelectedStoreInfo(function(store){
        
            var fname = $("#checkout_shipping_address_first_name").val();
                fname = fname.split(" ").join("")
            var lname = $("#checkout_shipping_address_last_name").val();
                lname = lname.split(" ").join("")
        
        
        
            if (fname.length <= 0){
                validCCinfo = false;
            }
        
            if(lname.length <=0){
                validCCinfo = false;
            }
        
        
            if(store==null){
                validCCinfo = false;
                $("#checkout_shipping_address_company").val("");
                $("#checkout_shipping_address_address1").val("");
                $("#checkout_shipping_address_address2").val("");
                $("#checkout_shipping_address_city").val("");
                $("#checkout_shipping_address_province").val("");
                $("#checkout_shipping_address_zip").val("");
                
            }else{
                
                $("#checkout_shipping_address_company").val(store.store_name + sisCartCheckout.strStoreNameDelimiter + store.code);
                $("#checkout_shipping_address_address1").val((store.address_1?store.address_1:""));

                var extraAddresses = "";
        
                    extraAddresses += (typeof(store.address_2)!=="undefined")?store.address_2:"";
                    extraAddresses += (typeof(store.address_3)!=="undefined")?(" " + store.address_3):"";
        
                $("#checkout_shipping_address_address2").val(extraAddresses);
                $("#checkout_shipping_address_city").val((store.city?store.city:""));
                $("#checkout_shipping_address_province").val((store.state?store.state:""));
                $("#checkout_shipping_address_zip").val( (store.postcode?store.postcode:""));
                $("#checkout_shipping_address_country").val(store.country);
                sisCartCheckout.updateSelectedStoreInfo(store)
                
            }
        
            if(validCCinfo){
                $(".step__footer__continue-btn").removeClass("btn--disabled").prop("disabled",false)
            }else{
                $(".step__footer__continue-btn").addClass("btn--disabled").prop("disabled",true)
            }
        
            if($(document.body).hasClass("click-collect-not-available")){
                $(".sis-cnc-checkout-step-availability").removeClass("hide")
                $("#continue_button").addClass("btn--disabled").prop("disabled",true)
            }

            if($(document.body).hasClass("click-collect-available")){
                $(".sis-cnc-checkout-step-availability").addClass("hide")
                $("#continue_button").removeClass("btn--disabled").prop("disabled",false)
            }







        })


    }
}
}

//JS API to click & Collect
var _stockinstore = _stockinstore || [];  
_stockinstore.clickcollect = {
onLoaded:function(data){


//We check if there is already a store selected
if(typeof(stockInStoreGlobal)!=='undefined'){
   var getSelectedStoreCode = stockInStoreGlobal.getCookie("_SISSTORECODEINFO");
   if(getSelectedStoreCode!==""){

       
       //First we get the cart token as we need to add a cartIdentifier attribute
       sisGetCartToken(function(token){

           if(token!==null){
               if(sisCartCheckoutConfig.templatename=='cart'){
                   sisUpdateCartAttributes(token,getSelectedStoreCode,function(data){
                   
                   })										

               }else{
                   if(typeof(Shopify.Checkout.step)!=="undefined"){//prevent when refreshing thank you page
                       // && Shopify.Checkout.step!=="processing" 
                       if(Shopify.Checkout.step=="contact_information"){

                           var orderInfo = {};
                           var pdata = {};
                           orderInfo.storeCode = getSelectedStoreCode;
                           orderInfo.orderIdentifier = token
                           pdata.orderInfo = orderInfo;
                   
                           stockInStore.sendEvents(null,null,'sis','_trackEvent', 'Stock In Store', 'Click', 'Stores - CnC Select Store',JSON.stringify(pdata));

                       }
                   }
               }    
           }
       })
   }
}



//Is Jquery Available?
if (typeof jQuery === 'undefined') {
   if(typeof(stockInStoreGlobal) == "object"){
       stockInStoreGlobal.sendErrorLog_new("stockinstore-clickcollect-scripts.js","script error","jQuery not defined",function(){})        
   }
disableClickCollectOnSite();
} else {
try{

   sisCartCheckout.init(sisCartCheckoutConfig.options);






}catch(err){

   if(typeof(stockInStoreGlobal) == "object"){
      
       var errorString = JSON.stringify(err);
       var checkoutToken = "";
       var checkoutStep  = "";
       if(typeof(Shopify.Checkout)!=="undefined"){
           if(typeof(Shopify.Checkout.token)!=="undefined"){
               checkoutToken = Shopify.Checkout.token;
               checkoutStep = Shopify.Checkout.step;
           }
       }
       errorString = errorString + ' Checkout Step: ' + checkoutStep + ' Checkout Token: ' +  checkoutToken

       stockInStoreGlobal.sendErrorLog_new("stockinstore-clickcollect-scripts.js","script error",errorString,function(){})
   
   }


   disableClickCollectOnSite()
}

//if(sisCartCheckoutConfig.templatename == "cart"){

 //}else if(sisCartCheckoutConfig.templatename == "checkout"){
     
 //}
//if(typeof(Shopify)=="object" && 
  // typeof(Shopify.Checkout)=="object" && 
     //  typeof(Shopify.Checkout.requiresShipping)=="boolean" && 
       //    Shopify.Checkout.requiresShipping == true){
         //      //Initialising the checkout
           //    jQuery(function($) {
             //      sisCartCheckout.init();

               //});

           //}

}



},
onStoreSelected:function(data){

if(data.selectedstore!==null){

//First we get the cart token as we need to add a cartIdentifier attribute
sisGetCartToken(function(token){

   if(token!==null){

       if(sisCartCheckoutConfig.templatename=='cart'){

       sisUpdateCartAttributes(token,data.selectedstore.code,function(data){
           
       })
   }else{
       var orderInfo = {};
       var pdata = {};
       orderInfo.storeCode = data.selectedstore.code;
       orderInfo.orderIdentifier = token
       pdata.orderInfo = orderInfo;

       stockInStore.sendEvents(null,null,'sis','_trackEvent', 'Stock In Store', 'Click', 'Stores - CnC Select Store',JSON.stringify(pdata));

   }										
   }
})


   sisCartCheckout.showClickCollect()

 if(typeof(stockInStore)!=="undefined"){
     stockInStore.getCartCNCStatus(function(data){
       if(data!==null){
           sisCartCheckout.checkAvailabilityStatus();
       }
       
     })

 }
}
}
}

var disableClickCollectOnSite = function(){
//not dependent on Jquery so we use vanilla javascript    

if(document.getElementsByTagName("body")!==null){
if(document.getElementsByTagName("body").length > 0){
    document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className + " click-collect-error";
}
}


if(sisCartCheckoutConfig.templatename == "checkout"){
if(Shopify.Checkout.step == "shipping_method"){
   
    var allShipMethods = document.querySelectorAll(".section--shipping-method .radio-wrapper");

    for(var i=0;i<allShipMethods.length;i++){
        var getElementShip = allShipMethods[i]
        if(getElementShip.getAttribute("data-shipping-method")!==null){
            var getShipMethod = getElementShip.getAttribute("data-shipping-method");
            if(getShipMethod == sisCartCheckout.clickcollectShippingMethodLabel ){
                getElementShip.parentNode.className = "hide content-box__row";
                 
            }else{
                
                var getLabel = getElementShip.querySelectorAll("label");
                if(getLabel.length >0){
                    getLabel[0].click()    
                }
                break;
            }
            
        }
        var sectionShipMethod = document.querySelectorAll(".section--shipping-method");
        if(sectionShipMethod.length >0){
            sectionShipMethod[0].className = sectionShipMethod[0].className + " shipping-method-ready"  
        }

        var continueButton = document.getElementById("continue_button")    
        if(continueButton!==null){
            continueButton.className = continueButton.className + " completed"  
        }
        
        
    }



}else if(Shopify.Checkout.step == "payment_method"){

    if(sisCartCheckoutConfig.shipMethodSelected == sisCartCheckout.clickcollectShippingMethodName){
        var continueButton  = document.getElementById("continue_button")
        if(continueButton!==null){
            continueButton.className = "step__footer__continue-btn btn btn--disabled"
            continueButton.disabled = true
        }

        var stepSection = document.querySelector(".step__sections")
        if(stepSection!==null){

            var divcon = document.createElement("div")
            divcon.id = "sis-invalid-message-id"
            stepSection.insertBefore(divcon, stepSection.childNodes[0]); 
            if(document.getElementById("sis-invalid-message-id")!==null){
                document.getElementById("sis-invalid-message-id").innerHTML = sisCartCheckout.clickcollectInvalidShippingMethodMessage
                var getHrefAttr = null;
                if(document.querySelector(".review-block__link a")!==null){
                    getHrefAttr = document.querySelector(".review-block__link a").getAttribute("href");
                    
                }
                if(getHrefAttr!==null){
                    document.querySelector(".sis-link-change-delivery").setAttribute("href",getHrefAttr)
                }
                
            }
        }
        
      
        

        //var getShipMethodLink = document.querySelector("a[data-trekkie-id='change_shipping_method_link']")
        //if(getShipMethodLink!==null){
        //    var changeShipMethodRef = getShipMethodLink.getAttribute("href");
        //    window.location.href = changeShipMethodRef
        //}
        
    }

}else if(Shopify.Checkout.step =="contact_information"){
}
}   
}

/** We check when global had been loaded and ready of page else we disable CC */
var SISIntervalCheckCounter     = 0;
var SISIntervalCheckCounterLimit = 1000;

var ajaxRequest = function(){
    var ajaxRequest;
    try{ // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    }catch (e){// Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject('Msxml2.XMLHTTP');
        }catch (e){
            try{
                ajaxRequest = new ActiveXObject('Microsoft.XMLHTTP');
            }catch (e){// unable to make ajax request
                return false;
            }
        }
    }
    return ajaxRequest;
}

var sendLogWhenGlobalNotLoaded = function(){
    if(typeof(_stockinstore)!=="undefined"){
        if(_stockinstore.length>0){
            var checkoutToken = "";
            var checkoutStep  = "";
            if(typeof(Shopify.Checkout)!=="undefined"){
                if(typeof(Shopify.Checkout.token)!=="undefined"){
                    checkoutToken = Shopify.Checkout.token;
                    checkoutStep = Shopify.Checkout.step;
                }
            }

            var requestObj = ajaxRequest()
            requestObj.open('POST',_stockinstore[0].applicationurl + '/widget/errorLog',true);
            requestObj.withCredentials = true;
            requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            requestObj.send('site=' + _stockinstore[0].site +'&filename=stockinstore-clickcollect-scripts.js&functionName=global.js loadin&errorMessage=global.js could not be loaded'
            +' Checkout step: ' + checkoutStep + ' Checkout token:' + checkoutToken       + '&isajax=1&info=none')
        }
    }
}

var globalSISIntervalCheck = window.setInterval(function(){
    if(SISIntervalCheckCounter<=SISIntervalCheckCounterLimit){
        if(typeof(stockInStoreGlobal) == "object"){
            window.clearInterval(globalSISIntervalCheck)
        }

    }else{
        window.clearInterval(globalSISIntervalCheck)
        sendLogWhenGlobalNotLoaded();
        disableClickCollectOnSite()
    }
    //console.log(SISIntervalCheckCounter + " " + SISIntervalCheckCounterLimit)
    SISIntervalCheckCounter++;
},1)


var sisGetCartToken = function(pcallback){
    fetch('/cart.js')
    .then(response => response.json())
    .then(data => {
        if(pcallback != null) return pcallback.call(this,data.token);	
    })
    .catch((error) => {
        if(pcallback != null) return pcallback.call(this,null);	
    });
}

var sisUpdateCartAttributes = function(token,storecode,pcallback){
    var formData = {
        attributes: {
            'storeCode': storecode,
            'orderIdentifier':token
        }	
    };

    fetch('/cart/update.js', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {

        var orderInfo = {};
        var pdata = {};
        orderInfo.storeCode = storecode;
        orderInfo.orderIdentifier = token
        pdata.orderInfo = orderInfo;

        stockInStore.sendEvents(null,null,'sis','_trackEvent', 'Stock In Store', 'Click', 'Stores - CnC Select Store',JSON.stringify(pdata));
        if(pcallback != null) return pcallback.call(this,data);	
    })
    .catch((error) => {
        if(pcallback != null) return pcallback.call(this,null);	
    });		
}
// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: bcSfFilterConfig.custom.products_per_page,
        // Optional
        loadProductFirst: true,       
      breakpointMobile: '1024px' 
    }
};

// Declare Templates
var bcSfFilterTemplate = {
    'productGridItemHtml': '<div class="productWrapper">' +
  								'<div class="iwishAddShop">{[itemWishlist]}</div>' +
								'<a data-val="{[itemFirstVariantId]}" href="{[itemUrl]}" class="newArrivalProduct">' +
  									'<span class="imageWrapper">' +
                                        '{[itemLabels]}' + 
 	 									'<span class="imageContainer" style="background-image:url(\'{[itemThumbUrl]}\');"></span>' +
                      				'</span>' +

                                    '<span class="productInformation">' +
                                    	'<span class="contentDetails">' +
                              			'<span class="productName">{[itemTitle]}</span>' +
  										'<div data-price-wrapper class="price">{[itemPrice]}</div>' +
  									'</span>' +
  								'</a>' +
                            '</div>',

  	// Pagination Template
    'previousActiveHtml': '<span class="next"><a href="{[itemUrl]}" title="">« Previous</a></span>',
    'previousDisabledHtml': '',
    'nextActiveHtml': '<span class="next"><a href="{[itemUrl]}" title="">Next »</a></span>',
    'nextDisabledHtml': '',
    'pageItemHtml': '<span class="page"><a href="{[itemUrl]}" title="">{[itemTitle]}</a></span>',
    'pageItemSelectedHtml': '<span class="page current">{[itemTitle]}</span>',
    'pageItemRemainHtml': '<span class="deco">{[itemTitle]}</span>',
    'paginateHtml': '<span class="paginationWrapper">{[previous]}{[pageItems]}{[next]}</span>',

  	// Sorting Template
    'sortingHtml': '<label>' + bcSfFilterConfig.label.sorting + ':</label><select>{[sortingItems]}</select>',

  	// Show Limit Template
    'showLimitHtml': '<label>' + bcSfFilterConfig.label.sorting + ':</label><select>{[showLimitItems]}</select>',
};

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add Thumbnail
    var thumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '1024x1024') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{\[itemThumbUrl\]}/g, thumbUrl);

    // Add Vendor
    itemHtml = itemHtml.replace(/{\[itemVendor\]}/g, data.vendor);

    // Add Price
    var itemPriceHtml = '';
  	if (data.compare_at_price_max > data.price_min) {
      	<!-- itemPriceHtml += '<span class="saleSticker"><img src="//cdn.shopify.com/s/files/1/2176/1321/t/112/assets/icon-sale.svg?v=38816482714103567821690849057" alt="Sale" /></span>'; -->
        itemPriceHtml += '<span class="visually-hidden" data-compare-text>Regular price</span>';
        itemPriceHtml += '<span class="comparison" data-compare-price>';
        itemPriceHtml += '<span class="was">' + this.formatMoney(data.compare_at_price_max) + '</span>';
        itemPriceHtml += ' <span class="now" data-product-price>' + this.formatMoney(data.price_min) + '</span>';
        itemPriceHtml += '</span>';
  	} else {
        itemPriceHtml += '<span class="productPrice">' + this.formatMoney(data.price_min) + '</span>';
    }
    itemHtml = itemHtml.replace(/{\[itemPrice\]}/g, itemPriceHtml);

  	// Add Wishlist
  	var itemWishlistHtml = '<a class="iWishAddColl" href="#" data-variant="{[itemFirstVariantId]}" data-product="{[itemId]}" data-pTitle="{[itemTitle]}">';
  	itemWishlistHtml += '<svg aria-hidden="true" focusable="false" role="presentation" class="icon heart-icon" viewBox="0 0 20 19"><path d="M10 19l-1.5-1.4C3.7 13.1 2 11.3.9 9.1.3 8 0 6.9 0 5.7 0 2.5 2.4 0 5.5 0 7.2 0 8.9.8 10 2.2 11.1.8 12.8 0 14.5 0 17.6 0 20 2.5 20 5.7c0 1.2-.3 2.3-.9 3.4-1.1 2.2-2.8 4-7.7 8.5L10 19zM5.5 2C3.5 2 2 3.6 2 5.7c0 .8.2 1.6.7 2.5 1 1.8 2.3 3.3 7.2 8l.1.1.1-.1c4.9-4.6 6.3-6.1 7.2-8 .5-.9.7-1.7.7-2.5C18 3.6 16.5 2 14.5 2c-1.1 0-2.2.5-3 1.4L10 5.3 8.5 3.4C7.7 2.5 6.6 2 5.5 2z"/></svg>';
	itemWishlistHtml += '</a>';
    itemHtml = itemHtml.replace(/{\[itemWishlist\]}/g, itemWishlistHtml);
  
    // Item Label
    var itemLabelHtml = ''
    if (this.getProductMetafield(data, 'accentuate', 'sale_flag') === 'Yes') {
      var flagColour = this.getProductMetafield(data, 'accentuate', 'flag_colour');
      var flagBorder = this.getProductMetafield(data, 'accentuate', 'flag_border');
      var flagText = this.getProductMetafield(data, 'accentuate', 'flag_text');
      
      if (flagColour === '#ffffff') {
        itemLabelHtml = '<span class="saleSticker" style="display: block; background-color: ' + flagColour + 
          '; border: 2px solid ' + flagBorder + '; color: ' + flagBorder + '; ">' + flagText + '</span>';
      } else {
        itemLabelHtml = '<span class="saleSticker" style="display: block; background-color: ' + flagColour + 
          '; border-radius: 50%; border: 2px solid ' + flagBorder + '; color: #fff; ">' + flagText + '</span>';
      }
    }
    itemHtml = itemHtml.replace(/{\[itemLabels\]}/g, itemLabelHtml);

    // Add main attribute
    itemHtml = itemHtml.replace(/{\[itemId\]}/g, data.id);
    itemHtml = itemHtml.replace(/{\[itemFirstVariantId\]}/g, firstVariant.id);
    itemHtml = itemHtml.replace(/{\[itemHandle\]}/g, data.handle);
    itemHtml = itemHtml.replace(/{\[itemTitle\]}/g, data.title);
    itemHtml = itemHtml.replace(/{\[itemUrl\]}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    // Get page info
    var currentPage = parseInt(this.queryParams.page);
    var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

    // If it has only one page, clear Pagination
    if (totalPage == 1) {
        jQ(this.selector.bottomPagination).html('');
        return false;
    }

    if (this.getSettingValue('general.paginationType') == 'default') {
        var paginationHtml = bcSfFilterTemplate.paginateHtml;

        // Build Previous
        var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
        previousHtml = previousHtml.replace(/{\[itemUrl\]}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
        paginationHtml = paginationHtml.replace(/{\[previous\]}/g, previousHtml);

        // Build Next
        var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
        nextHtml = nextHtml.replace(/{\[itemUrl\]}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
        paginationHtml = paginationHtml.replace(/{\[next\]}/g, nextHtml);

        // Create page items array
        var beforeCurrentPageArr = [];
        for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
            beforeCurrentPageArr.unshift(iBefore);
        }
        if (currentPage - 4 > 0) {
            beforeCurrentPageArr.unshift('...');
        }
        if (currentPage - 4 >= 0) {
            beforeCurrentPageArr.unshift(1);
        }
        beforeCurrentPageArr.push(currentPage);

        var afterCurrentPageArr = [];
        for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
            afterCurrentPageArr.push(iAfter);
        }
        if (currentPage + 3 < totalPage) {
            afterCurrentPageArr.push('...');
        }
        if (currentPage + 3 <= totalPage) {
            afterCurrentPageArr.push(totalPage);
        }

        // Build page items
        var pageItemsHtml = '';
        var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
        for (var iPage in pageArr) {
            if (pageArr[iPage] == '...') {
                pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
            } else {
                pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
            }
            pageItemsHtml = pageItemsHtml.replace(/{\[itemTitle\]}/g, pageArr[iPage]);
            pageItemsHtml = pageItemsHtml.replace(/{\[itemUrl\]}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
        }
        paginationHtml = paginationHtml.replace(/{\[pageItems\]}/g, pageItemsHtml);

        jQ(this.selector.bottomPagination).html(paginationHtml);
    }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{\[sortingItems\]}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Show Limit
BCSfFilter.prototype.buildFilterShowLimit = function() {
    if (bcSfFilterTemplate.hasOwnProperty('showLimitHtml')) {
        jQ(this.selector.topShowLimit).html('');

        var numberList = this.getSettingValue('general.showLimitList');
        if (numberList != '') {
            // Build content
            var showLimitItemsHtml = '';
            var arr = numberList.split(',');
            for (var k = 0; k < arr.length; k++) {
                showLimitItemsHtml += '<option value="' + arr[k] +'">' + arr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.showLimitHtml.replace(/{\[showLimitItems\]}/g, showLimitItemsHtml);
            jQ(this.selector.topShowLimit).html(html);

            // Set value
            jQ(this.selector.topShowLimit + ' select').val(this.queryParams.limit);
        }
    }
};

// Build
BCSfFilter.prototype.buildExtrasProductList = function(data) {
    jQuery( ".iWishAddColl" ).each(function() {
        var iWishvId = jQuery(this).attr("data-variant");
        var iWishpId = jQuery(this).attr("data-product");
        if(isInWishlist(iWishpId,iWishvId)){
            jQuery(this).addClass('iwishAdded').html(iwish_added_txt);
        }
    });
};

BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {};
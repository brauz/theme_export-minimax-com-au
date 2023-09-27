
// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSThemeConfig.custom.products_per_page,
		/* Optional */
		loadProductFirst: true,
		filterTreeMobileStyle: 'style1', 
    }
};

var boostPFSTemplate = {
    'productGridItemHtml': '<div class="productWrapper">' +
  								'<div class="iwishAddShop test">{{itemWishlist}}</div>' +
								'<a data-val="{{itemFirstVariantId}}" href="{{itemUrl}}" class="newArrivalProduct">' +
  									'<span class="imageWrapper">' +
                                        '{{itemLabels}}' + 
 	 									'<span class="imageContainer" style="background-image:url(\'{{itemThumbUrl}}\');"></span>' +
                      				'</span>' +

                                    '<span class="productInformation">' +
                                    	'<span class="contentDetails">' +
                              			'<span class="productName">{{itemTitle}}</span>' +
  										'<div data-price-wrapper class="price">{{itemPrice}}</div>' +
  									'</span>' +
  								'</a>' +
                            '</div>',

  	// Pagination Template
    'previousActiveHtml': '<span class="next"><a href="{{itemUrl}}" title="">« Previous</a></span>',
    'previousDisabledHtml': '',
    'nextActiveHtml': '<span class="next"><a href="{{itemUrl}}" title="">Next »</a></span>',
    'nextDisabledHtml': '',
    'pageItemHtml': '<span class="page"><a href="{{itemUrl}}" title="">{{itemTitle}}</a></span>',
    'pageItemSelectedHtml': '<span class="page current">{{itemTitle}}</span>',
    'pageItemRemainHtml': '<span class="deco">{{itemTitle}}</span>',
    'paginateHtml': '<span class="paginationWrapper">{{previous}}{{pageItems}}{{next}}</span>',

  	// Sorting Template
    'sortingHtml': '<label>' + boostPFSThemeConfig.label.sorting + ':</label><select>{{sortingItems}}</select>',

  	// Show Limit Template
    'showLimitHtml': '<label>' + boostPFSThemeConfig.label.sorting + ':</label><select>{{showLimitItems}}</select>',
};

(function() {
	var onSale = false,
		soldOut = false,
		priceVaries = false,
		images = [],
		firstVariant = {},
		boostPFSImgDefaultSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
		boostPFSRangeWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];


	BoostPFS.inject(this);

	/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
	function prepareShopifyData(data) {
		// Displaying price base on the policy of Shopify, have to multiple by 100
		soldOut = !data.available; // Check a product is out of stock
		onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Convert images to array
		images = data.images_info;
		// Get First Variant (selected_or_first_available_variant)
		firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) {
				return e.id == Utils.getParam('variant');
			});
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		return data;
	}

	/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
	/************************** BUILD PRODUCT LIST **************************/
	// Build Product Grid Item
	ProductGridItem.prototype.compileTemplate = function(data) {
		if (!data) data = this.data;
		// Customize API data to get the Shopify data
		data = prepareShopifyData(data);

		// Get Template
		var itemHtml = boostPFSTemplate.productGridItemHtml;
		// Add Thumbnail
        var thumbUrl = images.length > 0 ? Utils.optimizeImage(images[0]['src'], '1024x1024') : boostPFSAppConfig.general.no_image_url;
        itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, thumbUrl);

        // Add Vendor
        itemHtml = itemHtml.replace(/{{itemVendor}}/g, data.vendor);

        // Add Price
        var itemPriceHtml = '';
        if (data.variants[0].compare_at_price > data.variants[0].price) {
            itemPriceHtml += '<span class="visually-hidden" data-compare-text>' + boostPFSThemeConfig.label_basic.sorting + '</span>';
            itemPriceHtml += '<span class="comparison" data-compare-price>';
            itemPriceHtml += ' <span class="now" data-product-price>' + Utils.formatMoney(data.variants[0].price) + '</span>';
			itemPriceHtml += '<span class="was">' + Utils.formatMoney(data.variants[0].compare_at_price) + '</span>';
            itemPriceHtml += '</span>';
        } else {
            itemPriceHtml += '<span class="productPrice">' + Utils.formatMoney(data.price_min) + '</span>';
        }
        itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

        // Add Wishlist
        var itemWishlistHtml = '<a class="iWishAddColl" href="#" data-variant="{{itemFirstVariantId}}" data-product="{{itemId}}" data-pTitle="{{itemTitle}}">';
        itemWishlistHtml += '<svg aria-hidden="true" focusable="false" role="presentation" class="icon heart-icon" viewBox="0 0 20 19"><path d="M10 19l-1.5-1.4C3.7 13.1 2 11.3.9 9.1.3 8 0 6.9 0 5.7 0 2.5 2.4 0 5.5 0 7.2 0 8.9.8 10 2.2 11.1.8 12.8 0 14.5 0 17.6 0 20 2.5 20 5.7c0 1.2-.3 2.3-.9 3.4-1.1 2.2-2.8 4-7.7 8.5L10 19zM5.5 2C3.5 2 2 3.6 2 5.7c0 .8.2 1.6.7 2.5 1 1.8 2.3 3.3 7.2 8l.1.1.1-.1c4.9-4.6 6.3-6.1 7.2-8 .5-.9.7-1.7.7-2.5C18 3.6 16.5 2 14.5 2c-1.1 0-2.2.5-3 1.4L10 5.3 8.5 3.4C7.7 2.5 6.6 2 5.5 2z"/></svg>';
        itemWishlistHtml += '</a>';
        itemHtml = itemHtml.replace(/{{itemWishlist}}/g, itemWishlistHtml);

        // Item Label
        var itemLabelHtml = ''
        if (Utils.getProductMetafield(data, 'accentuate', 'sale_flag') === 'Yes') {
          var flagColour = Utils.getProductMetafield(data, 'accentuate', 'flag_colour');
          var flagBorder = Utils.getProductMetafield(data, 'accentuate', 'flag_border');
          var flagText = Utils.getProductMetafield(data, 'accentuate', 'flag_text');

          if (flagColour === '#ffffff') {
            itemLabelHtml = '<span class="saleSticker" style="display: block; background-color: ' + flagColour + 
              '; border: 2px solid ' + flagBorder + '; color: ' + flagBorder + '; ">' + flagText + '</span>';
          } else {
            itemLabelHtml = '<span class="saleSticker" style="display: block; background-color: ' + flagColour + 
              '; border-radius: 50%; border: 2px solid ' + flagBorder + '; color: #fff; ">' + flagText + '</span>';
          }
        }
        itemHtml = itemHtml.replace(/{{itemLabels}}/g, itemLabelHtml);

		// Add main attribute (Always put at the end of this function)
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
      	itemHtml = itemHtml.replace(/{{itemFirstVariantId}}/g, data.variants[0].id);
      	
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
		return itemHtml;
	};
	// Build Product List Item
	ProductListItem.prototype.compileTemplate = function(data) {
		if (!data) data = this.data;
		// Customize API data to get the Shopify data
		data = prepareShopifyData(data);

		// For List View
		// Get Template
		var itemHtml = boostPFSTemplate.productListItemHtml;

		// Add Custom class
		var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
		var saleClass = onSale ? boostPFSTemplate.saleClass : '';

		itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
		itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
		// Add Label
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
		// Add TAG Label
		itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
		// Add Images
		itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));

		// Add Review
		if (typeof Integration === 'undefined' ||
			(typeof Integration != 'undefined' &&
				typeof Integration.hascompileTemplate == 'function' &&
				!Integration.hascompileTemplate('reviews'))) {
			itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
		}

		// Add Vendor
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));

		// Add Price
		var itemPriceHtml = buildPrice(data, onSale, priceVaries);
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

		// Description
		var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
		itemDescription = (itemDescription.split(" ")).length > 35 ? itemDescription.split(" ").splice(0, 35).join(" ") + '...' : itemDescription.split(" ").splice(0, 35).join(" ");
		itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

		// itemActiveSwapClass
		itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));

		// Add Color Swatches
		itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildProductOptionSwatches(data, boostPFSFilterConfig.boostProductOptionSwatch.color.swatchName, boostPFSFilterConfig.boostProductOptionSwatch.color.optionName, boostPFSFilterConfig.boostProductOptionSwatch.color.swatchDisplay, boostPFSFilterConfig.boostProductOptionSwatch.color.swatchType ));

        // Add Size Swatch
        itemHtml = itemHtml.replace(/{{itemSizeSwatches}}/g, buildProductOptionSwatches(data, boostPFSFilterConfig.boostProductOptionSwatch.size.swatchName, boostPFSFilterConfig.boostProductOptionSwatch.size.optionName, boostPFSFilterConfig.boostProductOptionSwatch.size.swatchDisplay, boostPFSFilterConfig.boostProductOptionSwatch.size.swatchType ));

		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);

		return itemHtml;
		// End For List View
	};

	/************************** END BUILD PRODUCT LIST **************************/
	/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
	function buildGridWidthClass() {
		var gridWidthClass = '';
		// On PC
		switch (boostPFSThemeConfig.custom.products_per_row) {
			case 2:
				gridWidthClass = 'boost-pfs-filter-grid-width-2';
				break;
			case 3:
				gridWidthClass = 'boost-pfs-filter-grid-width-3';
				break;
			case 5:
				gridWidthClass = 'boost-pfs-filter-grid-width-5';
				break;
			case 6:
				gridWidthClass = 'boost-pfs-filter-grid-width-6';
				break;
			default:
				gridWidthClass = 'boost-pfs-filter-grid-width-4';
				break;
		}
		// On Mobile
		switch (boostPFSThemeConfig.custom.products_per_row_mobile) {
			case 1:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-1';
				break;
			case 3:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-3';
				break;
			default:
				gridWidthClass += ' boost-pfs-filter-grid-width-mb-2';
				break;
		}
		return gridWidthClass;
	}

	function buildImages(data) {
		var html = '',
			aspectRatio = '',
			rangeWidths = boostPFSRangeWidths,
			paddingTop = 100;

		var dataSrcSet = '',
			dataWidths = '',
			dataSizes = 'auto',
			imgAlt = data.title,
			flipImageSrcSet = '';

		var activeSwapImage = !Utils.isMobile() && images.length > 1 &&
			boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
			boostPFSThemeConfig.custom.active_image_swap == true;

		for (var i = 0; i < rangeWidths.length; i++) {
			dataSrcSet += Utils.getFeaturedImage(images, rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
			dataWidths += rangeWidths[i];

			if (activeSwapImage) {
				flipImageSrcSet += Utils.optimizeImage(images[1]['src'], rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
			}

			if (i < rangeWidths.length - 1) {
				dataSrcSet += ', ';
				dataWidths += ', ';

				if (activeSwapImage) {
					flipImageSrcSet += ', ';
				}
			}
		}

		if (images.length > 0) {
			aspectRatio = images[0]['width'] / images[0]['height'];
			paddingTop = 1 / aspectRatio * 100;
		}

		html += '<a href="{{itemUrl}}" class="boost-pfs-filter-product-item-image-link" ';
		html += 'style="padding-top:' + paddingTop + '%;">';
		html += '<img class="boost-pfs-filter-product-item-main-image lazyload Image--lazyLoad"' +
			'data-srcset="' + dataSrcSet + '" ' +
			'data-src="' + Utils.getFeaturedImage(images, rangeWidths[2] + 'x') + '" ' +
			'data-widths="[' + dataWidths + ']" ' +
			'data-sizes="' + dataSizes + '" ' +
			'src="' + boostPFSImgDefaultSrc + '" ' +
			'alt="' + imgAlt + '" ';

		if (activeSwapImage) {
			html += 'data-img-flip-src="' + Utils.optimizeImage(images[1]['src'], rangeWidths[2] + 'x') + '" ' +
				'data-img-flip-srcset="' + flipImageSrcSet + '" ';
		}
		html += '/></a>';

		return html;
	}

	function buildVendor(data) {
		var html = '';
		if (boostPFSThemeConfig.custom.hasOwnProperty('show_vendor') &&
			boostPFSThemeConfig.custom.show_vendor == true) {
			html = boostPFSTemplate.vendorHtml;
		}
		return html;
	}

	function buildPrice(data) {
		var html = '';
		if (boostPFSThemeConfig.custom.hasOwnProperty('show_price') &&
			boostPFSThemeConfig.custom.show_price) {
			html = '<p class="boost-pfs-filter-product-item-price">';
			if (onSale) {

				html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
				html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
			} else {
				if (priceVaries) {
					html += '<span class="boost-pfs-filter-product-item-price-from-text">' + (boostPFSThemeConfig.label_basic.from) + ' ' + '</span>';
				}
				html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
			}
			html += '</p>';
		}
		return html;
	}

	function buildLabels(data) {
		// Build Sold out label
		var soldOutLabel = '';
		if (boostPFSThemeConfig.custom.hasOwnProperty('show_sold_out_label') &&
			boostPFSThemeConfig.custom.show_sold_out_label && soldOut) {
			soldOutLabel = boostPFSTemplate.soldOutLabelHtml.replace(/{{style}}/g, '');
		}
		// Build Sale label
		var saleLabel = '';
        var salePercent = '';
		if (boostPFSThemeConfig.custom.show_sale_label && onSale && !soldOut) {
            if (boostPFSThemeConfig.custom.show_sale_percent){
                salePercent = Math.round((data.compare_at_price_min - data.price_min) * 100 / data.compare_at_price_max);
            }
			saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{style}}/g, '');
            saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{salePercent}}/g, salePercent + '%');
		}
		// Build Labels
		return soldOutLabel + saleLabel;
	}

	// BUILD LABEL PRODUCT WITH TAGS
	function buildTagLabels(data, showall) {
		if (boostPFSThemeConfig.custom.show_label_by_tag) {
			if (showall) {
				var tagLabel = '';
				if (data.tags) {
					for (var i = 0; i < data.tags.length; i++) {
						var tag = data.tags[i];
						if (tag.indexOf("pfs:label") !== -1) {
							var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
							tagLabel += preTagLabel;
						}
					}
				}
			} else {
				var tagLabel = '';
				if (data.tags) {
					for (var i = data.tags.length - 1; i >= 0; i--) {
						tag = data.tags[i];
						if (tag.indexOf("pfs:label") !== -1) {
							var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
							tagLabel += preTagLabel;
							break;
						}
					}
				}
			}
			return tagLabel;
		} else {
			return "";
		}
	}

	// Build Color Swatches
	function buildProductOptionSwatches(data, swatchName, optionName, swatchDisplay, swatchType) {
		var swatchesProductOptionHtml = '',
			filterSwatchTitle = swatchName,
			optionName = optionName,
			swatchArr = [],
			countSwatch = 0,
			swatchValues = [],
			swatchLimit = 4;

		var dataImgSize = '360',
			bgSize = '50x',
			dataImgSrc = Utils.getFeaturedImage(data.images_info, dataImgSize + 'x'),
			swatchName = '#ffffff',
			bgImageSrc = '',
			viewMoreLabel = 'More ' + filterSwatchTitle;

		if (swatchDisplay) {
			if (typeof data.options_with_values != 'undefined' && data.options_with_values.length > 0) {
				swatchArr = data.options_with_values.filter(function(option) {
					return option.name == optionName;
				});
				if (swatchArr.length > 0) {
					countSwatch = swatchArr[0].values.length;

					if (swatchLimit > countSwatch) {
						swatchLimit = countSwatch;
					}
					swatchValues = swatchArr[0].values;

					swatchesProductOptionHtml += '<ul class="boost-pfs-filter-item-swatch boost-pfs-filter-item-swatch-' + optionName + ' ">';

					for (var sIndex = 0; sIndex < swatchLimit; sIndex++) {
						swatchName = swatchValues[sIndex].title;
                        swatchVariant = data['variants'][sIndex];
						sImageIndex = swatchValues[sIndex].image || '';
						if (sImageIndex != '') {
							dataImgSrc = Utils.optimizeImage(data.images[sImageIndex], dataImgSize + 'x') + ' ' + dataImgSize + 'w';
						}


						if (swatchType) {
							switch (swatchType) {
								case 'swatch_color_display_type_image_color':
									bgImageSrc = boostPFSAppConfig.general.file_url.replace(/\?/, Utils.slugify(filterSwatchTitle).replace(/\-/g, '_') + '-' + Utils.slugify(swatchName) + '.png?v=');
									break;
								case 'swatch_color_display_type_image_product':
									bgImageSrc = Utils.getFeaturedImage(data.images_info, bgSize);
									if (sImageIndex != '') {
										bgImageSrc = Utils.optimizeImage(data.images[sImageIndex], bgSize);
									}
									break;
								default:
									bgImageSrc = '';
							}
						}

						swatchesProductOptionHtml += '<li>';
                        if(optionName == 'color' || optionName == 'colour'){
                            swatchesProductOptionHtml += '<div class="boost-pfs-product-item-tooltip">' + swatchName + '</div>';
                            swatchesProductOptionHtml += '<span tabindex="0" aria-label="' + swatchName + '" ' +
                                'style="background-color: ' + swatchName + '; ';
                            if (bgImageSrc != '') {
                                swatchesProductOptionHtml += 'background-image: url(' + bgImageSrc + ');" ';
                            } else {
                                swatchesProductOptionHtml += '" ';
                            }
                            if (dataImgSrc != '') {
                                swatchesProductOptionHtml += 'data-img="' + dataImgSrc + '" ';
                            }

                            swatchesProductOptionHtml += '></span>';
                        } else {
                            swatchesProductOptionHtml += '<a title="' + swatchName + '" href="' + Utils.buildProductItemUrl(data) + '?variant=' + swatchVariant.id + '">' + swatchName + '</a>';
                        }
						swatchesProductOptionHtml += '</li>';
					}

					if (countSwatch > swatchLimit) {
						swatchesProductOptionHtml += '<li class="boost-pfs-filter-item-swatch-more">';
						swatchesProductOptionHtml += '<a href="{{itemUrl}}" title="' + viewMoreLabel + '">+' + (countSwatch - swatchLimit) + '</a>';
						swatchesProductOptionHtml += '</li>';
					}

					swatchesProductOptionHtml += '</ul>';
				}
			}
		}
		return swatchesProductOptionHtml;
	}

	// Build Color Swatches
	function eventColorSwatches(event) {
		jQ('.boost-pfs-filter-item-swatch li span').each(function() {
			var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
			if (event == 'hover') {
				jQ(this).hover(function() {
					var newImage = jQ(this).data('img');
					img.attr('srcset', newImage);
				});
			}
			if (event == 'click') {
				jQ(this).click(function() {
					var newImage = jQ(this).data('img');
					img.attr('srcset', newImage);
				});
			}
			jQ(this).focus(function() {
				if (jQ('body').hasClass('boost-pfs-ada')) {
					var newImage = jQ(this).data('img');
					img.attr('srcset', newImage);
				}
			});
		});
	}

	function buildReview(data) {
		var html = '';
		if (boostPFSThemeConfig.custom.hasOwnProperty('show_product_review') &&
			boostPFSThemeConfig.custom.show_product_review == true) {
			html = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
		}
		return html;
	}

	function buildActiveSwapClass(data) {
		if (!Utils.isMobile() && images.length > 1 &&
			boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
			boostPFSThemeConfig.custom.active_image_swap == true) {
			return 'has-bc-swap-image';
		}
		return '';
	}



	/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
	/************************** BUILD TOOLBAR **************************/
	// Build Pagination
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct;
		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);
		// If it has only one page, clear Pagination
		if (totalPage <= 1) {
			return '';
		}

		var paginationHtml = boostPFSTemplate.paginateHtml;
		// Build Previous
		var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
		previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
		paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
		// Build Next
		var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
		nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
		paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
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
		for (var iPage = 0; iPage < pageArr.length; iPage++) {
			if (pageArr[iPage] == '...') {
				pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
			} else {
				pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
			}
			pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
			pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
		}
		paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
		return paginationHtml;
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				var paramSort = Globals.queryParams.sort || '';
				// Build content
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
                    sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
                }
				html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
			}
		}
		return html;
	};
  
	// Build Show Limit
	ProductLimit.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSThemeConfig.custom.show_limit && boostPFSTemplate.hasOwnProperty('showLimitHtml')) {

			var numberList = Settings.getSettingValue('general.showLimitList');
			if (numberList != '') {
				// Build content
				var showLimitItemsHtml = '';
				var arr = numberList.split(',');
				for (var k in sortingArr) {
					showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
				}
				html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
			}
		}
		return html;
	};
	// Build Breadcrumb
	Breadcrumb.prototype.compileTemplate = function(colData) {
		if (!colData) colData = this.collectionData;
		var breadcrumbItemsHtml = '';
		if (boostPFSTemplate.hasOwnProperty('breadcrumbHtml')) {
			if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
				var colInfo = colData.collection;
				if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
					breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
				} else {
					breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
				}
			} else {
				breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, Settings.getSettingValue('label.defaultCollectionHeader'));
			}
		}
		return breadcrumbItemsHtml
	};

	/************************** END BUILD TOOLBAR **************************/

	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function(data) {
		if (!data) data = this.data;

		// Intergrate Review Shopify
		if (window.SPR &&
			typeof window.SPR.initDomEls == 'function' &&
			typeof window.SPR.loadBadges == 'function' &&
			boostPFSThemeConfig.custom.show_product_review) {
			window.SPR.initDomEls();
			window.SPR.loadBadges();
		}
	};

	// Build additional elements
	Filter.prototype.afterRender = function(data) {
		if (!data) data = this.data;

		var totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_other + '</span>';
		if (data.total_product == 1) {
			totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_one + '</span>';
		}
		jQ('.boost-pfs-filter-total-product').html(totalProduct);
	};

    var onCloseFilterTree = FilterTree.prototype.onCloseFilterTree;
    FilterTree.prototype.onCloseFilterTree = function() {
      onCloseFilterTree.call(this);
      jQ('body').removeClass('filter');
    }

    jQ(document).on('click', '.seeResults', () => jQ('body').removeClass('filter'));
    
})();
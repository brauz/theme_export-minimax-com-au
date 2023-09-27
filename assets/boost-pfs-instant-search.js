// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		//suggestionMode: 'test',
		//suggestionPosition: 'left'
      suggestionMobileStyle: 'style2',
	}
};

(function() {
	BoostPFS.inject(this);

    jQ('.searchBar .refresh').on('click touchstart', function() {
		jQ('.searchBar').find('input[type="search"]').val('');
    });
  
	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function() {
		var suggestionElement = this.$uiMenuElement;
		var searchElement = this.$element;
		var searchBoxId = this.id;
	};
  
  InstantSearchResultItemProduct.prototype.compileTemplate = function() {
    if (this.isShow) {
			var searchTerm = Utils.stripHtml(Globals.currentTerm);
			// Product image
			var imageHTML = '';
			if (Settings.getSettingValue('search.showSuggestionProductImage') && this.imageUrl.length) {
				imageHTML = this.getTemplate(InstantSearchResultItemProduct.tempType.IMAGE);
				imageHTML = imageHTML.replace(/{{imageUrl}}/g, this.imageUrl);
			}
			// Product title
			var productTitle = this.customizeProductTitle();
			productTitle = this._highlightSuggestionResult(productTitle, searchTerm);
			// SKU
			var skuHTML = '';
			if (Settings.getSettingValue('search.showSuggestionProductSku') && this.sku.length) {
				skuHTML = this.getTemplate(InstantSearchResultItemProduct.tempType.SKU);
				skuHTML = skuHTML.replace(/{{sku}}/g, this.sku);
			}
			// Vendor
			var vendorHTML = '';
			if (Settings.getSettingValue('search.showSuggestionProductVendor') && this.vendor.length) {
				vendorHTML = this.getTemplate(InstantSearchResultItemProduct.tempType.VENDOR);
				vendorHTML = vendorHTML.replace(/{{vendor}}/g, this.vendor);
			}
			// Price
			var priceHTML = this.compileSuggestionProductPrice();
			// Open the result item in new tab when selected
			var newTabAttr = Settings.getSettingValue('search.openProductNewTab') ? 'target="_blank"' : '';
      var productUrl;
      if( this.url.includes('/cart')) {
        productUrl = this.url.slice(5, this.url.length)
      }else {
        productUrl = this.url;
      }
			return this.getTemplate()
				.replace(/{{id}}/g, this.id)
				.replace(/{{escapedBlockType}}/g, Utils.stripHtml(this.parent.type))
				.replace(/{{url}}/g, productUrl)
				.replace(/{{newTabAttribute}}/g, newTabAttr)
				.replace(/{{itemProductImage}}/g, imageHTML)
				.replace(/{{title}}/g, productTitle)
				.replace(/{{escapedTitle}}/g, Utils.stripHtml(productTitle))
				.replace(/{{itemProductSku}}/g, skuHTML)
				.replace(/{{itemProductVendor}}/g, vendorHTML)
				.replace(/{{itemProductPrice}}/, priceHTML)
				.replace(/{{class.searchSuggestion}}/g, Class.searchSuggestion)
				.replace(/{{class.searchSuggestionItem}}/g, Class.searchSuggestionItem)
				.replace(/{{class.searchUiAutocompleteItem}}/g, Class.searchUiAutocompleteItem);
		} else {
			return '';
		}
  }
})();
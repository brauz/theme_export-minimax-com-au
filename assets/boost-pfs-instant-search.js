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
})();
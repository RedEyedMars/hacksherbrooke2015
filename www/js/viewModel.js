var viewModel = function(){
	var self = this;

	self.mainNav = ko.observableArray(mainNavdata);
}

var mainNavdata = [
	{
		"text" : "My favorites",
		"url" : "http://www.ville.sherbrooke.qc.ca/#"
	},{
		"text" : "Contact us",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/directory-of-services/"
	},{
		"text" : "Site map",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/menus/liens-rapides-haut/site-map/"
	},{
		"text" : "Pressroom",
		"url" : "http://www.ville.sherbrooke.qc.ca/en/pressroom/"
	},{
		"text" : "Francais",
		"url" : "http://www.ville.sherbrooke.qc.ca/fr/"
	}
];
	
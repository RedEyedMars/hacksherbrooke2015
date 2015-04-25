var viewModel = function(mainNavdata, sideNavdata){
	var self = this;

	self.mainNav = ko.observableArray(mainNavdata);
	self.sideNav = ko.observableArray(sideNavData);

	self.changeContext = function(navItem, navObj, evt){

	}
}


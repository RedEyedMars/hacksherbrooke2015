var viewModel = function(mainNavdata, sideNavData){
	var self = this;

	self.siteLang = ko.observable("En");
	self.mainNav = ko.observableArray(mainNavdata);
	self.sideNav = ko.observableArray(sideNavData);

	self.charts = ko.observableArray();

	self.filteredCharts = ko.observableArray();

	self.searchCharts = function(){

	}

	self.initializeSearch = function(){
		
		var allTags = []; 

		ko.utils.arrayForEach(self.charts(), function (chart, i) {
			if(!($.inArray(el, allTags))) allTags.push(el);
		});

		console.log(allTags);
	}

	self.changeContext = function(navItem, navObj, evt){
		return true;
	}

	self.getCharts = function(){
		var tempArray = [];

		ko.utils.arrayForEach(staticData.charts, function(chart, i){
			tempArray.push(new chartViewModel(chart));

		});

		self.charts(tempArray);

	}
}

var chartViewModel = function(data){
	var self = this;

	self.title = ko.observable(vm.siteLang() === "En" ? data.title.en : data.title.fr);
	self.type = ko.observable(data.type);
	self.tags = ko.observableArray(data.tags)
	self.data = function(){
		var tempArray = [];

		ko.utils.arrayForEach(data.sources, function(vm, i){
			tempArray.push($.getScript(data.sources[i]));
		});

		return tempArray;
	};
}
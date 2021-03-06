var viewModel = function(mainNavdata, sideNavData){
	var self = this;

	self.siteLang = ko.observable("En");
	self.mainNav = ko.observableArray(mainNavdata);
	self.sideNav = ko.observableArray(sideNavData);

	self.charts = ko.observableArray();

	self.filteredCharts = ko.observableArray();

	self.allTags = ko.observableArray()
	self.selectedTags = ko.observableArray();

	self.selectedTags.subscribe(function(){
		self.searchCharts();
	});

	self.searchCharts = function(){
		var tempArray = [];
		var tags = self.selectedTags();

		ko.utils.arrayForEach(self.charts(), function(chart){
			ko.utils.arrayForEach(chart.tags(), function(tag){
				if (tags.indexOf(tag) >= 0){
					tempArray.push(chart);
					return;
				}
			})
		})
		// Temp
		self.filteredCharts(tempArray);
		console.log("Rendering " + self.filteredCharts().length + ' charts');
	}

	self.initializeSearch = function(){
		ko.utils.arrayForEach(self.charts(), function (chart, i) {
			ko.utils.arrayForEach(chart.tags(), function(tag, i){
				if (self.allTags().indexOf(tag) == -1){
					self.allTags.push(tag);
				}
			});
		});
	}

	self.changeContext = function(navItem, navObj, evt){
		return true;
	}

	self.getCharts = function(){
		var tempArray = [];

		ko.utils.arrayForEach(staticData.charts, function(chart, i){
			tempArray.push(new chartViewModel(chart, i));

		});
		self.charts(tempArray);

	}

	self.initSelect = function(){
		$('select').chosen(
			{no_results_text: "Oops, nothing found!"}
			);
	}

	self.afterRenderChart = function(t, index, chart){
	 chart.renderChart();
	}

	self.addTagToSearch = function(vm, e){
		var menuItem = vm.text;

		ko.utils.arrayForEach(self.allTags(), function(tag){
			if (menuItem.toLowerCase() == tag.toLowerCase()){
				self.selectedTags.push(tag);
				return;
			}
		});
		
		$('select').trigger('chosen:updated');

	}
}

var chartViewModel = function(data, i){
	var self = this;

	self.id = ko.observable(i);
	self.title = ko.observable(vm.siteLang() === "En" ? data.title.en : data.title.fr);
	self.type = ko.observable(data.type);
	self.tags = ko.observableArray(data.tags)
	self.data = function(){
		var tempArray = [];

		ko.utils.arrayForEach(data.sources, function(vm, i){
			tempArray.push(data.sources[i]);
		});

		return tempArray;
	};

	self.renderChart = function(){
		console.log("Render Chart Called");
		switch (self.type()){
			case "bar": chartActions.barChart(self);
			break;
			case "line": chartActions.lineGraph(self);
			break;
			case "map": chartActions.mapObject(self);
			break;
		}
	}
}
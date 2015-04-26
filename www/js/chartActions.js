var chartActions = {

	barChart : function(chart) {

		initChart(chart.data()[0], chart.id(), chart.type(), chart.title.en, "Label", "Revenue", "Item-EN",["Total"]);
	},

	lineGraph : function(chart) {


	},

	mapObject : function(chart) {

		console.log(chart);

		map = new google.maps.Map(document.getElementById("map-canvas_"+chart.id()), {zoom: 13, center: new google.maps.LatLng(45.4018701,-71.9000067)});

		if (chart.id() == 0){
		    heatmap = new HeatmapOverlay(map, 
		      {
		        // radius should be small ONLY if scaleRadius is true (or small radius is intended)
		        "radius": 20,
		        "maxOpacity": 1, 
		        // scales the radius based on map zoom
		        "scaleRadius": false, 
		        // if set to false the heatmap uses the global maximum for colorization
		        // if activated: uses the data maximum within the current map boundaries 
		        //   (there will always be a red spot with useLocalExtremas true)
		        "useLocalExtrema": true,
		        // which field name in your data represents the latitude - default "lat"
		        latField: 'lat',
		        // which field name in your data represents the longitude - default "lng"
		        lngField: 'lng',
		        // which field name in your data represents the data value - default "value"
		        valueField: 'count'
		      }
		    );
			heatmap.setData(zapData);
		} else {
			console.log(chart.data()[0]);
			var mapLayer = new google.maps.KmlLayer({
			    url: chart.data()[0]
			  });
			mapLayer.setMap(map);
		}

	}

}

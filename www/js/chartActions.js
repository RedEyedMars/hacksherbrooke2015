
var barChart = function() {


};

var lineGraph = function() {


};

var mapObject = function() {
	map = new google.maps.Map(document.getElementById("map-canvas_"+charts[i]), {zoom: 13, center: new google.maps.LatLng(45.4018701,-71.9000067)});


	/*heatmap

	requires

	    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script src="js/lib/heatmap.js-2.0/build/heatmap.js"></script>
    <script src="js/lib/heatmap.js-2.0/plugins/gmaps-heatmap.js"></script>
    <script src="js/lib/jquery-2.1.3.js"></script>
    <script src="js/zap_pts.js"></script>
    */


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


};
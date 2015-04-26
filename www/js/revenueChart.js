var chartData = [
    	{
    		key: "totals",
    		values: []
    	}
    ];
var chart
d3.csv("temp.csv", function(error, data){
		// create an empty object that nv is expecting


        // populate the empty object with your data
    data.forEach(function (d){
    	d.current_year = +d.current_year
    	chartData[0].values.push(d)
    })

 	nv.addGraph(function() {
		
   		chart = nv.models.discreteBarChart()
       		.x(function (d) { return d.Item_EN })
       		.y(function (d) { return d.current_year })
       		.staggerLabels(true)
       		.tooltips(true)
       		.showValues(false)
 
 	  	d3.select('#chart')
    			.datum(chartData)
    			.attr("id", function (d) { console.log(d); })
    		.transition().duration(500)
       			.call(chart);
 
   		nv.utils.windowResize(chart.update);
   		return chart;
 	});

 });

function changeChart(csvFile, yFieldName){
  d3.csv(csvFile, function(error, data){
		// create an empty object that nv is expecting

    chartData[0].values.length = 0;
        // populate the empty object with your data
    data.forEach(function (d){
    	d[yFieldName] = +d[yFieldName]
    	chartData[0].values.push(d)
    }) 
    chart.update();
  });
}

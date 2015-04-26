
function initChart(csvFile, chartId, format,chartTitle, xAxisName, yAxisName, xAxisFieldName, yAxisFieldNames)
{
  
  d3.csv(csvFile, function(error, data){
     chartData = [];
     
      yAxisFieldNames.forEach(function (fieldName,i){
           vals = [];     
           data.forEach(function (d){
             item = {}
	     item["label"] = d[xAxisFieldName]+" "+d["pageID"]+"."+d["id"];
             item["value"] = +d[fieldName];
             vals.push(item);
          })
          chartData[i] = { key: fieldName, values: vals };

     });
     nv.addGraph(function() {
	var chart;
	if(format=="bar")
        {
	   chart = nv.models.discreteBarChart()
       		.x(function (d) { return d["label"]})
       		.y(function (d) { return d["value"] })
       		.staggerLabels(true)
       		.tooltips(true)
       		.showValues(false)
       }
       else if(format=="multiBarChart")
       {
	   chart = nv.models.multiBarChart()
       		.x(function (d) { return d["label"]})
       		.y(function (d) { return d["value"] })
       		.staggerLabels(true)
       	   if(yAxisFieldNames.length>1){
		chart.tooltips(true).showControls(true)
	   }
       }
       chart.xAxis
                .axisLabel(xAxisName);
                //.tickFormat(d3.format(',r'));

       chart.yAxis
                .axisLabel(yAxisName);

	d3.select('#svg_'+chartId)
    		.datum(chartData)
    		.attr("id", function (d) { console.log(d); })
    		.transition().duration(500)
       		.call(chart);
	d3.select('#chart svg')
 		 .append("text")
  		.attr("x", 200)             
  		.attr("y", 100)
 		.attr("text-anchor", "middle")  
  		.text(chartTitle);
 
   	nv.utils.windowResize(chart.update);
   	return chart;
    });

 });
}



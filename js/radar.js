var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['London','Taipei'];

//Data
var d = [
		  [
			{axis:"Meal",value:15},
			{axis:"Cappuccino",value:3},
			{axis:"One-way Ticket",value:3},
			{axis:"Cinema",value:12},
			{axis:"Local Cheese",value:6},
			{axis:"Bottle of Wine",value:8},
			{axis:"Domestic Beer",value:4.9},
			{axis:"Water",value:0.96},
			{axis:"McMeal at McDonalds",value:6},
			{axis:"Chicken Breasts",value:7},
			{axis:"Fresh White Bread",value:1},
			{axis:"Milk (regular)",value:0.92},
			{axis:"Apples",value:3.14}
		  ],[
			{axis:"Meal",value:4},
			{axis:"Cappuccino",value:2},
			{axis:"One-way Ticket",value:1},
			{axis:"Cinema",value:7},
			{axis:"Local Cheese",value:15},
			{axis:"Bottle of Wine",value:10},
			{axis:"Domestic Beer",value:2},
			{axis:"Water",value:0.48},
			{axis:"McMeal at McDonalds",value:3},
			{axis:"Chicken Breasts",value:6},
			{axis:"Fresh White Bread",value:1},
			{axis:"Milk (regular)",value:2.21},
			{axis:"Apples",value:2.01}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Cost of Living in some sample products (£)");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
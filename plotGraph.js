(function(namespace){

function initContainer(config){	
	var container = 
		$("<div>")
		.css({
			width: config.divDims.divWidth,
			height: config.divDims.divHeight,
			"margin-left": config.padding.left,
			"margin-top" : config.padding.top			
		})
		.addClass("container");
	
	$("body").append(container);
	
	return container[0];
}

function addSvg(config, container){
	return d3.select(container)
	.append("svg")
	.attr("height", config.svgDims.svgHeight)
	.attr("width", config.svgDims.svgWidth);
}

function drawRects(svg, arr, level, start, end, config){
	if(!arr.length){
		return;
	}
	
	arr.forEach(function(item){
		var x = (item.startDate - config.dates.minDate) * config.scale;
		var y = level * config.barHeight;
		var barWidth = item.inclusiveTime * config.scale;
		var opacity = item.exclusiveTime / config.maxTimes.exclusive;
		
		svg.append("rect")
		.attr("x", x)
		.attr("y", y)
		.attr("width", barWidth)
		.attr("height", config.barHeight)
		.attr("style", "fill:rgb(255,0,0);opacity:" + opacity)
		.attr("label", item.label);
		
		if(item.children && item.children.length){
			drawRects(svg, item.children, level + 1, x, x + barWidth, config);
		}
	});
}


function plotGraph(){
	var tree = flame.makeTree(flame.sampleData);
	var config = flame.getConfig(tree);
	var container = initContainer(config);
	var svg = addSvg(config, container);
	drawRects(svg, tree, 0, 0, config.svgDims.svgWidth, config);
}


$(plotGraph);

})(flame);









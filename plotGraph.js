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

    function generateGs(svg, arr, level, config) {
	arr.forEach(function(item){
        var x = (item.startDate - config.dates.minDate) * config.scale,
            y = level * config.barHeight;
        svg.append("g")
            .attr("transform", function (d, i) {
                return "translate(" + x + "," + y + ")";
            })
            .datum({
                exclusiveTime: item.exclusiveTime,
                inclusiveTime: item.inclusiveTime
            })
            .attr("label", item.label);


        if(item.children && item.children.length){
            generateGs(svg, item.children, level + 1, config);
		}
	});


    }

    function generateRect(svg, config) {
        svg.selectAll("g")
            .append("rect")
            .each(function () {
                var data = d3.select(this.parentNode).datum(),
                    opacity = data.exclusiveTime / config.maxTimes.exclusive,
                    barWidth = data.inclusiveTime * config.scale;
                d3.select(this).attr("style", "fill:rgb(255,0,0);opacity:" + opacity);
                d3.select(this).attr("width", barWidth);
            })
            .attr("height", config.barHeight)
            .attr("stroke-width", config.strokeWidth)
            .attr("stroke", config.strokeColour);
    }

    function generateLabels(svg, config) {
        svg.selectAll("g")
            .append("text")
            .text(function () {
                var dParentNode = d3.select(this.parentNode),
                    boundingBox = dParentNode.node().getBBox(),
                    midWidth = boundingBox.width / 2,
                    midHeight = boundingBox.height / 2;
                d3.select(this).attr("x", midWidth);
                d3.select(this).attr("y", midHeight);
                d3.select(this).attr("dy", config.textMiddle);
                d3.select(this).attr("text-anchor", "middle");
                return dParentNode.attr("label");
            });
    }

    function plotGraph(){
	var tree = flame.makeTree(flame.sampleData);
	var config = flame.getConfig(tree);
	var container = initContainer(config);
	var svg = addSvg(config, container);
        generateGs(svg, tree, 0, config);
        generateRect(svg, config);
        generateLabels(svg, config);
    }


$(plotGraph);

})(flame);









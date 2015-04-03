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
        arr.forEach(function (item) {
        var x = (item.startDate - config.dates.minDate) * config.scale,
            y = level * config.barHeight;
        svg.append("g")
            .attr("transform", function (d, i) {
                return "translate(" + x + "," + y + ")";
            })
            .datum({
                index: item.index,
                label: item.label,
                exclusiveTime: item.exclusiveTime,
                inclusiveTime: item.inclusiveTime
            });

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
                    scale = (data.exclusiveTime / config.maxTimes.exclusive),
                    barWidth = data.inclusiveTime * config.scale;
                if (data.inclusiveTime < 0) {
                    console.log("hello");
                }
                if (isNaN(scale)) {
                    scale = 1;
                    console.log(data.label, data.index);
                }
                scale = scale || 1;
                console.log(data.index, scale, Math.floor(255 - 255 * scale), "max time: ", config.maxTimes.exclusive, "exclusiveTime", data.exclusiveTime);
                d3.select(this).attr("style", "fill:rgb(255," + Math.floor(255 - 255 * scale) + ",0);");
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

    function generateTooltips(svg, config) {
        var tooltip = d3.select(".popover")
                .style("opacity", 0),
            title = d3.select(".popover-title"),
            content = d3.select(".popover-content");
        svg.selectAll("g").each(function () {
            var dNode = d3.select(this),
                datum = dNode.datum(),
                boundingBox = dNode.node().getBBox(),
                midWidth = boundingBox.width / 2,
                midHeight = boundingBox.height / 2,
                tooltipRendered = false;
            dNode.on("mouseenter", function (d) {
                if (!tooltipRendered) {
                    tooltip
                        .style("display", "block")
                        .transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltipRendered = true;
                }

            })
            dNode.on("mousemove", function (d) {
                datum.exclusiveTime = datum.exclusiveTime || datum.inclusiveTime;
                if (tooltipRendered) {
                    title.html(datum.label);
                    content.html("<span> Exclusive Time " + datum.exclusiveTime + "</span><br/>" +
                            "<span> Inclusive Time " + datum.inclusiveTime + "</span><br/>" +
                            "<span>Index : </span>" + datum.index
                    );

                    tooltip.style("left", (d3.event.pageX + config.tooltipAdjustment) + "px")
                        .style("top", (d3.event.pageY - midHeight) + "px");
                }
            })
            dNode.on("mouseleave", function () {
                tooltip.transition()
                    .style("opacity", .1)
                    .style("display", "none")
                tooltipRendered = false;
            });
        })
    }
    function plotGraph(){
	var tree = flame.makeTree(flame.sampleData);
        var config = flame.getConfig(tree);
	var container = initContainer(config);
	var svg = addSvg(config, container);
        generateGs(svg, tree, 0, config);
        generateRect(svg, config);
        generateLabels(svg, config);
        generateTooltips(svg, config);
    }


$(plotGraph);

})(flame);









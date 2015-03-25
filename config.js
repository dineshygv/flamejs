(function(namespace){
	
var config = {
		padding:{
			top: 20,
			bottom: 20,
			left: 20,
			right: 20
		},
		zoom: 1,
    barHeight: 20,
    textMiddle: "0.35em",
    strokeWidth: 2,
    strokeColour: "black",
    tooltipAdjustment: 10
	};
	
function getMaxTimes(tree){
	var inclusive = 0;
	var exclusive = 0;
	
	
	if(tree && tree.length){
		tree.forEach(function(item){
			if(inclusive < item.inclusiveTime){
				inclusive = item.inclusiveTime;
			}
			
			if(exclusive < item.exclusiveTime){
				exclusive = item.exclusiveTime;
			}
			
			var childTimes = getMaxTimes(item.children);
			
			if(inclusive < childTimes.inclusive){
				inclusive = childTimes.inclusive;
			}
			
			if(exclusive < childTimes.exclusive){
				exclusive = childTimes.exclusive;
			}
		});
	}
	
	return {
		inclusive: inclusive,
		exclusive: exclusive
	};
}
	
function getConfig(tree){
	if(!tree.length){
		return;
	}

	config.pageDims = {};
	
	config.pageDims.pageHeight = $(window).height();
	config.pageDims.pageWidth = $(window).width();
	
	config.divDims = {};
	
	config.divDims.divHeight = config.pageDims.pageHeight - config.padding.top - config.padding.bottom;
	
	config.divDims.divWidth = config.pageDims.pageWidth - config.padding.left - config.padding.right;
	
	config.svgDims = {};
	
	config.svgDims.svgHeight = config.divDims.divHeight;
	config.svgDims.svgWidth = config.divDims.divWidth * config.zoom;
	
	config.dates = {};
	config.dates.maxDate = tree[tree.length - 1].endDate;
	config.dates.minDate = tree[0].startDate;
	var timeWidth = config.dates.maxDate - config.dates.minDate;
	
	config.scale = (config.svgDims.svgWidth/timeWidth);
	
	config.maxTimes = getMaxTimes(tree);
	
	return config;
}

namespace.getConfig = getConfig;
	
})(flame);
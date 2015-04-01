var _ = require("underscore");
var mdsToJson = require("./mdsToJson");

var sanitizeType = function(str){
	if(str.indexOf("`") >= 0){
		str = str.split("`")[0];
	}
	return str;
};

var getType = function(str){
	if(!str){
		return "";
	}
	
	str = sanitizeType(str);
	
	var tok = str.split(".");
	return tok.length ? tok[tok.length - 1] : "";	
	
	//return str;
};
	
var filterJson = function(data){
	var methodBoundariesFilter = function(item){
		return item.EventName == "MethodBoundaryEvent";
	};

	var data = _.filter(data, methodBoundariesFilter);
	
	var labelAdder = function(item){
		var type = getType(item.TypeName);
		var method = item.MethodName;
		item.label = type + "-" + method;
	};
	
	var data = _.each(data, labelAdder);
	
	var sortFunction = function(item1, item2){
		var key1 = item1.PreciseTimeStamp;
		var key2 = item2.PreciseTimeStamp
		if(key1 > key2){
			return 1;			
		}else{
			return -1;
		}
	};
	
	data.sort(sortFunction);

	var groupKeys = {
		start : "start",
		end: "end"
	}
	
	var durationGroupFilter = function(item){
		return (item.DurationMsec == 0) ? groupKeys.start : groupKeys.end;
	};
	
	var grouped = _.groupBy(data, durationGroupFilter);
	
	var starts = grouped[groupKeys.start];
	var ends = grouped[groupKeys.end];
	
	var startDateAdder = function(item){
		item.startDate = item.PreciseTimeStamp;
	}
	
	starts = _.each(starts, startDateAdder);
	
	var labelIndex = function(item){
		return item.label;
	};
	
	var indexedStarts = _.groupBy(starts, labelIndex);
	
	var findStart = function(end){
		var label = end.label;
		
		if(!indexedStarts[label] || !indexedStarts[label].length){
			return;
		}
		
		var matchingStarts = indexedStarts[label];
		
		var first = matchingStarts[0];
		if(first.PreciseTimeStamp > end.PreciseTimeStamp){
			return;
		}
		
		var start = matchingStarts.shift();
		
		start.endDate = end.PreciseTimeStamp;
		return start;		
	};
	
	var mapped = [];
	
	var endMapper = function(end){
		var start = findStart(end);
		if(start){
			mapped.push(start); 
		}
	};
	
	_.each(ends, endMapper);
	
	console.log(mapped);
};

mdsToJson("./mds.csv", filterJson);

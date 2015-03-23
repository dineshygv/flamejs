(function(namespace){

function sortByStartDate(inArray){
	if(inArray.length && inArray.length > 1){
		var sortingFunction = function(obj1, obj2){
			return (obj1.startDate - obj2.startDate);
		};
		
		inArray.sort(sortingFunction);
	}
}

function getDate(dateString){
	if(dateString){
		var dateObj = new Date(dateString);
		if(!isNaN(dateObj.getTime())){
			return dateObj;
		}
	}
	return null;
}

function convertDates(inArray){
	var outArray = [];
	if(inArray.length){
		inArray.forEach(function(item){
			var startDate = getDate(item.startDate);
			var endDate = getDate(item.endDate);
			var label = item.label || "";
			if(startDate && endDate){
				var dataItem = {
					startDate : startDate,
					endDate : endDate,
					label : label,
					inclusiveTime : endDate - startDate
				};
				outArray.push(dataItem);
			}
		});
	}
	return outArray;
}

function isChild(parent, child){
	return (parent.startDate <= child.startDate) &&
			(parent.endDate >= child.endDate);
}

function getTotalTime(arr){
	if(!arr.length){
		return 0;
	}
	
	var sum = 0;
	arr.forEach(function(item){
		sum += item.inclusiveTime;
	});
	return sum;
}

function constructTree(arr){
	if(!arr.length ||arr.length < 2){
		return arr;
	}
	
	var parents = [];
	
	arr.forEach(function(item){
			
		var foundParent = false;
		
		if(parents.length){
			parents.forEach(function(parent){
				if(isChild(parent, item)){
					parent.children.push(item);
					foundParent = true;
					return false;
				}
			});
		}		
		
		if(!foundParent){
			item.children = [];
			parents.push(item);
		}
		
	});
	
	parents.forEach(function(parent){
		if(parent.children.length > 1){
			parent.children = constructTree(parent.children);			
		}
		parent.exclusiveTime = parent.inclusiveTime - getTotalTime(parent.children);
	});
	
	return parents;
}

function makeTree(sampleData){
	var datedArray = convertDates(sampleData);
	sortByStartDate(datedArray);
	var tree = constructTree(datedArray);
	return tree;
}

namespace.makeTree = makeTree;

})(flame);

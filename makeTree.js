(function(namespace){

function sortByStartDate(inArray){
	if(inArray.length && inArray.length > 1){
		var sortingFunction = function(obj1, obj2){
			return (obj1.startDate - obj2.startDate);
		};
		
		inArray.sort(sortingFunction);
	}
}

    function getDateComparison(dateString1, dateString2) {
        var d1 = getDate(dateString1).getTime(),
            d2 = getDate(dateString2).getTime();
        return {
            greater: Math.max(d1, d2),
            smaller: Math.min(d1, d2)
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
            var dates = getDateComparison(item.startDate, item.endDate)
			var label = item.label || "";
            if (dates.greater && dates.smaller && dates.greater !== dates.smaller) {
				var dataItem = {
                    startDate: dates.smaller,
                    endDate: dates.greater,
                    label: label,
                    inclusiveTime: dates.greater - dates.smaller
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

    var sum = 0, currentTime;
    arr.sort(function endTime(a, b) {
        return a.endTime - b.endTime;
    });
    arr.forEach(function (item) {
        if (!currentTime) {
            sum = sum + item.inclusiveTime;
            currentTime = item.inclusiveTime;
        } else if (currentTime < item.endTime) {
            sum += item.endTime - currentTime;
            currentTime = item.endTime;
        }
	});
	return sum;
}

function constructTree(arr){
	if(!arr.length ||arr.length < 2){
		return arr;
	}
	
	var parents = [];

    arr.forEach(function (item, arrIndex) {
			
		var foundParent = false;
		
		if(parents.length){
			parents.forEach(function(parent){

                if(isChild(parent, item)){
                    parent.children.push(item);
                    arr.splice(arrIndex, 1);
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

        if (parent.exclusiveTime < 0) {
            debugger;
        }
	});
	
	return parents;
}

function makeTree(sampleData){
	var datedArray = convertDates(sampleData);
	sortByStartDate(datedArray);
    datedArray.forEach(function (data, index) {
        data.index = index;
    })
	var tree = constructTree(datedArray);
    debugger;
	return tree;
}

namespace.makeTree = makeTree;

})(flame);

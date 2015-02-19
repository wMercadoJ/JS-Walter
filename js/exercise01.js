// Exercise 01

var parameters = 0
var maximumNumber = 0 
var minimumNumber = 9999999999 
var averageNumber = 0
var totalSum = 0
	
function findMaximumNumber(){
	parameters = arguments.length;		
	evaluateMaximumNumber.apply(this, arguments);
	console.log("Maximum Number : "+maximumNumber) 
	resetVariables()
}

function evaluateMaximumNumber(){	
	if (parameters >=0){				
		if(maximumNumber < parseInt(arguments[parameters-1])){					
			maximumNumber = arguments[parameters-1];				
		}
		parameters -=1 ;				
		evaluateMaximumNumber.apply(this, arguments);
	}	
}	

function findMinimumNumber(){
	parameters = arguments.length;		
	evaluateMinimunNumber.apply(this, arguments);
	console.log("Minimum Number : "+minimumNumber) 
	resetVariables()
}

function evaluateMinimunNumber(){	
	if (parameters >=0){				
		if(minimumNumber > parseInt(arguments[parameters-1])){					
			minimumNumber = arguments[parameters-1];				
		}
		parameters -=1 ;				
		evaluateMinimunNumber.apply(this, arguments);
	}	
}

function findAverageNumber(){
	parameters = arguments.length;		
	evaluateTotalSum.apply(this, arguments);
	averageNumber = totalSum / arguments.length;
	console.log("Average of Numbers : "+averageNumber) 
	resetVariables()
}

function evaluateTotalSum(){	
	if (parameters > 0){			
		totalSum = totalSum + arguments[parameters-1];	
		parameters -=1 ;				
		evaluateTotalSum.apply(this, arguments);
		}			
}	

function findTotalSum(){
	parameters = arguments.length;		
	evaluateTotalSum.apply(this, arguments);
	console.log("Sum of Numbers : "+totalSum) 
	resetVariables()
}

function resetVariables(){
	parameters = 0
	maximumNumber = 0 
	minimumNumber = 9999999999 
	averageNumber = 0
	totalSum = 0
}

var doOperations =  function(){
	findMinimumNumber.apply(this, arguments);
	findMaximumNumber.apply(this, arguments);
	findAverageNumber.apply(this, arguments);
	findTotalSum.apply(this, arguments);
};

/** Functions to find the following operations of N arguments: 
 *  - Maximum
 *  - Minimum
 *  - Average
 *  - Total Sum
 */

var numberArgument = 0;
var maximumNumber = 0;
var minimumNumber = 9999999999; 
var averageNumber = 0;
var totalSum = 0;

/** Function to find a Maximum number of N arguments */
function findMaximumNumber(){
	numberArgument = arguments.length;		
	evaluateMaximumNumber.apply(this, arguments);
	console.log("Maximum Number : " + maximumNumber);
	resetVariables();
}

/** Function to evaluate if next argument is the maximum */
function evaluateMaximumNumber(){	
	if (numberArgument >= 0){				
		if(maximumNumber < parseInt(arguments[numberArgument - 1])){					
			maximumNumber = arguments[numberArgument - 1];				
		}
		numberArgument -= 1;				
		evaluateMaximumNumber.apply(this, arguments);
	}	
}	

/** Function to find a Minimum number of N arguments */
function findMinimumNumber(){
	numberArgument = arguments.length;		
	evaluateMinimunNumber.apply(this, arguments);
	console.log("Minimum Number : " + minimumNumber);
	resetVariables();
}

/** Function to evaluate if next argument is the minimum */
function evaluateMinimunNumber(){	
	if (numberArgument >= 0){				
		if(minimumNumber > parseInt(arguments[numberArgument - 1])){					
			minimumNumber = arguments[numberArgument - 1];				
		}
		numberArgument -= 1 ;				
		evaluateMinimunNumber.apply(this, arguments);
	}	
}

/** Function to find the Average of N arguments */
function findAverageNumber(){
	numberArgument = arguments.length;		
	evaluateTotalSum.apply(this, arguments);
	averageNumber = totalSum / arguments.length;
	console.log("Average of Numbers : " + averageNumber);
	resetVariables();
}

/** Function to Sum N arguments */
function evaluateTotalSum(){	
	if (numberArgument > 0){			
		totalSum = totalSum + arguments[numberArgument - 1];	
		numberArgument -= 1 ;				
		evaluateTotalSum.apply(this, arguments);
		}			
}	

/** Function to find the Total Sum of N arguments */
function findTotalSum(){
	numberArgument = arguments.length;		
	evaluateTotalSum.apply(this, arguments);
	console.log("Sum of Numbers : " + totalSum);
	resetVariables();
}

/** Function to reset the variables */
function resetVariables(){
	numberArgument = 0;
	maximumNumber = 0;
	minimumNumber = 9999999999 ;
	averageNumber = 0;
	totalSum = 0;
}

/** Function to all the operations using N arguments */
var doOperations =  function(){
	findMinimumNumber.apply(this, arguments);
	findMaximumNumber.apply(this, arguments);
	findAverageNumber.apply(this, arguments);
	findTotalSum.apply(this, arguments);
};

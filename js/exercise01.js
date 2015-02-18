// session-02

var sayHello = function(name){
   console.log('Hello ' + name + '!!!');
}

// Vars and context
// var age = '';

function calculateAge(bornYear) {
	var age = 2014 - bornYear;
	return age;
}

var doOperations =  function(){
	//console.log('MIN value is: ' + getMin(arguments));
	//console.log('MAX value is: ' + getMax(arguments));
	//console.log('AVERAGE value is: ' + getAvg(arguments));
	console.log('TOTAL value is: ' + sum(arguments));

};
var sum =  function(nums, pos){
	
	if (pos == undefined)
		pos = nums.length - 1
		
	if (pos == 0)
		return nums[0];
	
	return nums[pos] + sum(nums, pos - 1);
};
var getMin =  function(nums, currMin, pos){
	if (pos == undefined)
		pos = nums.length - 1
		
	if (currMin == undefined)
		currMin = nums[pos]
		
	if (currMin > nums[pos])
		currMin = nums[pos]
	
	if (pos == 0)
		return currMin;
	
	return getMin(nums, currMin, pos - 1);
};

var getMax =  function(nums){};
var getAvg =  function(nums){};
// main.js
console.log('Hello, I am MAIN.JS');

var smartApp = function() {
	var name = window.prompt('What\'s your name?');
	var age = window.prompt('What\'s your age?');

	try {
		age = parseInt(age);
	}
	catch(e) {
		console.log('Valor no valido') 		
	}
	
	if (age > 30)
		console.log('Hey ' + name + '! you are an old people!');
	else
		console.log('Hey ' + name + '! you are lucky ... still young people!');
}
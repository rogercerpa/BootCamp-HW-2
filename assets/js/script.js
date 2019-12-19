alert('Hello! welcome to this Super cool password generator');

var passwordgenerator = confirm(
	'Would you like to generate a strong password?'
);

if (passwordgenerator) {
	var passwordlenght = prompt(
		'How many characters would you like your password to have?'
	);

	var uppercaseinput = confirm(
		'Would you like upper case letters included in your password?'
	);

	var lowercaseinput = confirm(
		'Would you like lower case letters included in your password?'
	);

	var numberinput = confirm(
		'Would you like numbers included in your password?'
	);

	var symbolsinput = confirm(
		'would you like symbols included in your password?'
	);
} else {
	alert('bye bye! have a nice day');
}

// var randomUppercase = [
// 	'A',
// 	'B',
// 	'C',
// 	'D',
// 	'E',
// 	'F',
// 	'G',
// 	'H',
// 	'I',
// 	'J',
// 	'K',
// 	'L',
// 	'M',
// 	'N',
// 	'O',
// 	'P',
// 	'Q',
// 	'R',
// 	'S',
// 	'T',
// 	'U',
// 	'V',
// 	'W',
// 	'X',
// 	'Y',
// 	'Z'
// ];

// var lowercase = uppercase.toLowerCase();

// var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

//button generate password

function generatefunction() {}

function randomLowercase() {
	return String.fromLowercase(Math.floor(Math.random()));
}
// console.log(randomLowercase);

function randomUppercase() {
	return String.fromrandomUppercase(Math.floor(Math.random() * 26));
}
console.log(randomUppercase);

function randomNumber() {
	return String.fromNumber(Math.floor(Math.random()));
}
function randomSymbol() {
	return String.fromSymbol(Math.floor(Math.random()));
}

//button copy to clipboard

var copytoclipboard = document.getElementById('copytoclipboard');
var Generatorresults = document.getElementById('Generatorresults');

copytoclipboard.onclick = function() {
	Generatorresults.select();
	document.execCommand('Copy');
};

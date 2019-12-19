alert('Hello! welcome to this Super cool password generator');

function generatefunction() {
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

	//button generate password

	var randomcharacter =
		'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm!@#$%^&*~`,.<>?';

	var password = '';

	for (var i = 0; i <= passwordlenght; i++) {
		password =
			password +
			randomcharacter.charAt(
				Math.floor(Math.random() * Math.floor(randomcharacter.length - 1))
			);
	}

	document.getElementById('Generatorresults').value = password;
}
//button copy to clipboard

var copytoclipboard = document.getElementById('copytoclipboard');
var Generatorresults = document.getElementById('Generatorresults');

copytoclipboard.onclick = function() {
	Generatorresults.select();
	document.execCommand('Copy');
};

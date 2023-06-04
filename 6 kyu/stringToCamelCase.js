// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
	let newText = str.split(/[-_]/);

	let newPhrase = '';

	newText.map((phrase, index) => {
		newText[index] =
			(index == 0 ? phrase.charAt(0) : phrase.charAt(0).toUpperCase()) + phrase.substr(1).toLowerCase();
	});

	return newText.join('');
}

console.log(toCamelCase('to_camel-case'));
console.log(toCamelCase('TO-CAMEL-CASE'));
console.log(toCamelCase('TO_caMEl_case'));
console.log(toCamelCase('to-Camel-Case'));

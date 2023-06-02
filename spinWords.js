// function spinWords(string) {
// 	let newString = string.split(' ');

// 	newString.map((word, index) => {
// 		if (word.length > 4) {
// 			newString[index] = word.split('').reverse().join('');
// 		}
// 	});

// 	return newString.join(' ');
// }

function spinWords(string) {
	return string
		.split(' ')
		.map((word) => {
			return word.length > 4 ? word.split('').reverse().join('') : word;
		})
		.join(' ');
}

console.log(spinWords('hey 12345 onibus'));

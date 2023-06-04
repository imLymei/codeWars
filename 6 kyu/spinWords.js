// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
	return string
		.split(' ')
		.map((word) => {
			return word.length > 4 ? word.split('').reverse().join('') : word;
		})
		.join(' ');
}

console.log(spinWords('hey 12345 onibus'));

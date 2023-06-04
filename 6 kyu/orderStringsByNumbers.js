// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
	return words //                        finds the number inside the string
		.split(' ') //                                   \/
		.reduce((ordered, word) => ((ordered[word.match(/\d/) - 1] = word), ordered), [])
		.join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

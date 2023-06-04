// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
	return cc
		.split('')
		.map((letter, index) => {
			return index < cc.length - 4 ? '#' : letter;
		})
		.join('');
}

console.log(maskify('nananananan Batman!'));

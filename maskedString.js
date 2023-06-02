function maskify(cc) {
	return cc
		.split('')
		.map((letter, index) => {
			return index < cc.length - 4 ? '#' : letter;
		})
		.join('');
}

console.log(maskify('nananananan Batman!'));

function wave(str) {
	let response = [];

	str
		.toUpperCase()
		.split('')
		.map((letter, index) => {
			if (/[A-Z]/.test(letter)) {
				response.push(str.slice(0, index) + letter.toUpperCase() + str.slice(index + 1));
			}
		});

	return response;
}

console.log(wave('hello kevyn'));

function squareDigits(num) {
	return parseInt(
		num
			.toString()
			.split('')
			.map((number) => {
				return number * number;
			})
			.join('')
	);
}

console.log(squareDigits(123));

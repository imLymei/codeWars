// https://www.codewars.com/kata/546e2562b03326a88e000020

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

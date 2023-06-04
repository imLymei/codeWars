// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
	const result =
		n
			.toString()
			.split('')
			.reduce((previous, number, index) => number ** (p + index) + previous, 0) / n;

	return result % 1 == 0 ? result : -1;
}

console.log(digPow(51, 1));

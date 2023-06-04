// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
	let allChars = {};

	string.split('').map((data) => {
		allChars[data] ? (allChars[data] += 1) : (allChars[data] = 1);
	});

	return allChars;
}

console.log(count('aba'));

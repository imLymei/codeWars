// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
	return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}

console.log(
	openOrSenior([
		[18, 20],
		[45, 2],
		[61, 12],
		[37, 6],
		[21, 21],
		[78, 9],
	])
);

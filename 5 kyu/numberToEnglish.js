// https://www.codewars.com/kata/5463c8db865001c1710003b2

// const numberToEnglish = (n) => {
// 	try {
// 		let tempN = n.toString().split('');

// 		const numbersMap = [
// 			['zero', 'ten'],
// 			['one', 'eleven'],
// 			['two', 'twelve', 'twenty'],
// 			['three', 'thirteen', 'thirty'],
// 			['four', 'fourteen', 'forty'],
// 			['five', 'fifteen', 'fifty'],
// 			['six', 'sixteen', 'sixty'],
// 			['seven', 'seventeen', 'seventy'],
// 			['eight', 'eighteen', 'eighty'],
// 			['nine', 'nineteen', 'ninety'],
// 			['hundred', 'thousand'],
// 		];

// 		let response = [];

// 		function printOne(number) {
// 			response.push(numbersMap[number][0]);
// 		}

// 		function printTen(number, index) {
// 			if (number != '0') {
// 				if (number == '1') {
// 					response.push(numbersMap[tempN[index + 1]][1]);
// 				} else {
// 					response.push(numbersMap[number][2]);
// 				}
// 			}
// 		}

// 		function printHundred(number) {
// 			if (number != 0) {
// 				response.push(numbersMap[number][0]);
// 				response.push(numbersMap[10][0]);
// 			}
// 		}

// 		tempN.map((number, index) => {
// 			switch (tempN.length) {
// 				case 1:
// 					printOne(number);
// 					break;
// 				case 2:
// 					if (index == 0) {
// 						printTen(number, index);
// 					} else {
// 						if (number != '0' && tempN[index - 1] != '1') {
// 							printOne(number);
// 						}
// 					}
// 					break;
// 				case 3:
// 					if (index == 0) {
// 						printHundred(number);
// 					} else if (index == 1) {
// 						printTen(number, index);
// 					} else {
// 						if (number != '0' && tempN[index - 1] != '1') {
// 							printOne(number);
// 						}
// 					}
// 					break;
// 				case 4:
// 					if (index == 0) {
// 						response.push(numbersMap[number][0]);
// 						response.push(numbersMap[10][1]);
// 					} else if (index == 1) {
// 						printHundred(number);
// 					} else if (index == 2) {
// 						printTen(number, index);
// 					} else {
// 						if (number != '0' && tempN[index - 1] != '1') {
// 							printOne(number);
// 						}
// 					}
// 					break;
// 				case 5:
// 					if (index == 0) {
// 						printTen(number, index);
// 					} else if (index == 1) {
// 						if (number != '0' && tempN[index - 1] != '1') {
// 							printOne(number);
// 						}
// 						response.push(numbersMap[10][1]);
// 					} else if (index == 2) {
// 						printHundred(number);
// 					} else if (index == 3) {
// 						printTen(number, index);
// 					} else {
// 						if (number != '0' && tempN[index - 1] != '1') {
// 							printOne(number);
// 						}
// 					}
// 					break;
// 				default:
// 					response.push('');
// 			}
// 		});

// 		return response.join(' ');
// 	} catch (error) {
// 		return '';
// 	}
// };

// \/ Better version \/

const numberToEnglish = (num) => {
	//  Not a positive full number
	if (num % 1 !== 0 || num < 0) return '';

	const ones = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	};
	const tens = {
		2: 'twenty',
		3: 'thirty',
		4: 'forty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety',
	};

	const operations = [
		{
			check: (n) => n < 20,
			make: (n) => ones[n],
		},
		{
			check: (n) => n < 100,
			make: (n) => `${tens[n[0]]}${n[1] == 0 ? '' : ` ${ones[n[1]]}`}`,
		},
		{
			check: (n) => n < 1000,
			make: (n) =>
				`${ones[n[0]]} ${n % 100 == 0 ? 'hundred' : `hundred ${numberToEnglish(Number(n.slice(1)))}`}`,
		},
		{
			check: (n) => true,
			make: (n) =>
				`${numberToEnglish(n.slice(0, n.length - 3))} ${
					n % 1000 == 0 ? 'thousand' : `thousand ${numberToEnglish(Number(n.slice(-3)))}`
				}`,
		},
	];

	const obj = operations.find(({ check }) => check(num));
	return obj.make(num.toString());
};

console.log(numberToEnglish(902));

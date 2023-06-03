// https://www.codewars.com/kata/5463c8db865001c1710003b2

const numberToEnglish = (n) => {
	try {
		let tempN = n.toString().split('');

		const numbersMap = [
			['zero', 'ten'],
			['one', 'eleven'],
			['two', 'twelve', 'twenty'],
			['three', 'thirteen', 'thirty'],
			['four', 'fourteen', 'forty'],
			['five', 'fifteen', 'fifty'],
			['six', 'sixteen', 'sixty'],
			['seven', 'seventeen', 'seventy'],
			['eight', 'eighteen', 'eighty'],
			['nine', 'nineteen', 'ninety'],
			['hundred', 'thousand'],
		];

		let response = [];

		function printOne(number) {
			response.push(numbersMap[number][0]);
		}

		function printTen(number, index) {
			if (number != '0') {
				if (number == '1') {
					response.push(numbersMap[tempN[index + 1]][1]);
				} else {
					response.push(numbersMap[number][2]);
				}
			}
		}

		function printHundred(number) {
			if (number != 0) {
				response.push(numbersMap[number][0]);
				response.push(numbersMap[10][0]);
			}
		}

		tempN.map((number, index) => {
			switch (tempN.length) {
				case 1:
					printOne(number);
					break;
				case 2:
					if (index == 0) {
						printTen(number, index);
					} else {
						if (number != '0' && tempN[index - 1] != '1') {
							printOne(number);
						}
					}
					break;
				case 3:
					if (index == 0) {
						printHundred(number);
					} else if (index == 1) {
						printTen(number, index);
					} else {
						if (number != '0' && tempN[index - 1] != '1') {
							printOne(number);
						}
					}
					break;
				case 4:
					if (index == 0) {
						response.push(numbersMap[number][0]);
						response.push(numbersMap[10][1]);
					} else if (index == 1) {
						printHundred(number);
					} else if (index == 2) {
						printTen(number, index);
					} else {
						if (number != '0' && tempN[index - 1] != '1') {
							printOne(number);
						}
					}
					break;
				case 5:
					if (index == 0) {
						printTen(number, index);
					} else if (index == 1) {
						if (number != '0' && tempN[index - 1] != '1') {
							printOne(number);
						}
						response.push(numbersMap[10][1]);
					} else if (index == 2) {
						printHundred(number);
					} else if (index == 3) {
						printTen(number, index);
					} else {
						if (number != '0' && tempN[index - 1] != '1') {
							printOne(number);
						}
					}
					break;
				default:
					response.push('');
			}
		});

		return response.join(' ');
	} catch (error) {
		return '';
	}
};

for (let i = 0; i < 10000; i++) {
	numberToEnglish(12412);
}

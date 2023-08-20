function solution(list) {
	let counter = 1;

	let response = [];

	list.forEach((number, index) => {
		const lastNumber = list[index - 1];
		const isSequence = number === lastNumber + 1;

		if (isSequence) {
			counter++;
		} else {
			if (counter >= 3) response[response.length - 1] += `-${lastNumber}`;

			counter = 1;
		}

		if (counter < 3) {
			response.push(number);
		} else {
			if (counter === 3) {
				response.pop();
			}
			if (index === list.length - 1) response[response.length - 1] += `-${number}`;
		}
	});

	return response.join(',');
}

console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]));

function sumIntervals(intervals) {
	let result = 0;
	let counted = [];

	console.log('inicial:', intervals);

	intervals.forEach((array) => {
		console.log('');
		console.log(array);
		console.log('Counted:', counted);

		const between = counted.filter(
			(otherArray) =>
				(otherArray[1] >= array[0] && array[0] >= otherArray[0]) ||
				(otherArray[1] >= array[1] && array[1] >= otherArray[0])
		);

		console.log('Between:', between);

		let myResult = array[1] - array[0];
		if (between.length == 0) {
			result += myResult;
			counted.push(array);
		} else {
			between.forEach((compareArray, index) => {
				let isBetween = true;

				if (compareArray[0] >= array[0]) {
					console.log(`${array[0]} esta antes de ${compareArray[0]}`);
					myResult = compareArray[0] - array[0];
					console.log(`Novo resultado e igual a : ${myResult}`);
					compareArray[0] = array[0];
					result += myResult;
					isBetween = false;
				}
				if (compareArray[1] <= array[1]) {
					console.log(`${array[1]} esta depois de ${compareArray[1]}`);
					myResult = array[1] - compareArray[1];
					console.log(`Novo resultado e igual a : ${myResult}`);
					compareArray[1] = array[1];
					isBetween = false;

					result += myResult;
				}
				if (isBetween) {
					myResult = 0;
					console.log(`${array} esta no meio de ${compareArray}`);
					console.log(`Novo resultado e igual a : ${myResult}`);
				}
			});
		}
		console.log('Meu resultado:', myResult);
	});

	console.log('final:', counted);

	return result;
}

//7
console.log(
	sumIntervals([
		[1, 5],
		[10, 20],
		[1, 6],
		[16, 19],
		[5, 11],
	])
);

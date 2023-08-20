function sumIntervals(intervals) {
	let finalArray = [];
	let blockList = [];

	intervals.forEach((data, index) => {
		if (!blockList.includes(data)) {
			let newArray = data;
			const between = intervals.filter(
				(data) =>
					((data[1] >= newArray[0] && data[1] <= newArray[1]) ||
						(data[0] >= newArray[0] && data[0] <= newArray[1])) &&
					data != newArray
			);

			between.forEach((CompareArray) => {
				if (CompareArray[0] <= newArray[0]) {
					newArray[0] = CompareArray[0];
				}
				if (CompareArray[1] >= newArray[1]) {
					newArray[1] = CompareArray[1];
				}
				blockList.push(CompareArray);
				if (finalArray.includes(CompareArray)) {
					finalArray = finalArray.filter((data) => data != CompareArray);
				}
			});
			finalArray.push(newArray);
		}
	});
	finalArray.forEach((actualArray, index) => {
		let between = [];

		between = finalArray.filter(
			(data) =>
				((data[1] >= actualArray[0] && data[1] <= actualArray[1]) ||
					(data[0] >= actualArray[0] && data[0] <= actualArray[1])) &&
				data != actualArray
		);

		between.forEach((CompareArray) => {
			if (finalArray.includes(actualArray)) {
				if (CompareArray[0] <= actualArray[0]) {
					actualArray[0] = CompareArray[0];
				}
				if (CompareArray[1] >= actualArray[1]) {
					actualArray[1] = CompareArray[1];
				}
				if (finalArray.includes(CompareArray)) {
					finalArray = finalArray.filter((data) => data != CompareArray);
				}
			} else {
				if (CompareArray[0] > actualArray[0] && CompareArray[1] < actualArray[1]) {
					if (finalArray.includes(CompareArray)) {
						finalArray = finalArray.filter((data) => data != CompareArray);
					}
				}
			}
		});
		between = [];
	});

	const result = finalArray.reduce(
		(previous, actualArray) => previous + (actualArray[1] - actualArray[0]),
		0
	);

	return result;
}

//7
console.log(
	sumIntervals([
		[1, 3],
		[2, 5],
	])
);

// [11, 21],
// [-16, -6],
// [1, 6],
// [-2, 4],
// [2, 8],
// [12, 20],
// [7, 8],
// [-7, -2],
// [5, 9],
// [20, 30],

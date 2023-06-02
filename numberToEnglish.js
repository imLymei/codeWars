const numberToEnglish = (n) => {
	let tempN = n.toString().split('');

	const numbersMap = [
		'zero',
		['one', 'ten', 'eleven'],
		['two', 'twelve', 'twenty'],
		['three', 'thirteen', 'thirty'],
		['four', 'fourteen', 'fourty'],
		['five', 'fifteen', 'fifty'],
		['six', 'sixteen', 'sixty'],
		['seven', 'seventeen', 'seventy'],
		['eight', 'eighteen', 'eighty'],
		['nine', 'nineteen', 'ninety'],
		['hundred', 'thousand'],
	];

	tempN.map((number, index) => {
		if (number == '0' && tempN.length == 0) {
			console.log('zero');
		}
		return number;
	});
};

numberToEnglish(0);

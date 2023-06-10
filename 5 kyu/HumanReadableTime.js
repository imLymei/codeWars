function humanReadable(seconds) {
	const realSeconds = seconds % 60;
	const minutes = Math.floor(seconds / 60) % 60;
	const hours = Math.floor(seconds / 3600);

	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${realSeconds
		.toString()
		.padStart(2, '0')}`;
}

console.log(humanReadable(42352));

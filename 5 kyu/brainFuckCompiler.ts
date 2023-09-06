//https://www.codewars.com/kata/526156943dfe7ce06200063e/train/typescript

export function brainLuck(code: string, input: string) {
	let output = '';

	const realCode = code.split('');
	const realInput = input.split('').map((str) => str.charCodeAt(0));

	let memory: number[] = Array.from({ length: 10000 }).map(() => 0);
	let loopState: 'default' | 'jump' | 'loop' = 'default';
	let previousLoopPoints: number[] = [];

	let dataPointer = 0;
	let commandPointer = 0;

	const compiler: { [key: string]: () => void } = {
		'>': () => {
			const nextPointer = dataPointer + 1;
			console.log(`Avançou na memoria: ${dataPointer} -> ${nextPointer}`);
			dataPointer = nextPointer;
		},
		'<': () => {
			const nextPointer = dataPointer > 0 ? dataPointer - 1 : 0;
			console.log(`Voltou na memoria: ${dataPointer} -> ${nextPointer}`);
			dataPointer = nextPointer;
		},
		'+': () => {
			const nextValue = memory[dataPointer] + 1 > 255 ? 0 : memory[dataPointer] + 1;
			console.log(`Aumentou o byte: ${memory[dataPointer]} -> ${nextValue}`);
			memory[dataPointer] = nextValue;
		},
		'-': () => {
			const nextValue = memory[dataPointer] - 1 < 0 ? 255 : memory[dataPointer] - 1;
			console.log(`Diminuiu o byte: ${memory[dataPointer]} -> ${nextValue}`);
			memory[dataPointer] = nextValue;
		},
		'.': () => {
			const data = String.fromCharCode(memory[dataPointer]);
			output += data !== '\x00' ? data : ' ';
			console.log(`Mostrou: ${data !== '\x00' ? String.fromCharCode(memory[dataPointer]) : ' '}`);
		},
		',': () => {
			const data = realInput.shift() ?? 0;
			memory[dataPointer] = data;
			console.log(`Recebeu: ${data}`);
		},
		'[': () => {
			if (memory[dataPointer] === 0) {
				console.log('Indo para o proximo ]');
				loopState = 'jump';
			} else {
				console.log('Salvando [ em', commandPointer);
				previousLoopPoints.push(commandPointer);
				loopState = 'default';
			}
		},
		']': () => {
			if (memory[dataPointer] !== 0) {
				const previousPoint = previousLoopPoints[previousLoopPoints.length - 1];
				console.log('Voltando para ultimo [ em', previousPoint);
				loopState = 'loop';
				commandPointer = previousPoint ?? commandPointer;
			} else {
				previousLoopPoints.pop();
				loopState = 'default';
			}
		},
	};

	while (commandPointer < realCode.length) {
		const command = realCode[commandPointer];

		//@ts-ignore
		if (loopState !== 'jump' || (loopState === 'jump' && command === ']')) compiler[command]();

		commandPointer++;
	}

	console.log(`Code: ${code} | Input: ${input} | Output: ${output}`);
	return output;
}

console.log(brainLuck(',[.->+<[-]]', 'c'));

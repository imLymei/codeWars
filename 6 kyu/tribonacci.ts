function tribonacci(arr: [number, number, number], n: number): number[] {
	for (let i = 0; arr.length < n; i++) arr.push(arr[i] + arr[i + 1] + arr[i + 2]);

	return arr.slice(0, n);
}

console.log(tribonacci([0, 0, 1], 0));
console.log(tribonacci([0, 0, 1], 1));
console.log(tribonacci([0, 0, 1], 2));
console.log(tribonacci([0, 0, 1], 3));
console.log(tribonacci([0, 0, 1], 4));

function isIsogram(str: string): boolean {
	return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram('abcdefGg'));

class Kata {
	static dnaStrand(dna: string) {
		const complementary: { [key: string]: string } = { A: 'T', T: 'A', C: 'G', G: 'C' };

		return dna.split('').reduce((prev, actual) => prev + complementary[actual], '');
	}

	static dnaStrandMin(dna: string) {
		return dna.replace(/[ATCG]/g, (char) => 'ATCG'['TACG'.indexOf(char)]);
	}
}

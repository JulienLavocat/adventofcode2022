import assert from "assert";

const UTF_CAPS_OFFSET = 64;
const UTF_MINS_OFFSET = 96;

export function alphabetPositions(text: string) {
	// [a-z] -> [97, 122]
	// [A-2] -> [65, 90]
	return text.split("").map((letter) => {
		const code = letter.charCodeAt(0);
		return code > 90 ? code - UTF_MINS_OFFSET : code - UTF_CAPS_OFFSET + 26;
	});
}

export function parseRuckacks(input: string[]): [string, string][] {
	return input.map((line, i) => {
		const half = line.length / 2;
		assert(
			Number.isInteger(half),
			`Unexpected line with no integer half: #${i} ${line} - ${half}`
		);
		return [line.slice(0, half), line.slice(half)];
	});
}

export function findCommonItems([compartment1, compartment2]: [
	string,
	string
]) {
	const itemsInCompartment2 = new Set([...compartment2]);
	const duplicates: Record<string, number> = {};
	compartment1.split("").forEach((item) => {
		if (itemsInCompartment2.has(item)) {
			if (duplicates[item]) duplicates[item]++;
			else duplicates[item] = 1;
		}
	});

	return duplicates;
}

export function part1(input: string[]) {
	const rucksacks = parseRuckacks(input).map((rucksack) =>
		Object.keys(findCommonItems(rucksack))
	);
	return alphabetPositions(rucksacks.flat().join("")).reduce(
		(acc, next) => (acc += next)
	);
}

export function part2(input: string[]): number {
	const groups = [];

	const groupCardsLetter: string[] = [];
	// Chunk array by groups of 3
	for (let i = 0; i < input.length; i += 3) {
		const group = input.slice(i, i + 3);
		assert(group.length === 3);

		const letters: Set<string>[] = [
			new Set([...group[0]]),
			new Set([...group[1]]),
			new Set([...group[2]]),
		];

		for (const letter of letters[0]) {
			if (letters.every((lettersSet) => lettersSet.has(letter)))
				groupCardsLetter.push(letter);
		}
	}

	return alphabetPositions(groupCardsLetter.join("")).reduce(
		(acc, next) => (acc += next)
	);
}

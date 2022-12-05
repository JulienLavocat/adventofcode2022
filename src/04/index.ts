import assert from "assert";

export class Assignment {
	constructor(public readonly lower: number, public readonly upper: number) {}

	includes(other: Assignment) {
		return other.lower >= this.lower && other.upper <= this.upper;
	}

	partiallyOverlap(other: Assignment) {
		const section = new Set<number>();

		for (let i = other.lower; i !== other.upper + 1; i++) {
			section.add(i);
		}

		for (let i = this.lower; i !== this.upper + 1; i++) {
			if (section.has(i)) return true;
		}

		return false;
	}
}

export function parseAssignmentsPairs(
	input: string[]
): [Assignment, Assignment][] {
	return input.map(
		(line) =>
			line.split(",").map((assignment) => {
				const pairs = assignment.split("-");
				assert(
					pairs.length === 2 &&
						parseInt(pairs[0], 10) <= parseInt(pairs[1], 10),
					"LINE: " + assignment
				);
				return new Assignment(parseInt(pairs[0]), parseInt(pairs[1]));
			}) as [Assignment, Assignment]
	);
}

export function part1(input: string[]) {
	return parseAssignmentsPairs(input).filter(
		([a, b]) => a.includes(b) || b.includes(a)
	).length;
}

export function part2(input: string[]) {
	const res = parseAssignmentsPairs(input).filter(([a, b]) =>
		a.partiallyOverlap(b)
	);
	return res;
}

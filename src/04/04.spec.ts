import { Assignment, parseAssignmentsPairs, part1, part2 } from ".";
import { loadSample } from "../utils/file";

describe("DAY 04", () => {
	test("Parse assignments", () => {
		const assignmentsPairs = parseAssignmentsPairs(loadSample(4));
		expect(assignmentsPairs).toHaveLength(6);
		assignmentsPairs.forEach((pairs) => {
			expect(pairs).toHaveLength(2);
			pairs.forEach((pair) => expect(pair.lower <= pair.upper).toBe(true));
		});
	});

	test("Assignment > includes()", () => {
		const assignments = parseAssignmentsPairs(loadSample(4)).filter(
			([a, b]) => a.includes(b) || b.includes(a)
		);

		const expected = [
			[new Assignment(2, 8), new Assignment(3, 7)],
			[new Assignment(6, 6), new Assignment(4, 6)],
		];
		expect(assignments).toEqual(expected);
	});

	test("PART 1", () => {
		const result = part1(loadSample(4));
		expect(result).toBe(2);
	});

	test("PART 2", () => {
		const result = part2(loadSample(4));

		const expected = [
			[new Assignment(5, 7), new Assignment(7, 9)],
			[new Assignment(2, 8), new Assignment(3, 7)],
			[new Assignment(6, 6), new Assignment(4, 6)],
			[new Assignment(2, 6), new Assignment(4, 8)],
		];

		expect(result).toEqual(expected);
	});
});

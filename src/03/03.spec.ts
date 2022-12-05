import {
	parseRuckacks,
	findCommonItems,
	part1,
	alphabetPositions,
	part2,
} from ".";
import { loadSample } from "../utils/file";

describe("DAY 03", () => {
	test("Parse compartments", () => {
		const rucksacks = parseRuckacks(loadSample(3));
		expect(rucksacks).toHaveLength(6);
		rucksacks.forEach((compartment) => {
			expect(compartment).toHaveLength(2);
			expect(compartment[0].length).toBe(compartment[1].length);
		});
	});

	test("Diff 1 compartments", () => {
		const rucksacks = [
			...parseRuckacks(loadSample(3)),
			["uuu", "uuu"] as [string, string],
		];

		const expectedDiff = [
			{ p: 1 },
			{ L: 2 },
			{ P: 2 },
			{ v: 2 },
			{ t: 3 },
			{ s: 3 },
			{ u: 3 },
		];

		rucksacks.forEach((rucksack, i) => {
			const diff = findCommonItems(rucksack);
			expect(diff).toEqual(expectedDiff[i]);
		});
	});

	test("Alphabetical positions", () => {
		const text = ["p", "L", "P", "v", "t", "s"].join("");
		const expected = [16, 38, 42, 22, 20, 19];
		expect(alphabetPositions(text)).toEqual(expected);
	});

	test("PART 1", () => {
		expect(part1(loadSample(3))).toBe(157);
	});

	test("PART 2", () => {
		expect(part2(loadSample(3))).toBe(70);
	});
});

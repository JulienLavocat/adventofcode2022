import { readFileSync } from "fs";
import { day01 } from ".";
import { loadSample } from "../utils/file";

describe("DAY 01", () => {
	const sample = loadSample(1);

	test("Part 1", () => {
		expect(day01(sample).part1).toBe(24000);
	});

	test("Part 2", () => {
		expect(day01(sample).part2).toBe(45000);
	});
});

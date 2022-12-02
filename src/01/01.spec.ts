import { readFileSync } from "fs";
import day01 from ".";

describe("DAY 01", () => {
	const sample = readFileSync("./inputs/01/sample.txt").toString("utf-8");

	test("Part 1", () => {
		expect(day01(sample).part1).toBe(24000);
	});

	test("Part 2", () => {
		expect(day01(sample).part2).toBe(45000);
	});
});

import { readFileSync } from "fs";
import { config } from "process";
import { loadInput } from "../utils/file";

/**
 * This solution uses a first for-loop to parse input values and incrementing the current
 * elf calories count, skiping to the next elf every empty line.
 * then it sort them in ascending order to extract the first 3 values
 */

export function day01(data?: string[]) {
	if (!data) data = loadInput(1);

	const calories: number[] = [];
	let elfIndex = 0;
	data.forEach((line) => {
		if (!line) {
			elfIndex++;
			return;
		}

		if (calories[elfIndex]) calories[elfIndex] += parseInt(line, 10);
		else calories[elfIndex] = parseInt(line, 10);
	});

	calories.sort((a, b) => b - a);
	const top3Calories = calories.slice(0, 3).reduce((a, b) => (a += b));

	return { part1: calories[0], part2: top3Calories };
}

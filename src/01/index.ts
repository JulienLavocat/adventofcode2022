import { readFileSync } from "fs";

/**
 * This solution uses a first for-loop to parse input values and incrementing the current
 * elf calories count, skiping to the next elf every empty line.
 * then it sort them in ascending order to extract the first 3 values
 */

const input = readFileSync("./src/01/input.txt").toString("utf-8");

const calories: number[] = [];
let elfIndex = 0;
input.split("\n").forEach((line) => {
	if (!line) {
		elfIndex++;
		return;
	}

	if (calories[elfIndex]) calories[elfIndex] += parseInt(line, 10);
	else calories[elfIndex] = parseInt(line, 10);
});

calories.sort((a, b) => b - a);

const top3Calories = calories.slice(0, 3).reduce((a, b) => (a += b));

console.log("PART 1:", calories[0]);
console.log("PART 2:", top3Calories);

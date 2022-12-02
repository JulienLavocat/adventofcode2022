import { readFileSync } from "fs";

export function loadSample(day: number) {
	return loadFile(day, "sample");
}

export function loadInput(day: number) {
	return loadFile(day, "input");
}

export function loadFile(day: number, type: string) {
	return readFileSync(
		`./inputs/${day.toString().padStart(2, "0")}/${type}.txt`
	).toString("utf8");
}

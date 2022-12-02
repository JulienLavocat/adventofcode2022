import { parseStrategyGuide, part1, part2, playGame } from ".";
import { loadFile, loadSample } from "../utils/file";

describe("DAY 02", () => {
	test("Parse strategy guide", () => {
		const guide = parseStrategyGuide(loadSample(2));
		expect(guide).toHaveLength(3);
		guide.forEach((round) => expect(round).toHaveLength(2));
	});

	test("Play game", () => {
		const guide = parseStrategyGuide(loadSample(2));
		const game = playGame(guide);
		expect(game).toEqual([8, 1, 6]);
	});

	test("Outcome table", () => {
		const guide = parseStrategyGuide(loadFile(2, "all_outcomes"));
		const game = playGame(guide);
		expect(game).toEqual([4, 8, 3, 1, 5, 9, 7, 2, 6]);
	});

	test("PART 1", () => {
		expect(part1(loadSample(2))).toBe(15);
	});

	test("PART 2", () => {
		expect(part2(loadSample(2))).toBe(12);
	});
});

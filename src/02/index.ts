import { loadInput } from "../utils/file";

// Win, Loose, Draw
const D = 3;
const L = 0;
const W = 6;

const moves = ["X", "Y", "Z"];

// Represents: moveOutcome index, points earned by move
const movesData: Record<string, [number, number]> = {
	A: [0, 0],
	B: [1, 0],
	C: [2, 0],

	X: [0, 1],
	Y: [1, 2],
	Z: [2, 3],
};

// Represents: which move should be played after the oponent in order to have the desired outcome
// [0][0] -> Opponent played R (0), I want to loose (0) so I play S
// [1][1] -> Opponent played P (1), I want to draw  (1) so I play P
// [2][2] -> Opponent played S (2), I want to  win  (2) so I play R
const movesByOutcomes: number[][] = [
	[2, 0, 1],
	[0, 1, 2],
	[1, 2, 0],
];

// Represent every moves outcomes ainst another (Rock against paper => 0, 1 = L)
// and how much point is granted by the outcome
const movesOutcomes: number[][] = [
	[D, W, L],
	[L, D, W],
	[W, L, D],
];

// Transform a raw stirng into a strategy guide
export function parseStrategyGuide(input: string): [string, string][] {
	return input.split("\n").map((line) => line.split(" ") as [string, string]);
}

// Compute scores based on round's outcome
export function playGame(rounds: string[][]) {
	return rounds.map(([oponentMove, myMove]) => {
		const [opponentOutcomeIndex] = movesData[oponentMove];
		const [myOutcomeIndex, pointsForMove] = movesData[myMove];
		return pointsForMove + movesOutcomes[opponentOutcomeIndex][myOutcomeIndex];
	});
}

export function part1(input?: string) {
	if (!input) input = loadInput(2);
	const guide = parseStrategyGuide(input);
	const game = playGame(guide);
	return game.reduce((acc, next) => (acc += next));
}

export function part2(input?: string) {
	if (!input) input = loadInput(2);
	const guide = parseStrategyGuide(input);

	const rounds: [string, string][] = [];
	guide.map(([opponentMove, desiredOutcome]) => {
		const [opponentOutcomeIndex] = movesData[opponentMove];
		const [desiredOutcomeIndex] = movesData[desiredOutcome];
		rounds.push([
			opponentMove,
			moves[movesByOutcomes[opponentOutcomeIndex][desiredOutcomeIndex]],
		]);
	});

	return playGame(rounds).reduce((acc, next) => (acc += next));
}

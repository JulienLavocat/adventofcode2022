import { loadFile, loadInput, loadSample } from "./file";

describe("File", () => {
	it("Should load a sample file", () => {
		expect(loadSample(0)).toEqual(["sample test file"]);
	});

	it("Should load an input file", () => {
		expect(loadInput(0)).toEqual(["input test file"]);
	});

	it("Shoud correcty pad start a day with 0 and load the request file type", () => {
		expect(loadFile(0, "file")).toEqual(["correct path"]);
	});
});

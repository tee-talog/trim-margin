import { trimMargin, tm } from "../ts/trimMargin";

describe("function trimMargin", () => {
	test("normal string", () => {
		expect(trimMargin(`a`)).toBe("a");
	});

	test("return, indent", () => {
		expect(trimMargin(`a
        |a`)).toBe("a\na");
	});

	test("return, 8 spaces", () => {
		expect(trimMargin(`a
        a`)).toBe("a\n        a");
	});

	test("blank line", () => {
		expect(trimMargin(`

        |`)).toBe("\n\n");
	});

	test("mix", () => {
		expect(trimMargin(`
        a
        |a
        |`)).toBe("\n        a\na\n");
	});

	test("interpolation", () => {
		expect(trimMargin(`a${0}a`)).toBe("a0a");
	});

	test("interpolation mix", () => {
		expect(trimMargin(`${0}
        |${0}
        ${0}
        |${0}`)).toBe("0\n0\n        0\n0");
	});

	test("change delimiter", () => {
		expect(trimMargin(`${0}
        #a
        ${0}
        #`, "#")).toBe("0\na\n        0\n");
	});
});

describe("tm tag", () => {
	test("non-embedded", () => {
		expect(tm`
        |a
        |`).toBe("\na\n");
	});
	describe("indented embedded variable", () => {
		test("first variable", () => {
			const aaa = `    |aaa`;
			const bbb = `    | bbb`;
			expect(tm`${aaa}
				|${bbb}
				|ccc`)
				.toBe("aaa\n    | bbb\nccc");
		});
		test("last variable", () => {
			const aaa = `    |aaa`;
			const bbb = `    | bbb`;
			expect(tm`\
				${aaa}
				|${bbb}`)
				.toBe("aaa\n    | bbb");
		});
	});
});



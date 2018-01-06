const { stripMargin, sm } = require("../js/stripMargin");

describe("function stripMargin", () => {
	test("normal string", () => {
		expect(stripMargin(`a`)).toBe("a");
	});

	test("return, indent", () => {
		expect(stripMargin(`a
        |a`)).toBe("a\na");
	});

	test("return, 8 spaces", () => {
		expect(stripMargin(`a
        a`)).toBe("a\n        a");
	});

	test("blank line", () => {
		expect(stripMargin(`

        |`)).toBe("\n\n");
	});

	test("mix", () => {
		expect(stripMargin(`
        a
        |a
        |`)).toBe("\n        a\na\n");
	});

	test("interpolation", () => {
		expect(stripMargin(`a${0}a`)).toBe("a0a");
	});

	test("interpolation mix", () => {
		expect(stripMargin(`${0}
        |${0}
        ${0}
        |${0}`)).toBe("0\n0\n        0\n0");
	});

	test("change delimiter", () => {
		expect(stripMargin(`${0}
        #a
        ${0}
        #`, "#")).toBe("0\na\n        0\n");
	});
});

describe("sm tag", () => {
});



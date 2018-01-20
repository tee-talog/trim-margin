const {
	decorate
} = require("../js/decorate");

describe("decorate", () => {
	test("not decorate", () => {
		const decorated = decorate(
			(strings, values) => [strings, values],
			(trimmed) => trimmed
		);
	});
});


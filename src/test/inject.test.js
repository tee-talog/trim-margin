const {
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject
} = require("../js/inject");

const methodName = "testMethod";
const deleteInjectedMethods = () => {
	String.prototype.stripMargin = undefined;
	String.prototype.trimMargin = undefined;
	String.prototype[methodName] = undefined;
};

describe("inject", () => {
	beforeEach(() => {
		inject();
		injectTo(methodName);
	});
	afterEach(() => {
		deleteInjectedMethods();
	});

	test("inject stripMargin", () => {
		expect(`a`.stripMargin()).toBe("a");
	});

	test("inject trimMargin", () => {
		expect(`a`.trimMargin()).toBe("a");
	});

	test("inject original method name", () => {
		expect(`a`[methodName]()).toBe("a");
	});
});


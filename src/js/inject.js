const { defalutDelimiter } = require("./config");
const { trimMargin, stm } = require("./trimMargin");

const injectTo = function injectTo (methodName) {
	String.prototype[methodName] = function (delimiter = defalutDelimiter) {
		return trimMargin(this, delimiter);
	};
};

const injectTrimMargin = function injectTrimMargin () {
	injectTo("trimMargin");
};

const injectStripMargin = function injectStripMargin () {
	injectTo("stripMargin");
};

const inject = function inject () {
	injectTrimMargin();
	injectStripMargin();
};


module.exports = {
	injectTo,
	injectTrimMargin,
	injectStripMargin,
	inject,
};


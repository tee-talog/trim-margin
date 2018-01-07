const { defalutDelimiter } = require("./config");
const { stripMargin, sm } = require("./stripMargin");

const injectTo = function injectTo (methodName) {
	String.prototype[methodName] = function (str, delimiter = defalutDelimiter) {
		return stripMargin(this, delimiter);
	};
};

const injectStripMargin = function injectStripMargin () {
	injectTo("stripMargin");
};

const injectTrimMargin = function injectTrimMargin () {
	injectTo("trimMargin");
};

const inject = function inject () {
	injectStripMargin();
	injectTrimMargin();
};


module.exports = {
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject,
};


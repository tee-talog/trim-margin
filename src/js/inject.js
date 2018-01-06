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

const injectStripIndent = function injectStripIndent () {
	injectTo("stripIndent");
};

const injectTrimMargin = function injectTrimMargin () {
	injectTo("trimMargin");
};

const inject = function inject () {
	injectStripMargin();
	injectStripIndent();
	injectTrimMargin();
};


module.exports = {
	injectTo,
	injectStripMargin,
	injectStripIndent,
	injectTrimMargin,
	inject,
};


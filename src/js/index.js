const { stripMargin, sm } = require("./stripMargin");
const {
	injectTo,
	injectStripMargin,
	injectStripIndent,
	injectTrimMargin,
	inject,
} = require("./inject");


const stripIndent = stripMargin;
const trimMargin = stripMargin;
const si = sm;
const tm = sm;

module.exports = {
	stripMargin,
	stripIndent,
	trimMargin,
	sm,
	si,
	tm,
	injectTo,
	injectStripMargin,
	injectStripIndent,
	injectTrimMargin,
	inject,
};


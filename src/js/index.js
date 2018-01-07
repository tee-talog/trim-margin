const { stripMargin, sm } = require("./stripMargin");
const {
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject,
} = require("./inject");


const trimMargin = stripMargin;
const tm = sm;

module.exports = {
	stripMargin,
	trimMargin,
	sm,
	tm,
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject,
};


const { trimMargin, tm } = require("./trimMargin");
const {
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject,
} = require("./inject");


const stripMargin = trimMargin;
const sm = tm;

module.exports = {
	trimMargin,
	stripMargin,
	tm,
	sm,
	injectTo,
	injectTrimMargin,
	injectStripMargin,
	inject,
};


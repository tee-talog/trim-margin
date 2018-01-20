import { trimMargin, tm } from "../js/trimMargin";
import {
	injectTo,
	injectStripMargin,
	injectTrimMargin,
	inject,
} from "../js/inject";


const stripMargin = trimMargin;
const sm = tm;

export {
	trimMargin,
	stripMargin,
	tm,
	sm,
	injectTo,
	injectTrimMargin,
	injectStripMargin,
	inject,
};


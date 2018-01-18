const { defalutDelimiter } = require("./config");

const trimMargin = function trimMargin (str, delimiter = defalutDelimiter) {
	if (delimiter === defalutDelimiter) {
		// Default delimiter is faster than other delimiter.
		return str
				.split(/\r?\n/g)
				.map((row) => row.replace(/^\s*\|/g, ""))
				.join("\n");
	} else {
		const regexp = new RegExp(String.raw`^\s*${delimiter}`, "g");
		return str
				.split(/\r?\n/g)
				.map((row) => row.replace(regexp, ""))
				.join("\n");
	}
};


const tm = function tm (strings, ...values) {
	if (strings.length !== values.length + 1) {
		// Error
		throw new Error("Please call as Tagged template literals. (e.g. tm`Hello ${name}`)");
	}
	return trimMargin(
		strings.reduce(
			(prev, current, index) => prev + values[index - 1] + current));
};


module.exports = {
	trimMargin,
	tm,
};


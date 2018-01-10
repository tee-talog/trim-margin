const { defalutDelimiter } = require("./config");

const stripMargin = function stripMargin (str, delimiter = defalutDelimiter) {
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


const sm = function sm (strings, ...values) {
	if (strings.length !== values.length + 1) {
		// Error
		throw new Error("Please call as Tagged template literals. (e.g. sm`Hello ${name}`)");
	}
	return stripMargin(
		strings.reduce(
			(prev, current, index) => prev + values[index - 1] + current));
};


module.exports = {
	stripMargin,
	sm,
};


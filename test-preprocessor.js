const tsc = require("typescript");
const fs = require("fs");

const tsConfig = JSON.parse(fs.readFileSync("./src/__tests__/tsconfig.json"));

module.exports = {
	process(src, path) {
		if (path.endsWith(".ts")) {
			return tsc.transpile(src, tsConfig.compilerOptions, path, []);
		}
		return src;
	}
};


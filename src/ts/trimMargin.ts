const { defalutDelimiter } = require("./config")

const trimMargin = function trimMargin(
  str: string,
  delimiter: string = defalutDelimiter,
): string {
  if (delimiter === defalutDelimiter) {
    // Default delimiter is faster than other delimiter.
    return str
      .split(/\r?\n/g)
      .map((row: string) => row.replace(/^\s*\|/g, ""))
      .join("\n")
  } else {
    const regexp = new RegExp(`^\\s*${delimiter}`, "g")
    return str
      .split(/\r?\n/g)
      .map((row: string) => row.replace(regexp, ""))
      .join("\n")
  }
}

const tm = function tm(strings: string[], ...values: string[]): string {
  if (strings.length !== values.length + 1) {
    // Error
    throw new Error("You should call this as Tagged template literals.")
  }
  return trimMargin(
    strings.reduce(
      (prev: string, current: string, index: number) =>
        prev + values[index - 1] + current,
    ),
  )
}

export { trimMargin, tm }

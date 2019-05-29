import { defalutDelimiter } from "./config"
import { trimMargin, tm } from "./trimMargin"

const injectTo = function injectTo(methodName: string): void {
  ;(String.prototype as any)[methodName] = function(
    this: string,
    delimiter: string = defalutDelimiter,
  ): string {
    return trimMargin(this, delimiter)
  }
}

const injectTrimMargin = function injectTrimMargin(): void {
  injectTo("trimMargin")
}

const injectStripMargin = function injectStripMargin(): void {
  injectTo("stripMargin")
}

const inject = function inject(): void {
  injectTrimMargin()
  injectStripMargin()
}

export { injectTo, injectTrimMargin, injectStripMargin, inject }

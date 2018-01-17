# trim-margin
`trimMargin` like Kotlin and `stripMargin` like Scala.

[![NPM](https://nodei.co/npm/trim-margin.png)](https://nodei.co/npm/trim-margin/)

## Features
* Indent in a string literal.
* Selectable APIs: `trimMargin` or `stripMargin`.
* Use as tagged template literals.
* Inject to string type.

## install
```
$ npm i -S trim-margin
```

## Usage
```js
const {
    trimMargin,
    tm,
    inject,
} = require("trim-margin");

console.log(trimMargin(`
	|trim
    | indent
        | spaces`));
// => "\ntrim\n indent\n spaces

const template = `    | template`;
const literal  = `    | literal`;
console.log(tm`\
    |tagged
    ${template}
    |${literal}`);
// => "tagged\n template\n    | literal"

inject();
console.log(`\
    |inject
    | to
    | string`.trimMargin());
// => "inject\n to\n string"
```

## API

### trimMargin(str, [delimiter])

Trim indent spaces.

#### str

Indented string.

#### delimiter

Indent delimiter.
This is used as an argument to a `RegExp` object.
defalut: `"\\|"`

### stripMargin(str, [delimiter])

Same `trimMargin`.

### tm

Use as Tagged template literals.
Same `trimMargin(literal)`.

### sm

Same `tm`.

### inject

Inject to `string.prototype`: `trimMargin` and `stripMargin`.
You can use it like method of string type.

### injectTrimMargin

Inject to `string.prototype`: `trimMargin`.
You can use it like method of string type.

### injectStripMargin

Inject to `string.prototype`: `stripMargin`.
You can use it like method of string type.

### injectAt(methodName)

Inject to `string.prototype`.
You can use it like method of string type.

#### methodName

Method name injected into string type.

## License
MIT © tee-talog



JavaScript Syntax
===

## Types

Type | Examples | Notes
---|---|---
Number | `7` | floating point
Boolean | `true` and `false` | truthy/falsey
String | `'hello world'` | 
Undefined | `undefined` | default function return, non-existent object properties
Null | `null` | "missing" object
Objects | `{ name: 'felix', type: 'cat' }` | key-value pairs
Arrays | `['apple', 'banana', 'orange' ]` | list of things
Functions | function add(x, y) { return x + y; } | code on demand

## Variables
Variables are like a named box where you put things.

For example, typing 3.14159 over and over can cause errors and waste time.

Let's store it in a variable instead, like so:

```js
const mySpecialNumber = 3.14159;

console.log(mySpecialNumber); // now we can just refer to it by name
```
That way, instead of typing 3.14159 every time, you can type the human-readable word `mySpecialNumber`

As a bonus, VSCode will now autocomplete the word `mySpecialNumber` for you

* `let` and `const` (used to be `var`)
* names can contain:
    * `a-z`
    * `A-Z`
    * `$` and `_`
    * `1-9` (not at beginning!)
* terminology:
    * assignment
    * reassignment
    * scope

## Tricky stuff: What happens when I get a string mixed with a number?

```js
// number + number = number
5 + 7 // 12

// string + string = string
"5" + "7" // "57"

// STOP: why is this 57?

// number + string = string
7 + "4" // "74"

// we can 'cast' the string into a number like so:
7 + Number("4") // 11

// this tranforms the string "4" into the number 4
```

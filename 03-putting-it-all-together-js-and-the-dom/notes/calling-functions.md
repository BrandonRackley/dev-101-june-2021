Calling Functions
===

Anything that has parentheses after it in JavaScript is a function call.

You can think of functions as little machines. You can also think of functions as the _verbs_ of coding.

Functions _do things_ in Javascript.

## Examples of function calls

Some functions just have empty parentheses at the end:

```js
Math.random();
Date.now();
```

## Arguments

Other functions have things in their parentheses

Think of the parentheses as a little mouth that is eating some input.

The formal word for input is an _argument_. We _pass_ arguments into functions.

```js
console.log('hello world!'); // what is the argument here?

alert('hiiii!'); // what is the argument here?

Math.round() // what do you think we should pass as an argument here?
```

## Return values

Many (but not all) functions _return_ things.

If a function `return`s something, that means we expect _output_.

We can store this output in variables.

```js
const myRandomNumber = Math.random(); // what does this function return?

const timestamp = Date.now(); // what does this function return?

const roundedNumber = Math.round(4.5) // what argument does this function take? what does it return?

// here's a complicated one
const myElement = document.getElementById('some-id'); // what is the argument? what is the return value?

// Speculate: why would we want to 'get' HTML elements by id?
```
JavaScript Syntax
===

## Objects (Got dots?)

Objects are sets of key value pairs that represents real-world items. For example, here is an object that represents a dog:

```js
const myDog = {
    name: 'spot',
    type: 'dog',
    weight: 5,
    age: 3
 }

myDog.name // 'spot'

myDog['name'] //  also 'spot'

// IMPORTANT: we can store this stuff in variables, like so
const doggieAge = myDog.age
```

Whenever we want to represent a single, complex thing in code, we usually use an object (often called JSON, for JavaScript Object Notation).

Good examples of objects include a product, a character, a post, a friend, or a user.

```js
// we can reassign properties of objects

myDog.name = 'scooter'
"scooter"
myDog
myDog.age++ // 4
myDog.age++ // 5
myDog.age++ // 6
myDog.age++ //7
myDog //{ name: "scooter", type: "dog", weight: 5, age: 8 }

```

### Nested objects--objects inside objects!
```js
const otherDog = {
 type: 'dog',
 name: 'fido',
 weight: 3
}

myDog.bestFriend = otherDog //{type: "dog", name: "fido", weight: 3}

myDog //{name: "spotthew", type: "dog", weight: 5, age: 9, bestFriend: {…}}age: 9bestFriend: {type: "dog", name: "fido", weight: 3}name: "fido"type: "dog"weight: 3__proto__: Objectname: "spotthew"type: "dog"weight: 5__proto__: Object

myDog.bestFriend.name // "fido"
```
## Simple Arrays

What happens if you want to show a collection (or list) of things in javascript?

```js
const colors = ['red', 'blue', 'yellow', 'green'];

// we can access items in the array by their index
colors[2] // 'yellow'

// IMPORTANT: arrays start at 0.
colors[0] // 'red'

// IMPORTANT: we can store this stuff in variables, like so
const theColorBlue = colors[1];

theColorBlue // 'blue'

// we can also get the length like so
colors.length // 4
```

```js

// we can manipulate array values like so

const colors = ['red', 'blue', 'yellow', 'green'];

// lert's mutate some data!
colors[0]
colors[0] = 'magenta'
colors // ["magenta", "blue", "yellow", "green"]
colors.push('orange')
colors // ["magenta", "blue", "yellow", "green", "orange"]
colors.pop()
colors // ["magenta", "blue", "yellow", "green"]

```

## Arrays of Objects

Usually, lists of strings or numbers are not very useful.

Basically everything on the internet is a list of things. It's basically all we ever do.

Real world things are represented as objects in code. Therefore, in code, we are almost always working with arrays of objects in our jobs.

Good examples of arrays include shopping carts, message boards, friends lists, product lists, etc

```js
const cart = [
    {
        id: 'apple',
        quantity: 3,
    },
    {
        id: 'banana',
        quantity: 2,
    },
    {
        id: 'pepper',
        quantity: 4,
    },
]

const products = [
    {
        id: 1,
        name: 'phone',
        brand: 'ACME',
        price: 4,
    },
        {
        id: 2,
        name: 'keyboard',
        brand: 'Super Shop',
        price: 1,
    },
        {
        id: 3,
        name: 'banjo',
        brand: 'Price Saver',
        price: 2,
    }
]
```

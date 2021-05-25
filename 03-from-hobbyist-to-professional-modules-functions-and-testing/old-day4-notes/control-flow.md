Control Flow
===

> Managing variation and repetition

### Conditional

* `if`
* `else if`
* `else`

```js
export function isTallEnoughToRide(ride, height) {
    if (ride === 'carousel' && height >= 1) {
        return true
    } else if (ride === 'rollercoaster' && height >= 1.5) {
        return true
    } else {
        return false
    }

    console.log('side note: this block of code is unreachable because return stops the execution of the function')
}
```

### Refactored:

```js
export function isTallEnoughToRide(ride, height) {
    const overOnePointFive = height >= 1.5;
    const over1AndCarousel = height >= 1 && ride === 'carousel';

    return overOnePointFive || over1AndCarousel;
}
```

### Loop

* `for`
* `while`

for loops count up, generally from 0 to the length of an array 
```js


for (let i = 0; i < 7; i++) {
    console.log(i); // 1, 2, 3, 4, 5, 6, 7
}

const colors = [
    'yellow',
    'lightblue',
    'pink',
    'lightgreen'
];

// we can store numbers in variables
const mySpecialNumber = 2;
// and we can use those numbers as indicies to access values in arrays
console.log(colors[mySpecialNumber]);

// looping or iterating through lists of things

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // yellow, lightblue, pink, lightgreen
}

// colors.forEach(item => console.log(item));
```

While loops run until a condition is met:
```js
let number = Math.random()
while(number < .5) {
    console.log('looking for number over .5 . . .')

    number = Math.random()
}
```

## Together 

**Even/odd Logging**

Loop through numbers 1 through 15:
- If a number is odd, log 'odd'. 
- If a number is even, log 'even'.

**Outcome: fizzbuzz!**

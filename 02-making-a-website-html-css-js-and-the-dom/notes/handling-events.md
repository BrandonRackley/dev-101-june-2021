Handling Events
===


### Do things on click!

On click, we usually want to:

1) Go get stuff from an input (or some other state container)
1) Use the stuff from the input to update application state
1) Update the DOM to reflect the new state

## event listeners

```js
const myButton = document.getElementById('my-special-button');

myButton.addEventListener('click', () => {
    // post-click logic goes here!
})

const myInput = document.getElementById('my-special-input');

myInput.addEventListener('input', () => {
    // post-type logic goes here!
})

```



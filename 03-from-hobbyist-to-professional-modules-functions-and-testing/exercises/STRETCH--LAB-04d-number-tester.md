Even-Odd Number Tester Challenge
===

Create an app that allows a user to enter a number and
when they click the submit button, the app shows them
an image corresponding to even or odd.

## Strings all the way down...

Form controls always return strings, even if `type="number"`

## Setup

1. Create repo and clone locally (don't forget to `cd`!)
1. Open in VSCode and add starter folders and files:
    ```
    .eslintrc #copy class config
    app.js
    images/
        #image files can go here
    index.html #basic html document
    main.css
    test/ #copy these from repo
        index.html
        tests.js
    ```

Time for a commit!

## Design HTML and CSS

1. Page structure (headers and such)
1. Section with number `<input>` and `<button>`. Make sure each as an `id`
1. Two images, one for "even" and one for "odd", giving them an `id`
1. Make sure to add a `.hidden` class in your css and when your design is done,
add to both images. (see [docs on controling `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display))

Read your code and make any improvements.

Time for a commit!

## TDD `isEven` Function

1. Create file `is-even.js` at root of project. This is where
your function will live. Go ahead a stub and export an empty function:
    ```js
    function isEven(number) {

    }

    export default isEven;
    ```
1. In `test/tests.js`:
    1. Import the function:
        ```js
        import isEven from '../is-even.js';
        ```
    1. Add a test for "is even"
    1. Use Arrange, Act, Assert to create a _failing_ test (verify in qunit test runner)
    1. Implement the isEven functionality ([see docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) ) and make sure test passes.
    1. Add another test i for "is odd" and make sure it passes

Read your code and make any improvements.

Time for a commit!

## Integrate Function into App

1. In `app.js`, import the function:
    ```js
        import isEven from './is-even.js';
    ```
1. Reference the `input` and the even and odd `img` using `document.getElementById('id')`;
1. Create a function in `app.js` for showing/hiding images:
    ```js
    function showCorrectImage() {

    }
    ```
1. In the html page, call the function from the `button` `onclick` attribute
1. In the `showCorrectImage` function:
    1. Get the value from the input
    1. Convert to a number
    1. Pass to `isEven` function and store return value in a variable.
    1. Conditionally add and remove `hidden` class from
    correct images. ([see the docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList))

Read your code and make any improvements.

Time for a commit!

## Deploy

1. Push to GitHub
1. Enable GHPages
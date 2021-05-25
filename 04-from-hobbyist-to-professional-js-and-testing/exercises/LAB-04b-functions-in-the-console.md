## Functions in the Console

## Standard Setup Process

1. Create a repo called `lab-04a-functions-in-the-console` on Github
    - make sure to click add a `README.md`
1. Copy the URL of the new repo
1. From the command line (terminal) clone your repo:
    1. Check with `pwd` that you are in correct directory for labs
    1. `git clone <url>`
    1. **`cd` into your repo from the command line**
    1. Launch vscode with `code .`

## Remember To...

1. Read through this entire lab document
1. **Have a plan.** 

## Instructions

### Step 1: Setup

1. Setup an `index.html` that uses a `script` element to load a javascript file called `app.js`.

### Step 2: Create an Array of Objects and Log to the Console

1. In `app.js`, make five objects that:
    - represent a kind of thing in real life (5 cat objects, or 5 truck objects, or 5 smartphone objects, or 5 city objects, etc). 
    - Choose 2-3 properties for those objects. 
    - Make one property something you can test and sort into 2 or more categories. For example, dogs less 15 pounds could be "small", dogs between 15-40 pounds "medium", and dogs more than 40 pounds "large". Make sure your data has representative examples of all categories
    - Store these objects in different `const`s. For example: 
        ```js
            const spot = { name: 'spot', age: 5, weight: 13 };
            const rover = { name: 'rover', age: 9, weight: 23 };
            // rest of your objects...
        ````
1. Put all 5 objects in an array. Store this array in a `const`. For example:
    ```js
    const dogs = [spot, rover, baily, luna, scout];
    ```
1. Loop through (iterate) this array and log out each object to the console. Serve your project in live server and open up the javascript console to check that it works.
1. ACP

### Step 3: Make a Function to Do the Work

1. Write a function called `logOutThings` that:
    - logs out the words "Here are your 5 things!", but using the `array.length` property to get the right number of things, don't "hard code" the number 5!
1. Call your function with your array (`logOutThings()`)
1. Validate that it worked by looking at the output in the console.
1. Add one more item and add to your array. Validate that the output changes to "Here are your 6 things!"
1. ACP

### Step 4: Move Loop into Function
1. Move the looping code from earlier step into the function
1. Validate that it logs the first message, then logs your array of things to the console
1. ACP


You'll need to use control flow to determine what message to log!

## Points Break Down

Looking For | Points (10)
:--|--:
Make 5 objects in `app.js` and store them in a `const` | 3
Make an array for these objects and store it in a `const` | 3
`logOutThings` function with a loop | 3
Call your `logOutThings` function so that it logs the items out to the console | 1
## Calculator Plan

- In HTML we need (a list of what DOM we need to GET BY ID):
    - Two inputs
        - Let the user INPUT two numbers
    - A button
        - Let the user DECIDE WHEN to add them
    - Results section
        - Let the user SEE the result

Validation: Log out all these "operative" elements in JS

- Add event listener to the button

Validation: log out ANYTHING in the "action area". This should log out on click

- What happens in the event listener?
    - Apply the sum operation to the inputs
        - Get the values (as strings) of the inputs
            - log out the values
        - Turn these strings into numbers
            - log out the NUMBER values
        - Add them together
            - log out the sum
    - "Output the result" - show the answer to the user
        - Define a const for the sum
        - change the textContent property of the results section
        - (clear out the inputs)
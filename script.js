// This script runs when the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the button and the message paragraph by their IDs
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    // Check if the button exists before trying to add a click listener
    if (myButton) {
        // Add an event listener to the button: when it's clicked
        myButton.addEventListener('click', () => {
            // Update the text of the message paragraph
            messageParagraph.textContent = 'You clicked the button! This website is interactive!';
            // Log a message to the browser's console (for developers)
            console.log('Button was clicked!');
        });
    } else {
        // Log an error if the button element couldn't be found
        console.error('Button with ID "myButton" not found.');
    }
});

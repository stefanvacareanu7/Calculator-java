// Prompt the user for their name
var userName = prompt("What's your name?");

// Check if the user entered a name
if (userName !== null && userName !== "") {
    // Display a greeting message
    var greeting = "Hello, " + userName + "! Welcome to our website!";
    alert(greeting);
} else {
    // If the user didn't enter a name
    alert("Hello, anonymous! Welcome to our website!");
}

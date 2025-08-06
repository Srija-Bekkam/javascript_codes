/*write a js program that takes a users full name and creates a username in the following format:
statrt with @chm,followed by the full name,and then the length of the name*/
// Prompt the user for their full name
let fullName = prompt("Enter your full name:");

// Calculate the length of the name (including spaces)
let nameLength = fullName.length;

// Create the username in the specified format
let username = "@chm" + fullName + nameLength;

// Output the result
console.log("Generated Username:", username);
alert("Your username is: " + username);

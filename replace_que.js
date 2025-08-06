//replace all spaces in a string with underscores(_) to make it URL_friendly//

function makeURLFriendly(str) {
  return str.replace(/ /g, "_");
}

// Example usage
let originalString = "Hello World This is JavaScript";
let urlFriendly = makeURLFriendly(originalString);

console.log(urlFriendly);  // Output: Hello_World_This_is_JavaScript
    
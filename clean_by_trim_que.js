//given a string clean it by :trimming,making it lowercase,replacing all spaces with input:My First BLOG Post,output:"my-first-blog-post"//

function cleanString(str) {
  return str.trim().toLowerCase().replace(/ /g, "-");
}

// Example usage
let input = "My First BLOG Post";
let output = cleanString(input);

console.log(output);  // Output: "my-first-blog-post"

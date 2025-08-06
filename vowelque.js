//check if the 3rd caharcter of a given string is a vowel or not //


function isThirdCharVowel(str) {
  // Ensure the string has at least 3 characters
  if (str.length < 3) {
    return "String too short.";
  }

  // Get the 3rd character (index 2)
  const thirdChar = str.charAt(2).toLowerCase();

  // Check if it's a vowel
  const vowels = "aeiou";
  if (vowels.includes(thirdChar)) {
    return `Yes, '${thirdChar}' is a vowel.`; // Use backticks for template literal
  } else {
    return `No, '${thirdChar}' is not a vowel.`; // Use backticks for template literal
  }
}

// Example usage
console.log(isThirdCharVowel("Hello"));     // No, 'l' is not a vowel.
console.log(isThirdCharVowel("Amazing"));   // Yes, 'a' is a vowel.
console.log(isThirdCharVowel("It"));        // String too short.

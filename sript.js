function findMatchingStrings(strings) {
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      if (strings[i].toLowerCase() === strings[j].toLowerCase()) {
        return [i + 1, j + 1]; // Return indices of matching strings
      }
    }
  }
  return false; // No matches found
}

// Example usage:
const strings = ["abcd", "acbd", "aaab", "acbd"];
const result = findMatchingStrings(strings);

if (result) {
  console.log("Matching strings found at indices:", result);
} else {
  console.log("No matching strings found");
}

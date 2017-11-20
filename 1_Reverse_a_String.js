// https://www.freecodecamp.org/challenges/reverse-a-string

// Solition one, For loop, unshift

function reverseString(str) {
  // initialize an empty array
  var reversedString = [];
  //  loop through str, add each character to the beginning of the new array
  for (var i = 0; i < str.length; i++) {
    reversedString.unshift(str[i]);
 }
 return reversedString.join(""); // join the array back to a string.
}

// Solution Two, .reverse()

function reverseString(str) {

  // split the string into an array of individual characters, reverse the array, then join it as a string again.
  return str.split("").reverse().join("");
}

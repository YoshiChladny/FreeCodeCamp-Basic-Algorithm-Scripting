// https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  // split the String

  var splitStr = str.split(' ');

  // Initialize a longest word variable
  var longest = 0;
  for (var i = 0; i < splitStr.length; i++) { //itterate through the split string
    if (splitStr[i].length > longest) {
     longest = splitStr[i].length; // if the length of the current string within the array is longer than longest, set longest to the new value.
    }
  }
  return longest; // return longest once the loop is finished
}

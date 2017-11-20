// https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  var outputString = ""; //new variable to store the output
  while (num > 0) {      //run a while loop until num is 0
    outputString += str; //concatenate str onto outputString
   num --;               // decrement outputString

  }
  return outputString;
}

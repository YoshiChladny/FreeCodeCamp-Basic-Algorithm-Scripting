// https://www.freecodecamp.org/challenges/check-for-palindromes

function palindrome(str) {
  var regEx = /[\W_]/g;                              //Regex, all alphabetic characers and underscore
  var firstStr = str.toLowerCase(); // convert the argument to lowercase
  firstStr.replace(regEx, '');     // remove all unwanted characters as stated in the regex variable
  var reverse = lowStr.split('').reverse().join(''); // create a reverse of the filtered string.
  return reverse === lowRegStr; // check the two strings' equality

}

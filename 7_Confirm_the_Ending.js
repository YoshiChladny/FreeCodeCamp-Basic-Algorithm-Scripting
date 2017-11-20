// https://www.freecodecamp.org/challenges/confirm-the-ending

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
  // compares target with the substring: which is each character for the length of target starting at the end of str
}

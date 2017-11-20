function titleCase(str) {
  str = str.toLowerCase(); // convert all chars to lower Case
  str = str.split(" ");  // split string into an array at spaces
  str = str.map(function(word) {
        return word.replace(word[0], word[0].toUpperCase()); //map over the array: replace the first char of each word with uppercase of that char.
  });
  return str.join(" ");
}

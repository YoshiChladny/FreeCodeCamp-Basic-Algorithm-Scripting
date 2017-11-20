https://www.freecodecamp.org/challenges/caesars-cipher

function rot13(str) {
  str = str.split(""); // split the string into an array
  var translated = [];     //create an empty array to put the translated characters
  for (var i = 0; i < str.length; i++) { //loop through each character of arr
    var character = str[i].charCodeAt(); //convert that code to its ascii code
    if (character < 65 || character > 90) {
      translated.push(String.fromCharCode(character)); //will simply return the character if it's not an uppercase letter
    } else if (character < 78){
      translated.push(String.fromCharCode(character +13)); //if its 77 or under, it will shift thirteen places forward
    } else {
      translated.push(String.fromCharCode(character -13));
    } // otherwise it will shift it backwards by 13 places.
  }
  return translated.join(""); //join the array back into a string;

}

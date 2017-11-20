// https://www.freecodecamp.org/challenges/mutations

function mutation(arr) {

  var arr0 = arr[0].toLowerCase();
  var arr1 = arr[1].toLowerCase();

  // convert each string to lower case and store it in a value

  for (var i = 0; i <arr1.length; i++) {
    var val = arr0.indexOf(arr1[i]); // gets the index of character i from array 1 in array 0
    if (val === -1) {
      return false;  //if the character is not found val will be assigned to -1 and break the loop;
    }
  }
  return true;
}

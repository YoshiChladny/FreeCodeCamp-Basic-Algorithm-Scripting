// https://www.freecodecamp.org/challenges/where-do-i-belong


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var lessThan = 0; //initialize a variable which will be returned, set to zero so that it will return 0 if num is smaller than all the numbers in the array

  arr.sort(); // sort the array
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] < num) {
      lessThan++;  // increment lessThan each time it's bigger than the current element in the array
    }
  }
  return lessThan; // returns the number of times the for loop ran.
}

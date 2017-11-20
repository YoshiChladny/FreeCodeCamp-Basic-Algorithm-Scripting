// https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var largestNumber = [0,0,0,0]; //initialize an array to compare each subarray
  for (var i = 0; i < arr.length; i++) { // for each item in the array...
    for (var j = 0; j <arr[i].length; j++) { //check through each item in the sub array
      if(arr[i][j] > largestNumber[i]) { //check if each subelement is bigger than the current index of largestNumber
        largestNumber[i] = arr[i][j]; //if true, the current index of Largest number is now the new subelement
      }
    }
  }

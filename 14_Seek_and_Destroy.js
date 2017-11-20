// https://www.freecodecamp.org/challenges/seek-and-destroy

function destroyer(arr) {

  var args = [].slice.call(arguments); // assign the arguments object to a variable
  args.splice(0,1);                    // splice off the first argument, the one we will be checking through

  for (var i = 0; i<arr.length; i ++) {   //itterate through the first argument, arr
    for (var j = 0; j<args.length; j++) { // itterate through each element in args
      if (arr[i] === args[j]) {           // compare each element of args the current element of arr
        delete arr[i]; //delete the element of arr if it doesn't match
      }
    }
  }
  //return arr with all the duplicate items now deleted and the falsey values filtered out

  return arr.filter(function(x) {
    return Boolean(x); 
  });
}

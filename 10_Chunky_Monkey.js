// https://www.freecodecamp.org/challenges/chunky-monkey

function chunkArrayInGroups(arr, size) {
  var newArr = []; // initialize an empty list which we will push the chunks into... doesn't sound that appealing
  var count = 0; // counter, which will be the first parameter for our slice.
  while (count < arr.length) { //itterate through the array
    newArr.push(arr.slice(count, count + size)); // adds a chunk with .split from count, until the size of the chunk
    count += size; // increment count so .split will start where we left off.
  }
  return newArr; // return the new array
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

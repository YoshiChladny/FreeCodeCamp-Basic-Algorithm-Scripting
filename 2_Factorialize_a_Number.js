// https://www.freecodecamp.org/challenges/factorialize-a-number

function factorialize(num) {

  // first check if num is greater than 0, if not return -1 (reject num)
  if (num < 0) {
    return -1;

// if num is zero, it will have a factorial of 1
  } else if (num === 0) {
    return 1;
  } else {

    // recursive function, will keep calling itself while decementing num

    // will first return (5 *(5-1)) // num is now 20
    //next recusive call will return (20* (4-1)) //num is now 60
    //will continue until num reaches zero and breaks the recursion
    return (num * factorialize(num -1));
  }

}
factorialize(5);

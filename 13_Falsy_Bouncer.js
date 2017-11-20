// https://www.freecodecamp.org/challenges/falsy-bouncer

function bouncer(arr) {

  // .filter takes a function which takes an argument, and returns all modifiers to that function which evaluate as true.
  var filteredArr = arr.filter(function(item){
  return item; //returns all non falsey values
});
  return filteredArr;
}

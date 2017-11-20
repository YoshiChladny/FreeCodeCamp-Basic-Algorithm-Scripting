// https://www.freecodecamp.org/challenges/truncate-a-string

function truncateString(str, num) {
 if (num <= 3) {
   str = str.slice(0,num) +'...'; //if the initial string is less than 3 characters set it to the length of num and concatenate '...'
 }
 else if(str.length > num) {          //check if the string is longer than num
   str = str.slice(0,num-3) + '...'; // slice the string at the length of num -3 for the ... then concatenate '...'
 }
 return str;
}

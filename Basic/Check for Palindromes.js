/*Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2". */
function palindrome(str) {

  str = str.toLowerCase();
  str = str.replace(/\s/g,'');
  str= str.replace(/[_&\/\\#,+()$~%.'":*?<>{}023456789]/g,'');
  
  var str2 = str.split('').reverse().join('');
  
  if(str2 == str){  
  return true;
  }
  else{
    return false;
  }
}
//test cases
palindrome("1 eye for of 1 eye.");
palindrome("_eye")
palindrome("race car")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("five|\_/|four")
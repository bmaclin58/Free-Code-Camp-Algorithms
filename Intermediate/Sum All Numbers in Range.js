/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.*/
function sumAll(arr) {
  
  var Min = Math.min(...arr);
  var Max = Math.max(...arr);
  var total = 0;
  
  for(var x = Min; x <= Max; x++){
    total = total + x;
  }
  
    
  return total;
}
//test cases
sumAll([5, 10]);
sumAll([1, 4])
sumAll([4, 1])
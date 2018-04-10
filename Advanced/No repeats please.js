/*Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
function permAlone(str) {
  //Heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
  var arr = str.split('');
  var result = 0;
  
  function Swap (a,b){
    //takes the elements of an array and swaps the position
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function Generate(x){
    var regex = /([a-z])\1+/; //matches any repetting charaters "https://regexr.com/"
    
    if (x === 1 && !regex.test(arr.join(''))){
      result++;
      
    }
    else {
      for (var i = 0; i !== x; i++){
        Generate(x-1);
        Swap(x % 2 ? 0: i, x - 1);
      }
    }
  }
  Generate(arr.length);
  return result;
}

permAlone('aab');
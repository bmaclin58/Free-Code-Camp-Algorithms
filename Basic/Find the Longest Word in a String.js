/*Return the length of the longest word in the provided sentence.
Your response should be a number.*/
function findLongestWord(str) {
  var splitarray = str.split(' ');
  var longest = 0;

  for (var x = 0; x < splitarray.length; x++) {
    if (splitarray[x].length > longest) {
      longest = splitarray[x].length;
    }
  }

  return longest;
}
//test cases
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you")
findLongestWord("What is the average airspeed velocity of an unladen swallow") 
function problem4(word) {
  let uppercaseOrdered = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let uppercaseReverseOrdered = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  let lowercaseOrdered = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let lowercaseReverseOrdered = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
  var referenceIndex = 0;

  var wordArray = Array.from(word);
  for (let index = 0; index < word.length; index++) {
    if (uppercaseOrdered.includes(wordArray[index])) {
        referenceIndex = uppercaseOrdered.indexOf(wordArray[index]);
        wordArray[index] = uppercaseReverseOrdered[referenceIndex];
    } else if (lowercaseOrdered.includes(wordArray[index])) {
        referenceIndex = lowercaseOrdered.indexOf(wordArray[index]);
        wordArray[index] = lowercaseReverseOrdered[referenceIndex];
    } else {
        continue;
    }
}
  var answer = wordArray.join('');
  return answer;
}

module.exports = problem4;

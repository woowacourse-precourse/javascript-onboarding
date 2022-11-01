function problem4(word) {
  let wordArray = Array.from(word);
  wordArray = convertWord(wordArray);

  return wordArray.join("");
}

function convertWord(wordArray) {
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const reverseAlphabet = Array.from("ZYXWVUTSRQPONMLKJIHGFEDCBA");

  for (const wordIndex in wordArray) {
    if (alphabet.indexOf(wordArray[wordIndex]) != -1) {
      wordArray[wordIndex] = reverseAlphabet.at(alphabet.indexOf(wordArray[wordIndex]));
    } else if (alphabet.indexOf(wordArray[wordIndex].toUpperCase()) != -1) {
      wordArray[wordIndex] = reverseAlphabet.at(alphabet.indexOf(wordArray[wordIndex].toUpperCase())).toLowerCase();
    }
  }

  return wordArray;
}

module.exports = problem4;

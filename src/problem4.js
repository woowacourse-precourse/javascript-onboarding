function isAlphabet(letter) {
  return /[a-zA-Z]/.test(letter);
}

function reverse(word) {
  let reverseWord = "";

  for (let i = 0; i < word.length; i++) {
    if (isAlphabet(word[i])) {
      word.charCodeAt(i) < 97
        ? (reverseWord = reverseWord.concat(
            String.fromCharCode(155 - word.charCodeAt(i))
          ))
        : (reverseWord = reverseWord.concat(
            String.fromCharCode(219 - word.charCodeAt(i))
          ));
    } else {
      reverseWord = reverseWord.concat(word[i]);
    }
  }
  return reverseWord;
}

function problem4(word) {
  var answer;

  answer = reverse(word);

  return answer;
}

module.exports = problem4;

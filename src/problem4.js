function problem4(word) {
  var answer = '';

  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const reverseAlphabet = [...alphabet].reverse();

  for (let i = 0; i < word.length; i++) {
    let ascii = word[i].charCodeAt();
    let findIndex;
    if (ascii >= 65 && ascii <= 90) {
      findIndex = alphabet.indexOf(word[i].toLowerCase());
      answer += reverseAlphabet[findIndex].toUpperCase();
    } else if (ascii >= 97 && ascii <= 122) {
      findIndex = alphabet.indexOf(word[i].toLowerCase());
      answer += reverseAlphabet[findIndex];
    } else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;

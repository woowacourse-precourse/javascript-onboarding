function problem4(word) {
  let answer = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let inverseAlphabet = alphabet.slice().reverse();
  let INVERSEALPHABET = ALPHABET.slice().reverse();
  let dictionary = {};

  if(word.length < 1 || word.length > 1000) return false;

  for (let i = 0; i < alphabet.length; i++) {
    dictionary[alphabet[i]] = inverseAlphabet[i];
  }
  for (let i = 0; i < ALPHABET.length; i++) {
    dictionary[ALPHABET[i]] = INVERSEALPHABET[i];
  }
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);

    if (dictionary.hasOwnProperty(char)) {
      answer += dictionary[char];
    } else {
      answer += char;
    }
  }

  return answer;
}
module.exports = problem4;

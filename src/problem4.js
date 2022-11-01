function problem4(word) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < word.length; i++) {
    if (isAlphabet(word[i], alphabet)) {
      answer = reciprocalAlphabet(word[i], answer, alphabet); // if character is an alphabet
    } else if (word[i] === " ") {
      answer += " "; // if character is a space
    } else {
      answer += word[i]; // if character is not an alphabet nor space
    }
  }
  return answer;
}

module.exports = problem4;

// check if string is an alphabet
function isAlphabet(str, alphabet) {
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}

// check if string is an uppercase alphabet
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// function that returns reciprocal of alphabet string
function reciprocalAlphabet(char, result, alphabet) {
  const index = alphabet.indexOf(char);
  let num;
  if (isUpperCase(char)) {
    num = 77;
  } else {
    num = 25;
  }
  result += alphabet[num - index]; // reciprocal of alphabet letter
  return result;
}

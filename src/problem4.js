function problem4(word) {
  var answer;
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

function problem2(cryptogram) {
  var answer = cryptogram;
  while (checkRepetition(answer)) {
    answer = removeRepetition(answer);
  }
  return answer;
}
module.exports = problem2;

// check for repetition in string
function checkRepetition(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] || string[i] === string[i - 1]) {
      return true;
    }
  }
  return false;
}

// return string after removing repetition
function removeRepetition(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] && string[i] !== string[i - 1]) {
      result += string[i];
    }
  }
  return result;
}

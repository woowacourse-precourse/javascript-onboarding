function problem2(cryptogram) {
  var answer;
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
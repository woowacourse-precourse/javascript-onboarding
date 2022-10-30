function problem2(cryptogram) {
  var answer;
  let iterateValue;
  answer = detectDelete(cryptogram);
  return answer;
}

function detectDelete(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      iterateValue = str.substring(0, i) + str.substring(i + 2);
      return detectDelete(iterateValue);
    }
  }
  return iterateValue;
}
module.exports = problem2;

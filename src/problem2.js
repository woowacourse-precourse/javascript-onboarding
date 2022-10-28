function checkStringDuplication(str) {
  let beforeWord = '';
  for (i = 0; i < str.length; i++) {
    if (beforeWord === str[i]) {
      return true;
    } else {
      beforeWord = str[i];
    }
  }
  return false;
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

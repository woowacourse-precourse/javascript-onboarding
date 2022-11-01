function deleteSameWord(cryptogram) {
  let str = cryptogram;
  let word = '';
  let flag = false;
  for (let i = 1; i < str.length; i++) {
    word = str[i];
    if (str[i - 1] == word) {
      str = str.replace(word + word, '');
      flag = true;
      i--;
    }
  }
  return [str, flag];
}

function problem2(cryptogram) {
  var answer;
  answer = deleteSameWord(cryptogram);

  return answer;
}

module.exports = problem2;

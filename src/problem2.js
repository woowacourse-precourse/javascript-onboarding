function problem2(cryptogram) {
  var answer = [];

  let cur = 0;
  while (cur < cryptogram.length) {
    if (answer.length == 0) {
      answer.push(cryptogram[cur]);
      cur++;
    } else if (answer[answer.length - 1] != cryptogram[cur]) {
      answer.push(cryptogram[cur]);
      cur++;
    } else {
      while (
        answer[answer.length - 1] == cryptogram[cur] &&
        cur < cryptogram.length
      ) {
        cur++;
      }
      answer.pop();
    }
  }
  answer = answer.join('');
  return answer;
}

module.exports = problem2;

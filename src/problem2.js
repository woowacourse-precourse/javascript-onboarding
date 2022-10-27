function problem2(cryptogram) {
  let answer = cryptogram.split('');
  let cnt = 0;
  while (cnt !== answer.length) {
    if (answer[cnt] === answer[cnt + 1]) {
      answer.splice(cnt, 2);
      cnt = 0;
    } else {
      cnt++;
    }
  }

  return answer;
}

module.exports = problem2;

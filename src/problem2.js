function problem2(cryptogram) {
  var answer = "";
  let idx = -1;

  for (let i = 0; i < cryptogram.length; i++) {
    if (answer[idx] === cryptogram[i]) {
      idx--;
      answer = answer.slice(0, answer.length - 1);
    } else {
      idx++;
      answer += cryptogram[i];
    }
  }

  return answer;
}

module.exports = problem2;

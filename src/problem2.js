function problem2(cryptogram) {
  let answer = [];
  for (let i = 0; i < cryptogram.length; i++) {
    answer.push(cryptogram[i]);
    if (answer[answer.length - 1] == answer[answer.length - 2]) {
      answer.pop();
      answer.pop();
    }
  }
  return answer.join("");
}

module.exports = problem2;

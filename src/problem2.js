function problem2(cryptogram) {
  let answer = [];
  let prev = "";
  for (let i = 0; i < cryptogram.length; i++) {
    if (prev === cryptogram[i]) {
      answer.pop();
      prev = answer[answer.length - 1];
    } else {
      answer.push(cryptogram[i]);
      prev = cryptogram[i];
    }
  }
  return answer.join("");
}

module.exports = problem2;

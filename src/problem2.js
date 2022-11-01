function problem2(cryptogram) {
  let array = cryptogram.split("");
  let answer = [];

  for (const elemen of array) {
    if (elemen === answer[answer.length - 1]) {
      answer.pop();
    } else {
      answer.push(elemen);
    }
  }

  return answer.join("");
}

module.exports = problem2;

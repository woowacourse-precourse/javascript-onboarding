function problem2(cryptogram) {
  let answer = [];
  let cur = 0;

  cryptogram = [...cryptogram];

  for (let i = 0; i < cryptogram.length; i++) {
    cur = cryptogram[i];
    if (answer[answer.length - 1] === cur) {
      answer.pop();
    } else {
      answer.push(cur);
    }
  }

  return answer.join("");
}

module.exports = problem2;

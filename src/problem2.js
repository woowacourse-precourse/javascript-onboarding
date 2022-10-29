function problem2(cryptogram) {
  let answer = [];
  let cur;
  let prev;

  cryptogram = [...cryptogram];

  for (let i = 0; i < cryptogram.length; i++) {
    cur = cryptogram[i];
    if (answer[answer.length - 1] === cur) {
      prev = answer.pop();
    } else if (prev === cur) {
      continue;
    } else {
      answer.push(cur);
      prev = cur;
    }
  }

  return answer.join("");
}

module.exports = problem2;

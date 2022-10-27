function problem2(cryptogram) {
  let answer = cryptogram;
  let tracker = 0;

  do {
    let isRemoved = 0;
    for (let i = 0; i < length(cryptogram); i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        tracker = tracker + 1;
        continue;
      }

      if (tracker != 0) {
        if (i - tracker === 0) {
          answer = answer.slice(i + 1, length(answer));
        } else if (i - tracker != 0) {
          answer = answer.slice(0, i - (tracker + 1)) + answer.slice(i + 1, length(answer) - 1);
        }
        isRemoved++;
        i = i - (tracker + 1);
        tracker = 0;
      }
    }
  } while (isRemoved != 0);

  return answer;
}

module.exports = problem2;
function problem2(cryptogram) {
  let answer = cryptogram;
  let tracker = 0;
  let isRemoved = 0;

  do {
    isRemoved = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        tracker = tracker + 1;
        continue;
      }

      if (tracker != 0) {
        //만약 중복 문자가 answer[0]에서 시작한다면,
        if ((i - tracker) === 0) {
          answer = answer.slice(i + 1, answer.length);
        } else if ((i - tracker) != 0) {
          answer = answer.slice(0, i - tracker) + answer.slice(i + 1, answer.length);
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
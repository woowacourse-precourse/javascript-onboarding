function problem2(cryptogram) {
  const isInvalid =
    cryptogram.length < 1 ||
    cryptogram.length > 1000 ||
    cryptogram.toLowerCase() !== cryptogram;

  if (isInvalid) return;

  let cnt = 0; // 중복된 횟수 (중복 2회 이상 고려)
  let answer = [];

  cryptogram.split("").forEach((v, i) => {
    if (answer[answer.length - 1] !== v) {
      answer.push(v);
      cnt = 0;
    } else {
      if (cryptogram[i + 1] !== v) {
        answer = answer.slice(0, answer.length - cnt);
        cnt = 0;
      } else answer.push(v);
    }
    cnt++;
  });

  return answer.join("");
}

module.exports = problem2;

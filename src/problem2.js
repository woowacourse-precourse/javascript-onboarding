function problem2(cryptogram) {
  let answer;
  const cryptogramArr = cryptogram.split("");

  let cnt = 0;
  while (cnt < cryptogramArr.length) {
    if (cryptogramArr[cnt] === cryptogramArr[cnt + 1]) {
      cryptogramArr.splice(cnt, 2);
      cnt = 0;
    } else {
      cnt++;
    }
  }
  answer = cryptogramArr.join("");
  return answer;
}

module.exports = problem2;

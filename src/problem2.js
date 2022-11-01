function problem2(cryptogram) {
  let cryptogramArr = cryptogram.split("");
  let i = 0;

  if (cryptogramArr.length === 0) return "";

  // i === cryptogramArr.length => 모든 글자 체크 끝을 의미
  while (i !== cryptogramArr.length) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      cryptogramArr.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  const answer = cryptogramArr.join("");

  return answer;
}

module.exports = problem2;

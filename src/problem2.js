function problem2(cryptogram) {
  // 배열로 나누어서 확인하기
  while (1) {
    let tmp = "";
    let firstChk = true;
    const arr = cryptogram.split("");
    if (arr.length) tmp += arr[0];
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] === arr[i - 1]) {
        if (firstChk) {
          tmp = tmp.slice(0, -1);
          firstChk = false;
        }
        continue;
      } else {
        tmp += arr[i];
        firstChk = true;
      }
    }
    if (tmp === cryptogram) break;
    else cryptogram = tmp;
  }
  return cryptogram;
}

module.exports = problem2;

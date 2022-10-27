function problem2(cryptogram) {
  let cryptArr = [...cryptogram];
  let cnt = 0;
  while (cnt !== cryptArr.length - 1 && cryptArr.length !== 0) {
    if (cryptArr[cnt] === cryptArr[cnt + 1]) {
      cryptArr.splice(cnt, 2); // 현재 문자와 다음 문자가 동일할 경우 배열에서 해당 두 문자를 제거해준다.
      cnt = 0;
    } else {
      cnt++;
    }
  }
  return cryptArr.join('');
}

module.exports = problem2;

function problem2(cryptogram) {
  let cryptoArray = [...cryptogram];
  let cnt = 0;
  while (cnt !== cryptoArray.length - 1 && cryptoArray.length !== 0) {
    if (cryptoArray[cnt] === cryptoArray[cnt + 1]) {
      cryptoArray.splice(cnt, 2); // 현재 문자와 다음 문자가 동일할 경우 배열에서 해당 두 문자를 제거해준다.
      cnt = 0;
    } else {
      cnt++;
    }
  }
  const answer = cryptArr.join('');
  return answer;
}

module.exports = problem2;

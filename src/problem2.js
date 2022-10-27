function problem2(cryptogram) {
  let cryptArr = [...cryptogram];
  let cnt = 0;
  while (cnt !== cryptArr.length - 1 && cryptArr.length !== 0) {
    if (cryptArr[cnt] === cryptArr[cnt + 1]) {
      cryptArr.splice(cnt, 2);
      cnt = 0;
    } else {
      cnt++;
    }
  }
  return cryptArr.join('');
}

module.exports = problem2;

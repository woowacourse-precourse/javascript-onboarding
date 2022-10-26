function problem2(cryptogram) {
  const arr = cryptogram.split("");
  if (arr[cnt] === arr[cnt + 1]) {
    arr.splice(cnt, 2);
  }
}

module.exports = problem2;

function problem2(cryptogram) {
  let cnt = 0;
  const arr = cryptogram.split("");
  while (cnt <= arr.length - 1) {
    if (arr[cnt] === arr[cnt + 1]) {
      arr.splice(cnt, 2);
      cnt = cnt > 0 ? cnt - 3 : 0;
    } else {
      cnt += 1;
    }
  }
  return arr.join("");
}

module.exports = problem2;

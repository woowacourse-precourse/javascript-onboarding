function problem2(cryptogram) {
  let cryptogramArr = [];
  let answer = "";

  for (let i = 0; i < cryptogram.length; i++) {
    cryptogramArr.push(cryptogram[i]);
  }

  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] == cryptogramArr[i + 1]) {
      cryptogramArr.splice(i, 2);
      i = -1;
    }
  }
}

module.exports = problem2;

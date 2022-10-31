function problem2(cryptogram) {
  let cryptogramArr = [];
  let answer = "";

  if (
    cryptogram.length >= 1 &&
    cryptogram.length <= 1000 &&
    cryptogram == cryptogram.toLowerCase()
  ) {
    for (let i = 0; i < cryptogram.length; i++) {
      cryptogramArr.push(cryptogram[i]);
    }

    for (let i = 0; i < cryptogramArr.length; i++) {
      if (cryptogramArr[i] == cryptogramArr[i + 1]) {
        cryptogramArr.splice(i, 2);
        i = -1;
      }
    }
    answer = cryptogramArr.join("");
  }

  return answer;
}

module.exports = problem2;

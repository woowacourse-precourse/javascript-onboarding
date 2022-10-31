function problem2(cryptogram) {
  //문자열 배열로 쪼개기
  let splitCryptogram = cryptogram.split("");
  let count = 0;

  for (let i = 0; i < splitCryptogram.length; i++) {
    if (splitCryptogram[i] === splitCryptogram[i + 1]) {
      count = 1;
      let j = i + 1;
      while (splitCryptogram[j] === splitCryptogram[j + 1]) {
        j += 1;
        count += 1;
      }
      splitCryptogram.splice(i, count + 1);
      i = -1;
      count = 0;
    }
  }
  //배열 문자열로 변경하기
  return splitCryptogram.join("");
}

module.exports = problem2;

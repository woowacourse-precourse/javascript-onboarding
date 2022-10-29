function problem2(cryptogram) {
  // 연속하는 중복 문자들을 삭제한 결과를 반환하는 로직을 만든다.
  let cryptogramArray = cryptogram.split("");

  let prevChr = cryptogramArray[0];

  for (let i = 1; i < cryptogramArray.length; i++) {
    if (prevChr === cryptogramArray[i]) {
      delete cryptogramArray[i - 1];
      delete cryptogramArray[i];
    } else {
      prevChr = cryptogramArray[i];
    }
  }

  cryptogramArray = cryptogramArray.filter((chr) => chr !== undefined);

  return cryptogramArray.join("");
  // 반환한 결과의 문자가 연속하는 중복 문자가 없도록 반복한다.
  // 더 이상 중복 문자가 없다면 결과를 반환한다.
}

module.exports = problem2;

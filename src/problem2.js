function problem2(cryptogram) {
  let cryptogramArr = cryptogram.split('');
  let sameStringIndex = 0;

  // 1. 연속된 중복 문자의 시작 index와 끝 index를 구하는 기능
  for (let i = 0; i < cryptogramArr.length; i++) {
    if (cryptogramArr[i] === cryptogramArr[i + 1]) {
      sameStringIndex = i + 1;
      while (true) {
        if (cryptogramArr[i] === cryptogramArr[sameStringIndex]) break;
        sameStringIndex++;
      }
      // 2. 연속된 중복 문자의 시작 index와 끝 index에 해당하는 문자를 없애는 기능
      for (let j = i; j <= sameStringIndex; j++) {
        cryptogramArr[j] = '';
      }
    }
  }
  return
}

module.exports = problem2;
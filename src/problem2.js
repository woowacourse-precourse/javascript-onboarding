function delOverlap(cryptogram) {
  let sIdx = -1;
  for (let i = 1; i <= cryptogram.length; i++) {
    if (cryptogram[i - 1] === cryptogram[i] && sIdx < 0) {
      sIdx = i - 1;
    } else if (sIdx >= 0 && cryptogram[i - 1] !== cryptogram[i]) {
      let tmp = cryptogram.slice(sIdx, i);
      cryptogram = cryptogram.replace(tmp, '');
      return delOverlap(cryptogram);
    }
  }

  return cryptogram;
}

function problem2(cryptogram) {
  /**
   * 연속하는 중복 문자들을 삭제한 결과를 return 하도록한다.
   * */

  return delOverlap(cryptogram);
}

module.exports = problem2;


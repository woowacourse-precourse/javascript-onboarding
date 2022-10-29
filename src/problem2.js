function problem2(cryptogram) {

  // 제한 사항 만족하는지 체크
  // - cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
  // - cryptogram은 알파벳 소문자로만 이루어져 있다.
  if (cryptogram.length < 1 || cryptogram.length > 1000) return false;
  if (!(/^[a-z]+$/.test(cryptogram))) return false;

  /**
   * 연속하는 중복 문자가 있는지 체크 후 삭제하는 함수
   * @param {string} str 
   * @returns 연속하는 중복 문자 제거된 문자열 반환
   */
  function checkOverlap (str) {
    const regex = /([a-z])\1{1,}/g;
    let tempStr = str;
    
    while (regex.test(tempStr)){
      tempStr = tempStr.replace(regex, '');
    };
    
    return tempStr;
  };
  
  return checkOverlap(cryptogram);
}
module.exports = problem2;

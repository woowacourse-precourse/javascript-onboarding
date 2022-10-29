function problem4(word) {
  let answer;
  const isAlpha = word => {
    return /[a-zA-Z]/.test(word);
  }
  const isUpperCase = word => {
    return /[A-Z]/.test(word);
  }
  /**
   * 대문자 변환 규칙(합이 155이다.) 적용 함수
   * @param {String} word 
   * @returns {String}
   */
  const getConvertedUpperWord = word => {
    return String.fromCharCode(155 - word.charCodeAt());
  }
  /**
   * 소문자 변환 규칙(합이 219이다.) 적용 함수
   * @param {String} word 
   * @returns {String}
   */
  const getConvertedLowerWord = word => {
    return String.fromCharCode(219 - word.charCodeAt());
  }
  return answer;
}

module.exports = problem4;
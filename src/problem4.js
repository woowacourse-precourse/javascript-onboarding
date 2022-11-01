function problem4(word) {
  let answer = '';
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
  /**
   * 문자 하나를 받고, 이것이 알파벳이 아니라면 그대로 리턴한다. 반대로 알파벳이라면, 대소문자를 구분해 청개구리 규칙에 의해 변환해 리턴해주는 함수.
   * @param {String} word 
   * @returns {String}
   */
  const convertWord = word => {
    if (!isAlpha(word)) return word;
    
    return isUpperCase(word) ? getConvertedUpperWord(word) : getConvertedLowerWord(word);
  }

  [...word].forEach((ele) => {
      answer += convertWord(ele);
  }
      );
  return answer;
}

module.exports = problem4;
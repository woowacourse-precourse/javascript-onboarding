function problem4(word) {
  // 제한사항 만족하는지 체크
  // - 길이가 1 이상 1,000 이하인 문자열
  // - 알파벳 외의 문자는 변환하지 않음
  // - 대문자는 대문자로, 소문자는 소문자로 변환
  if (word.length < 1 || word.length > 1000) return false;
  const result = word.replace(/[a-zA-Z]/g, replacer);

  /**
   * 알파벳 대소문자 체크 후 변환하는 기능
   * @param {string} string 
   */
  function replacer(string){
    let letter = string;
    // 대소문자 체크 후 변환
    return (isUpperCase(letter)) ? letter : letter;
  };

  /**
   * 대소문자 구분 하는 함수
   * - 대문자는 true, 소문자는 false로 반환
   * @param {string} alphabet 
   * @returns {boolean}
   */
  function isUpperCase(alphabet){
    return (alphabet === alphabet.toUpperCase()) ? true : false;
  };

}

module.exports = problem4;

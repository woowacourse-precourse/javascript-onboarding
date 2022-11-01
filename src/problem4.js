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
    return (isUpperCase(letter)) ? replaceAlphabet(letter, 'upper') : replaceAlphabet(letter, 'lower');
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

  /**
   * 알파벳 변환하는 함수
   * @param {string} alphabet 
   * @param {string} letterCaseType 'upper' | 'lower'
   * @returns {string}
   */
  function replaceAlphabet(alphabet, letterCaseType){

    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    let idx;

    if (!(letterCaseType === 'upper' | letterCaseType === 'lower')) console.log('대소문자 타입을 지정해주세요.');
    switch(letterCaseType){
      case 'upper' :
      idx = UPPERCASE.split('').indexOf(alphabet);
      return UPPERCASE[25 - idx];
      break;
      
      case 'lower' :
      idx = LOWERCASE.split('').indexOf(alphabet);
      return LOWERCASE[25 - idx];
      break;
    };
  };
  return result;
}

module.exports = problem4;

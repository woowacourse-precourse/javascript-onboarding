/**
 * 청개구리 사전을 참고하여 엄마 말씀을 반대로 변환
 * - 알파벳 외의 문자는 변환하지 않는다
 * @function problem4
 * @param {string} word 청개구리 엄마 말씀
 * @returns {string} result 변환된 문장
 *  */

function problem4(word) {
  const words = word.split('');
  const result = [];
  for (char of words) {
    const pattern = /[a-zA-Z]/;
    if (pattern.test(char)) {
      const targetASCII = char.charCodeAt();
      result.push(convertToFrogDictionary(targetASCII));
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

/**
 * @function convertToFrogDictionary
 * @returns {string} 영문 대소문자의 ASCII CODE를 한글자씩 입력 받아 반대로 바꿔 리턴
 *  */
function convertToFrogDictionary(targetChar) {
  if (targetChar >= 65 && targetChar <= 90) {
    return String.fromCharCode(90 - (targetChar - 65));
  } else if (targetChar >= 97 && targetChar <= 122) {
    return String.fromCharCode(122 - (targetChar - 97));
  }
}

module.exports = problem4;

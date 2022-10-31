/* 알파벳을 담고 있을 배열 생성 */
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/* 알파벳을 역순으로 담고 있을 배열 생성 */
const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse();

function problem4(word) {
  let answer = '';
  for (let idx = 0 ; idx < word.length ; idx++) {
    answer += useDictionary(word[idx]);
  }
  return answer;
}

/* 사전을 참고하여 문자열을 변환해주는 함수 */
function useDictionary(char) {
  const letter = findDictionary(char);
  if (isUpper(char) === false) {
    return letter.toLowerCase();
  }
  return letter;
}

/* 사전 참고 함수 */
function findDictionary(char) {
  const index = alphabets.indexOf(char.toUpperCase());
  const letter = dictionary[index];
  /* 사전에 없는 문자일 경우, 입력으로 들어온 문자 그대로 return */
  return letter === undefined ? char : letter;
}

/* 대소문자 판단 함수 */
function isUpper(char) {
  return char.toUpperCase() === char;
}

/** 알파벳을 제외한 숫자나 특수문자, space 같은 문자들에 대한 별도의 예외 처리는 필요없을 것 같다. 
 * 해당 문자들은 uppercase 혹은 lowercase로 변환하여도 변경되지 않기 때문이다.
 */

module.exports = problem4;

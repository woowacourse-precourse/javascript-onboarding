/**
 * problem 2
 * @param {string} cryptogram 암호문
 * @returns {string}
 */
function problem2(cryptogram) {
  const answer = reduceWord(cryptogram);
  return answer;
}

/**
 * 평문이 될 때 까지 연속된 중복 문자들을 삭제하는 함수
 * @param {string} word 암호문 
 * @returns {string} 평문
 */
const reduceWord = (word) => {
  let new_word = word;
  for (let i = 0; i < word.length; i++) { //글자 수 만큼
    new_word = new_word.replace(/([a-z])\1{1,}/, ''); // 2번 이상 연속된 글자를 삭제
  }
  return new_word;
}

module.exports = problem2;

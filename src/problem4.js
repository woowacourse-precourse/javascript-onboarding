/**
 * @author 허민
 * @param {string} letter - 변환하고자 하는 단어
 * @returns 알파벳 외의 문자는 인자가 동일하게 return 된다. 소문자일 때는 대문자, 대문자일 때는 소문자로 return 합니다.
 */
const reverse = (letter) => {
  // 제한사항 :: 알파벳 외에 문자는 변환하지 않는다.
  if (letter.match(/[^a-z]/i)) return letter;

  // 소문자일 때 알파벳을 반대로 변환
  if (letter >= 'a' && letter <= 'z') {
    return String.fromCharCode(
      'z'.charCodeAt(0) - letter.charCodeAt(0) + 'a'.charCodeAt(0),
    );
  }

  // 대문자일 때 알파벳을 반대로 변환
  if (letter >= 'A' && letter <= 'Z') {
    return String.fromCharCode(
      'Z'.charCodeAt(0) - letter.charCodeAt(0) + 'A'.charCodeAt(0),
    );
  }
};

function problem4(word) {
  const answer = word.replace(/./g, (letter) => {
    return reverse(letter);
  });

  return answer;
}

module.exports = problem4;

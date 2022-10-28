const reverse = (letter) => {
  // 예외상황 :: 알파벳 외에 문자는 변환하지 않는다.
  if (letter.match(/[^a-z]/i)) return letter;

  // 소문자일 때 알파벳을 반대로 변환
  if (letter >= 'a' && letter <= 'z') {
    return String.fromCharCode(
      'z'.charCodeAt(0) - letter.charCodeAt(0) + 'a'.charCodeAt(0)
    );
  }

  // 대문자일 때 알파벳을 반대로 변환
  if (letter >= 'A' && letter <= 'Z') {
    return String.fromCharCode(
      'Z'.charCodeAt(0) - letter.charCodeAt(0) + 'A'.charCodeAt(0)
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

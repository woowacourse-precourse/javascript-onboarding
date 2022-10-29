// 알파벳 소문자 반대로 변환하여 반환하는 기능

function uppercase(num) {
  return String.fromCharCode(65 + (90 - num));
}

function problem4(word) {
  let answer = '';

  for (let x of word) {
    const asciiX = x.charCodeAt();

    if (asciiX >= 65 && asciiX <= 90) {
      const reverseUpper = uppercase(asciiX);
      answer += reverseUpper;
    }
  }

  return answer;
}

module.exports = problem4;

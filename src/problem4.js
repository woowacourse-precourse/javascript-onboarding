function problem4(word) {
  const reversedArr = word.split("").map((el) => {
    const e = el.toUpperCase().charCodeAt(0);
    if (e >= 65 && e <= 90)
      return String.fromCharCode(
        Math.abs(el.toUpperCase().charCodeAt(0) - 90) + 65
      );
    return el;
  });
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      reversedArr[i] = reversedArr[i].toLowerCase();
    }
  }
  return reversedArr.join("");
}

module.exports = problem4;

// charcode 배열 변환
// 배열 map으로 계산
// 다시 문자열로 변환
// 대소문자 확인

// 영문자 이외의 문자는 그대로

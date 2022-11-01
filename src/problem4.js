function problem4(word) {
  // 매개변수로 주어진 word를 Unicode 값으로 치환하여 청개구리 사전에 해당하는 값으로 변환해준다.
  const reversedArr = word.split("").map((el) => {
    // 배열로 변환된 각 문자들을 대문자로 변환한 뒤 unicode 값으로 치환해준다.
    const e = el.toUpperCase().charCodeAt(0);
    // 영문자인 값들만 변환
    if (e >= 65 && e <= 90)
      // unicode 값을 청개구리 사전 값으로 변환 영문자로 재치환
      return String.fromCharCode(Math.abs(e - 90) + 65);
    // 영문자가 아닌 값은 그대로 리턴
    return el;
  });

  // 매개변수 word의 길이만큼 반복하여
  for (let i = 0; i < word.length; i++) {
    // word의 i번째 문자가 대문자가 아니라면
    if (word[i].toUpperCase() !== word[i]) {
      // 해당 문자를 소문자로 변환
      reversedArr[i] = reversedArr[i].toLowerCase();
    }
  }
  // 배열로 펼쳐진 문자들을 합하여 리턴
  return reversedArr.join("");
}

module.exports = problem4;

// charcode 배열 변환
// 배열 map으로 계산
// 다시 문자열로 변환
// 대소문자 확인

// 영문자 이외의 문자는 그대로

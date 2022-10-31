function problem4(word) {
  let answer = "";
  [...word].forEach((e) => {
    const ASCII = e.charCodeAt();
    let newASCII = 32;
    if (ASCII >= 65 && ASCII <= 90) newASCII = 90 - (ASCII - 65);
    else if (ASCII >= 97 && ASCII <= 122) newASCII = 122 - (ASCII - 97);
    else newASCII = ASCII;
    answer += String.fromCharCode(newASCII);
  });
  return answer;
}

module.exports = problem4;

// 기능 구현
// 1. 문자열을 루프돌며 아스키 코드를 통해 대칭인 값 구하기, 대문자(65~90) 소문자(97~122)
// 2. 대문자의 경우 90-(현재문자-65)
//    소문자의 경우 122-(현재문자-97)
//    알파벳 외의 글자는 그대로 번역
// 3. 번역 결과 출력

function problem3(number) {
  var answer;
  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    // i를 string 으로 변환
    let str = String(i);
    // 끝 문자열이 3, 6 혹은 9인지 검사
    for (let j = 0; j <= str.length; j++) {
      if (
        str[str.length - 1] === "3" ||
        str[str.length - 1] === "6" ||
        str[str.length - 1] === "9"
      )
        cnt++;
      // 끝 문자열만 제거 이후 반복
      str = str.slice(0, -1);
    }
  }
  answer = cnt;
  return answer;
}

module.exports = problem3;

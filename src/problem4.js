function problem4(word) {
  //입력: 문자열
  //출력: 거꾸로 변환한 문자열
  //해야할 일: word 가 대문자인지 소문자인지 확인 후, 거꾸로 reverse된 알파벳 순서에 맞게 치환하여 리턴
  let answer = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperReverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let lowerReverse = "zyxwvutsrqponmlkjihgfedcba";

  for (let i = 0; i < word.length; i++) {
    if (upper.indexOf(word[i]) !== -1) {
      let n = upper.indexOf(word[i]);
      answer = answer + upperReverse[n];
    } else if (lower.indexOf(word[i]) !== -1) {
      let n = lower.indexOf(word[i]);
      answer = answer + lowerReverse[n];
    } else {
      answer = answer + word[i];
    }
  }
  return answer;
}

module.exports = problem4;

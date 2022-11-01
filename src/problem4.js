function problem4(word) {
  let answer = "";
  const wordArr = word.trim().split(" ");
  wordArr.forEach((el, idx) => {
    let tmpArr = [...el];
    let tmp = changeWord(tmpArr);
    answer += tmp;
  })
  return answer.trim();
}


const changeWord = (wordArr) => {
  let ansStr = "";
  wordArr.map((el) => {
    let asci = el.charCodeAt(0);
    let ans = 0;
    // 대문자는 아스키코드 65부터 90까지
    if (asci >= 65 && asci <= 90) {
      // 총 알파벳이 26개이므로 13개째, 14개째를 기준으로 계산을 다르게 한다.
      if (asci <= 77) {
        ans = 90 - (asci - 65);
      } else {
        ans = 65 + (90 - asci);
      }
      // 소문자는 아스키코드 97부터 122까지
    } else if (asci >= 97 && asci <= 122) {
      if (asci <= 109) {
        ans = 122 - (asci - 97);
      } else {
        ans = 97 + (122 - asci);
      }
    }
    ansStr = ansStr + String.fromCharCode(ans);
  })
  return ansStr + " ";
}

module.exports = problem4;

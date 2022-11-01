// 기능 1 : 문자별 배열 생성
function splitString(str) {
  const strArr = str.split("");
  return strArr;
}

// 기능 2 : 중복 문자열 제거
function deduplicate(strArr) {
  let cnt = 0;
  while (strArr.length !== 0 && cnt !== strArr.length) {
    if (strArr[cnt] === strArr[cnt + 1]) {
      strArr.splice(cnt, 2);
      cnt = 0;
    } else cnt++;
  }
  return strArr.join("");
}
function problem2(cryptogram) {
  var answer;
  const strArr = splitString(cryptogram);
  answer = deduplicate(strArr);

  return answer;
}

module.exports = problem2;

/* 기능 목록
1. 주어진 문자열을 문자 별로 자르고 배열에 저장하는 기능
2. 현재 문자와 다음 문자가 일치할 경우 중복된 문자를 삭제하는 기능
*/

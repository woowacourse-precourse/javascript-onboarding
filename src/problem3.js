/*
  기능목록
  1. number로 입력된 숫자를 문자열로 변환한다.
  2. 문자열의 각 문자에 3, 6, 9가 있는지 확인하고, 3, 6, 9가 있으면 clap을 추가한다.
*/ 
function problem3(number) {
  var answer;
  answer = countClap(number);
  return answer;
}

function countClap(number) {
  // 3, 6, 9가 포함된 숫자의 개수를 세는 함수
  var clapCount = 0;
  var curr = ""; // 현재 문자
  for (let i = 1; i <= number; i++) {
    curr = i.toString();
    for (let j = 0; j < curr.length; j++) {
      if (curr[j] === "3" || curr[j] === "6" || curr[j] === "9") {
        clapCount++;
      }
    }
  }
  return clapCount;
}

module.exports = problem3;

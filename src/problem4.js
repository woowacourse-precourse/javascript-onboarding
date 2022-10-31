// < 기능 목록 >
// 1. word를 청개구리 사전대로 변환한다.
//    [예외처리] 알파벳 외의 문자가 있을 수 있다.
//    [예외처리] 소문자/대문자를 구분해야한다.

function problem4(word) {
  var answer = "";
  
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var c of word) {
    var i;
    for(var i = 0; i < 26; i++) {
      if(c == upper[i]) {
        answer += upper[25-i];
        break;
      }
      if(c == lower[i]) {
        answer += lower[25-i];
        break;
      }
    }
    if(i >= 26) answer += c; // 알파벳 이외 문자일때
  }

  return answer;
}

module.exports = problem4;

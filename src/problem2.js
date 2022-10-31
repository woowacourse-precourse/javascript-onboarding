// < 기능 목록 >
// 1. cryptogram를 순회하면서 중복되는 문자열을 삭제한다.
//    [예외처리] 중복되는 문자가 두개가 아닐 수 있음
//    [예외처리] 더이상 중복되는 문자가 없으면 종료

function problem2(cryptogram) {
  var answer = cryptogram;

  for(var i = 0; i < answer.length; i++) {
    if(answer.charAt(i) == answer.charAt(i+1)) { // 중복된 문자가 있으면

      // 중복된 문자의 갯수를 세는 작업
      var overlap = answer.charAt(i);
      for(var j = i+1; j < answer.length; j++) {
        if(answer.charAt(i) != answer.charAt(j)) break;
        overlap += answer.charAt(i);
      }
      answer = answer.replace(overlap, ""); // 중복된 문자 삭제
      i--; // i번째 문자도 삭제되었으므로 i부터 다시 시작
    }
  }

  if(cryptogram == answer) return answer; // 중복되는 문자 없었음
  else return problem2(answer); // 새로운 암호문으로 다시 한번
}

module.exports = problem2;

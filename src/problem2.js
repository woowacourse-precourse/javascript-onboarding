function problem2(cryptogram) {
  var answer;

  // 제한 사항 위반 여부 검사
  if (violationChk(cryptogram)) {
  } else {
    // 제한 사항 위반 시 -1 리턴
    answer = -1;
  }

  return answer;
}

// 제한 사항 위반 검사 함수
function violationChk(str) {
  // 문자열의 길이가 1~1000 사이인지 검사
  var lengthChk = str.length > 0 && str.length <= 1000;

  // 소문자로만 이루어져 있는지 검사
  var lowerChk = str.toLowerCase() === str;

  return lengthChk && lowerChk;
}

module.exports = problem2;

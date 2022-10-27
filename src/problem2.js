function problem2(cryptogram) {
  var answer;

  // 제한 사항 위반 여부 검사
  if (violationChk(cryptogram)) {
    answer = decryptor(cryptogram);
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

// 문자열에 연속되는 문자가 있는지 확인 후 제거하는 작업을 반복하는 함수
function decryptor(str) {
  var result = str;

  // 더 이상 연속되는 문자가 없을 때까지 반복
  while (true) {
    // 연속되는 문자를 저장할 set
    var charSet = new Set();

    // 연속되는 문자가 있을 시 true
    var checker = false;

    for (let i = 0; i < result.length; i++) {
      // 편집된 문자열을 순회하며 연속되는 문자가 있는지 검사
      if (result[i] === result[i + 1]) {
        // 연속되는 문자가 있으면 set에 저장
        charSet.add(result[i]);
        checker = true;
      }
    }

    // 연속되는 문자가 없이 for문이 끝나면 while문 탈출
    if (checker === false) {
      break;
    }

    // set에 담긴 문자들을 문자열에서 삭제
    charSet.forEach((char) => {
      result = result.replace(char + char, "");
    });
  }

  return result;
}

module.exports = problem2;

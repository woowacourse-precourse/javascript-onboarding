function problem6(forms) {
  var answer;

  // 제한사항 위반 확인
  if (violationChk(forms)) {
    // 순차적으로 배열들을 비교
    answer = selector(forms);
  } else {
    // 제한사항 위반 시 -1 리턴
    answer = -1;
  }

  return answer;
}

function violationChk(forms) {
  var result = true;

  // 크루 수가 1 ~ 10000명 사이인지 검사
  if (forms.length >= 1 && forms.length <= 10000) {
    for (var i = 0; i < forms.length; i++) {
      var emailAddr = forms[i][0];
      var nickName = forms[i][1];

      // 이메일 주소 길이 제한 검사
      if (emailAddr.length >= 11 && emailAddr.length < 20) {
        // 도메인 제한 검사
        if (domainChk(emailAddr)) {
          // 닉네임 길이 제한 검사
          if (nickName.length >= 1 && nickName.length < 20) {
            // 닉네임이 한글인지 검사
            for (var j = 0; j < nickName.length; j++) {
              if (!korChk(nickName[j])) {
                result = false;
              }
            }
          }
        }
      }
    }
  }

  return result;
}

// 도메인 제한 검사 함수
function domainChk(emailAddr) {
  return emailAddr.substr(emailAddr.length - 10) === "@email.com";
}

// 닉네임이 한글인지 체크하는 함수
function korChk(str) {
  // 정규식을 이용하여 검사
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}

// 주어진 배열을 하나씩 선택하여 비교 함수로 전달하고
// 결과를 set에 담아 중복 제거 후 오름차순으로 정렬하여 리턴
function selector(forms) {
  var set = new Set();
  var result = [];

  for (var i = 0; i < forms.length; i++) {
    var nick1 = forms[i][1];
    for (var j = i + 1; j < forms.length; j++) {
      var nick2 = forms[j][1];

      // 배열의 닉네임을 하나씩 순서대로 비교하여
      // 중복된 메일 주소를 리턴 받아 set에 저장하여 중복 제거
      if (comparator(nick1, nick2)) {
        set.add(forms[i][0]);
        set.add(forms[j][0]);
      }
    }
  }

  result = Array.from(set);

  // 중복 메일 주소 배열 오름차순으로 정렬하여 리턴
  return result.sort();
}

function comparator(nick1, nick2) {
  var result = false;

  for (var current = 0; current < nick1.length; current++) {
    // 마지막 문자인 경우 검사 안함
    if (current !== nick1.length - 1) {
      for (var check = 0; check < nick2.length; check++) {
        // nick1 문자열에서 한 글자씩 nick2와 비교
        if (nick1[current] === nick2[check]) {
          // 같은 문자가 있는 경우 다음 문자도 같은지 비교
          if (nick1[current + 1] === nick2[check + 1]) {
            result = true;
            break;
          }
        }
      }
      if (result === true) {
        break;
      }
    }
  }

  return result;
}

module.exports = problem6;

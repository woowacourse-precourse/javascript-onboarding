function problem6(forms) {
  var answer;

  if (violationChk(forms)) {
    answer = selector(forms);
  } else {
    answer = -1;
  }

  return answer;
}

function violationChk(forms) {
  var result = false;

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
            for (var i = 0; i < nickName.length; i++) {
              if (!korChk(nickName[i])) {
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

function selector(forms) {
  var set = new Set();
  var result = [];

  for (var i = 1; i < forms.length; i++) {
    var nick1 = forms[i][1];
    for (let j = i + 1; j < forms.length; j++) {
      var nick2 = forms[j][1];

      if (comparator(nick1, nick2)) {
        set.add(forms[i][0]);
        set.add(forms[j][0]);
      }
    }
  }

  result = Array.from(set);

  return result.sort();
}

module.exports = problem6;

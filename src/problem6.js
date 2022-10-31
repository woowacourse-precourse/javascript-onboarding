function problem6(forms) {
  var answer;

  if (violationChk) {
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
            if (korChk(nickName)) {
              result = true;
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

module.exports = problem6;

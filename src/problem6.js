function problem6(forms) {
  let answer = [];

  let emails = [];
  let nickNames = [];

  // 이메일과 닉네임을 분리
  for (let i = 0; i < forms.length; i++) {
    emails.push(forms[i][0]);
    nickNames.push(forms[i][1]);
  }

  // 전달된 이메일 형식이 email.comm 이고 길이가 11자 이상이거나 20자 미만인지 확인하는 함수
  function emailCheck(emails) {
    const findEmail = 'email.com';

    for (let i = 0; i < emails.length; i++) {
      if (emails[i].includes(findEmail) && emails[i].length >= 11 && emails[i].length < 20) {
        return true;
      } else {
        return false;
      }
    }
  };

  // 닉네임이 한글 이고 길이가 1자 이상 20자 미만인지 확인하는 함수
  function nickNameCheck(nickNames) {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    for (let i = 0; i < nickNames.length; i++) {
      if (korean.test(nickNames[i]) && nickNames[i].length >= 1 && nickNames[i].length < 20) {
        return true;
      } else {
        return false;
      }
    }
  };

  // 닉네임이 같은 글자가 연속적으로 포함되는지 확인하는 함수 구현중..
  function overlapNickNameCheck(emails, nickNames) {
    if (emailCheck(emails) && nickNameCheck(nickNames)) {
      let a = 0;
      let b = 0;
      let c = 0;
      for (let i = 0; i <= nickNames.length; i++) {
        if (nickNames[a][b] && nickNames[a][b + 1] == nickNames[a + 1][b] && nickNames[a + 1][b + 1]) {
          console.log('중복된 닉네임이 있습니다.');
        } else {
          console.log('중복된 닉네임이 없습니다.');
        }
      }
    } else {
      console.log('이메일 형식이 맞지 않거나 닉네임 형식이 맞지 않습니다.');
    }
  }

  overlapNickNameCheck(emails, nickNames);

  return answer;
}

module.exports = problem6;

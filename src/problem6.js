function problem6(forms) {
  let answer;

  let emails = [];
  let nickNames = [];

  // 이메일과 닉네임을 분리
  for (let i = 0; i < forms.length; i++) {
    emails.push(forms[i][0]);
    nickNames.push(forms[i][1]);
  }

  console.log(emails);
  console.log(nickNames);

  // 전달된 이메일 형식이 email.comm && 길이가 11자 이상이거나 20자 미만인지 확인하는 함수
  function emailCheck(emails) {
    let findEmail = 'email.com';

    for (let i = 0; i < emails.length; i++) {
      if (emails[i].includes(findEmail) && emails[i].length >= 11 && emails[i].length < 20) {
        return true;
      } else {
        return false;
      }
    }
  };

  emailCheck(emails);

  // 닉네임이 한글이고 
  function nameCheck(nickNames) {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    for (let i = 0; i < nickNames.length; i++) {
      if (korean.test(nickNames[i]) && nickNames[i].length >= 1 && nickNames[i].length < 20) {

      } else {
        console.log('한글이 아닙니다.');
      }
    }
  }

  return answer;
}

module.exports = problem6;

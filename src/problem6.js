function problem6(forms) {
  if (forms.length < 0 || 10000 < forms.length)
    return Error("설정된 범위를 넘어섭니다.");

  if (!checkValue(forms)) return;

  var answer;
  return answer;
}

const checkValue = (forms) => {
  for (let i = 0, formsLen = forms.length; i < formsLen; i++) {
    const [email, nickname] = forms[i];

    if (!isEmailTypeValid(email)) return false;
    if (!isNicknameTypeValid(nickname)) return false;
  }
  return true;
};

const isEmailTypeValid = (email) => {
  const re = /^[A-Za-z0-9]+@email.com/;
  if (email.length < 11 || 20 <= email.length || !re.test(email)) {
    console.log("이메일 형식이 잘못되었습니다");
    return false;
  }

  const isNicknameTypeValid = (nickname) => {
    const re = /[ㄱ-ㅎ|가-힣]/;
    if (nickname.length < 1 || 20 <= nickname.length || !re.test(nickname)) {
      console.log("닉네임 형식이 잘못되었습니다");
      return false;
    }

    return true;
  };

  return true;
};
module.exports = problem6;

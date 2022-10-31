function problem6(forms) {
  if (forms.length < 0 || 10000 < forms.length)
    return Error("설정된 범위를 넘어섭니다.");

  if (!checkValue(forms)) return;

  var answer;
  return answer;
}

const isEmailTypeValid = (email) => {
  const re = /^[A-Za-z0-9]+@email.com/;
  if (email.length < 11 || 20 <= email.length || !re.test(email)) {
    console.log("이메일 형식이 잘못되었습니다");
    return false;
  }

  return true;
};
module.exports = problem6;

function checkEmail(email) {
  let check = true;
  const elen = email.length;
  const reg_email = /^([0-9a-zA-Z_\.-]+)@email.com/;

  if (!reg_email.test(email) || elen < 11 || elen >= 20) return false;

  return check;
}

function checkNickname(name) {
  let check = true;
  const nlen = name.length;
  const reg_nickname = /^[ㄱ-ㅎ|가-힣]+$/;

  if (!reg_nickname.test(name) || nlen < 2 || nlen >= 20) return false;

  return check;
}

function problem6(forms) {
  let answer = new Set();

  for (let i = 0; i < forms.length; i++) {
    let name = forms[i][1];
    let crewEmail = forms[i][0];
    let check;

    check = checkNickname(name);
    if (!check) continue;

    check = checkEmail(crewEmail);
    if (!check) continue;

    // 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 지원자의 이메일 추가 기능
  }

  return answer;
}

module.exports = problem6;

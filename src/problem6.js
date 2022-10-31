/*
  구현할 기능 목록
  [O] 닉네임이 다른 닉네임과 중복처리 됐을 때, 이메일 목록에 해당 닉네임의 이메일을 넣는 기능
  [O] 해당 닉네임이 자기 자신을 제외한 다른 닉네임들과 중복인지 확인하는 기능 | return 값: true/false
  [O] 해당 문자열을 닉네임 배열이 포함하는 지 확인하는 기능 | return 값 : true/false
*/

function problem6(forms) {
  emailList = [];
  let nicknames = forms.map((form) => form[1]);
  forms.forEach((form, idx) => {
    let [email, nickname] = form;
    if (isNicknameDuplicate(nickname, nicknames, idx)) {
      emailList.push(email);
    }
  });
  emailList.sort();
  return emailList;
}

function isNicknameDuplicate(targetNickname, nicknames, index) {
  for (let i = 0; i < targetNickname.length - 1; i++) {
    let subStr = targetNickname.slice(i, i + 2);
    if (isNicknameIncludesSubstr(nicknames, subStr, index)) return true;
  }
  return false;
}

function isNicknameIncludesSubstr(nicknames, subStr, index) {
  return nicknames.some((nickname, idx) => index != idx && nickname.includes(subStr));
}

module.exports = problem6;

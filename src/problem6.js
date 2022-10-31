/*
  구현할 기능 목록
  [ ] 닉네임이 다른 닉네임과 중복처리 됐을 때, 이메일 목록에 해당 닉네임의 이메일을 넣는 기능
  [ ] 특정 닉네임을 2글자씩 분해하여, 해당 닉네임을 제외한 다른 닉네임들과 중복을 확인하는 기능 | return 값: true/false
  [ ] 해당 문자열을 닉네임 배열이 포함하는 지 확인하는 기능 | return 값 : true/false
*/

function problem6(forms) {
  emailList = [];
  nicknames = forms.map((form) => form[1]);
  forms.forEach((form, idx) => {
    let [email, nickname] = form;
    if (isNicknameDuplicate(nickname, nicknames, idx)) {
      emailList.push(email);
    }
  });
  emailList.sort();
  return emailList;
}

module.exports = problem6;

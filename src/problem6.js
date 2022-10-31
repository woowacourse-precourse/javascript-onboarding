/*
  ### 기능 목록

  1. 신청할 수 있는 이메일인지 확인하기

  */

function problem6(forms) {
  var answer = "";
  const regex = new RegExp(/^(\w{2,9})(@email\.com)$/);
  const email_Array = forms.filter((e) => {
    return regex.test(e[0]);
  });

  console.log(email_Array);

  return answer;
}

module.exports = problem6;

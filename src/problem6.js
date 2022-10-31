/*
  ### 기능 목록

  1. 신청할 수 있는 이메일인지 확인하기

  */

function problem6(forms) {
  const regex = /[\w]{2,9}(@email\.com)$/g;
  const email_Array = forms.filter((e) => {
    return e[0].search(regex) != null;
  });

  console.log(email_Array);

  return answer;
}

module.exports = problem6;

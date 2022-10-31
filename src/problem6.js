/*
  ### 기능 목록

  1. 정상적인 이메일인지 확인하기
  2. 정상적인 닉네임인지 확인하기
  3. 닉네임에 접근하여 두자리씩 비교해, 중복되는 사람을 이메일 보낼 배열에 넣는다.
  2-1. 이때 이미 배열 넣은 사람은 제외하고 비교한다.


  */

function problem6(forms) {
  var answer = "";
  const email_regex = new RegExp(/^(\w{2,10})(@email\.com)$/);
  const ninkname_regex = new RegExp(/^([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19})$/);

  const vaild_Array = forms.filter((e) => {
    return email_regex.test(e[0]) && ninkname_regex.test(e[1]);
  });

  console.log(vaild_Array);
  return answer;
}

module.exports = problem6;

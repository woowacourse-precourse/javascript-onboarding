function problem6(forms) {
  //변수 모음
  var answer;
  var email_set = [];
  var n = 0;

  //각 닉네임을 서로 확인하기 위해 반복문을 만든다
  for (let a = 0; a < forms.length; a++) {
    for (let b = 1; b < forms.length; b++) {
      for (let c = 0; c < forms[a][1].length - 1; c++) {
        for (let d = 0; d < forms[b][1].length - 1; d++) {
          //각 닉네임별로 두 글자 이상 중복이 있는지 확인한다
          if (
            forms[a][0] != forms[b][0] &&
            forms[a][1][c] + forms[a][1][c + 1] ==
              forms[b][1][d] + forms[b][1][d + 1]
          ) {
            //중복 된 닉네임이 속해있는 이메일을 email_set에 저장한다
            email_set[n] = forms[a][0];
            n += 1;
            email_set[n] = forms[b][0];
            n += 1;
          }
        }
      }
    }
  }
  //email_set에 속해있는 이메일을 중복제거하고, 오름차순 정렬한다
  var set = new Set(email_set);
  answer = [...set];
  answer = answer.sort();

  return answer;
}

module.exports = problem6;

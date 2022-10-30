function problem6(forms) {
  //변수 모음
  var answer;
  var email_set = [];
  var n = 0;

  //각 닉네임을 서로 확인하기 위해 반복문을 만든다
  for (let a = 0; a < forms.length; a++) {
    for (let b = 1; b < forms.length; b++) {
      for (let c = 0; c < forms[a][1].length - 1; c++) {
        for (let d = 0; d < forms[b][1].length - 1; d++) {}
      }
    }
  }

  return answer;
}

module.exports = problem6;

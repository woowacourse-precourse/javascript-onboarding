function problem6(forms) {
  //var answer;
  let answer = [];
  const ko = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let result = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length > 19) {
      return;
    }
    if (forms[i][0].substr(-10, 10) !== "@email.com") {
      return;
    }
    if (forms[i][1].length < 1 || forms[i][1].length > 19) {
      return;
    }
    if (ko.test(forms[i][1]) === false) {
      return;
    }
  }
  //중복 문자열 검사 함수
  for (let i = 0; i < forms.length; i++) {
    result.push([forms[i][1]]);
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const nick = forms[j][1].split("");
      result[i].push(nick[j] + nick[j + 1]);
    }
  }
  //중복 검사
  for (let i = 0; i < forms.length; i++) {
    let check = 0;
    for (let j = 1; j < result.length; j++) {
      if (forms[i][1].includes(result[check][j])) {
        answer.push(forms[i][0]);
      }
      break;
    }
    check++;
  }
  return answer.sort();
}

module.exports = problem6;

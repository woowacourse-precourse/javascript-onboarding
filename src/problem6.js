function problem6(forms) {
  let answer = [];
  let filter = [];

  for (let i = 0; i < forms.length; i++) {
    // forms[i][0] : 이메일, forms[i][1] : 닉네임
    let nicknameSplit = forms[i][1].split("");
    for (let j = 0; j < nicknameSplit.length - 1; j++) {
      filter.push(nicknameSplit[j] + nicknameSplit[j + 1]);
    }
  }

  let group = [];
  filter = [...new Set(filter)];
  for (let i = 0; i < filter.length; i++) {
    let same = [];
    for (let j = 0; j < forms.length; j++) {
      if (forms[j][1].includes(filter[i])) {
        same.push(forms[j][0]);
      }
    }
    group.push(same.sort());
  }
  for (let i = 0; i < group.length; i++) {
    if (group[i].length > 1) {
      answer.push(...group[i]);
    }
  }
  return answer;
}

module.exports = problem6;

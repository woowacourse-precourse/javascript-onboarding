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
    group.push(
      same.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
      })
    );
  }
  for (let i = 0; i < group.length; i++) {
    if (group[i].length > 1) {
      answer.push(...group[i]);
    }
  }
  answer = answer.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
  return [...new Set(answer)];
}
console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
    ["jasp@email.com", "박이김"],
    ["jp@email.com", "김이박"],
    ["qpw@email.com", "김이순"],
    ["teemo@email.com", "티모"],
    ["banana@email.com", "대위티모"],
    ["secondJm@email.com", "제이엠"],
    ["apple@email.com", "땷횱봵"],
    ["stran@email.com", "횱봵으"],
    ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"],
  ])
);

module.exports = problem6;

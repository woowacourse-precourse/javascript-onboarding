function problem6(forms) {
  let answer = new Set();
  const splittedNickname = {};

  for (let i = 0; i < forms.length; i++) {
    let [email, nickname] = forms[i];
    for (let j = 0; j < nickname.length - 1; j++) {
      let idx = splittedNickname[nickname.slice(j, j + 2)];
      if (idx) {
        answer.add(email);
        answer.add(forms[idx - 1][0]);
      } else {
        splittedNickname[nickname.slice(j, j + 2)] = i + 1;
      }
    }
  }
  return answer;
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);
module.exports = problem6;

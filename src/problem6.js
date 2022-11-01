function problem6(forms) {
  let answer;
  return answer;
}

function splitNickname(forms) {
  let nicknameArr = [];
  for (let i = 0; i < forms.length; i++) {
    nicknameArr.push(forms[i][1].split(""));
  }

  console.log(nicknameArr);
}

console.log(
  splitNickname([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;

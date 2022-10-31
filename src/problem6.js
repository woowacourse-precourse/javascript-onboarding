function problem6(forms) {
  var answer;
  const email = [];
  const nickname = [];
  forms.forEach((el) => {
    email.push(el[0]);
    nickname.push(el[1]);
  });
  for (const nick of nickname) {
    console.log(nick);
    let temp;
    for (let i = 0; i < nick.length - 1; i++) {
      temp = nick.slice(i, i + 2);
      console.log(temp);
    }
  }
  return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;

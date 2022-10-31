function problem6(forms) {
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length - 1; j++) {
      let name1 = forms[i][1];
      let name2 = forms[j][1];
      if (name1 === name2) {
        console.log(name1, name2);
        break;
      }
    }
  }
}

module.exports = problem6;
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

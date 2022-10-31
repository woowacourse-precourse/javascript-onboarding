function problem6(forms) {
  for (i = 0; i < forms.length; i++) {
    if (forms[i][0].includes("email.com")) {
      console.log(forms[i][0]);
    }
  }
  // return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;

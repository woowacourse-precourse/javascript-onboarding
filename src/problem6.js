function problem6(forms) {
  const checkpoints = [];
  const nicks = forms.map((form) => form[1]);
  for (let nick of nicks) {
    for (let i = 0; i < nick.length - 1; i++) {
      const chars = nick.slice(i, i + 2);
      checkpoints.push(chars);
    }
  }

  const targets = checkpoints.reduce((reduced, cur) => {
    if (checkpoints.indexOf(cur) !== checkpoints.lastIndexOf(cur)) {
      if (reduced.indexOf(cur)) reduced.push(cur);
    }
    return reduced;
  }, []);

  const result = [];
  for (let tg of targets) {
    for (let nick of nicks) {
      if (nick.indexOf(tg) > -1) {
        result.push(nick);
      }
    }
  }

  const f = forms.reduce((reduced, form) => {
    if (result.includes(form[1])) {
      reduced.push(form[0]);
    }
    return reduced;
  }, []);

  const s = [...f].sort();
  return s;
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

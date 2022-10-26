function problem6(forms) {
  let map = new Map();
  let answer = [];
  forms.forEach((person) => {
    const [_, id] = person;
    for (let i = 0; i < id.length - 1; i++) {
      map.set(id.substring(i, i + 2), map.get(id.substring(i, i + 2)) + 1 || 1);
    }
  });

  forms.forEach((person) => {
    const [mail, id] = person;
    let dic = [];
    for (let i = 0; i < id.length - 1; i++) {
      dic.push(id.substring(i, i + 2));
    }
    for (let j = 0; j < dic.length; j++) {
      if (map.get(dic[j]) > 1) answer.push(mail);
    }
  });
  return new Set(answer.sort());
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

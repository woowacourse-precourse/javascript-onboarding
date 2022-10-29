function problem6(forms) {
  const nickName = new Set();
  const result = new Set();
  const dict = {};

  forms.forEach((arr, idx) => {
    const [email, name] = arr;

    if (name.length >= 2) {
      for (let i = 0; i < name.length - 1; i++) {
        const str = name[i] + name[i + 1];
        if (nickName.has(str)) {
          result.add(email);
          result.add(dict[str]);
        } else {
          dict[str] = email;
          nickName.add(str);
        }
      }
    }
  });

  return result;
}

module.exports = problem6;

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

function problem6(forms) {
  const nickName = new Set();

  forms.forEach((arr, idx) => {
    const [email, name] = arr;

    if (name.length >= 2) {
      for (let i = 0; i < name.length - 1; i++) {
        const str = name[i] + name[i + 1];
        console.log(str);
      }
    }
  });

  return;
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

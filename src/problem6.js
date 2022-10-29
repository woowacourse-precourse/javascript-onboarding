function problem6(forms) {
  const nickName = new Set();
  let result = new Set();
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

  result = [...result].sort();
  return result;
}

module.exports = problem6;

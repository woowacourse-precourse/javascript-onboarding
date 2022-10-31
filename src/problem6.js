function findOverlapNickName({ email, name, nickName, dict, result }) {
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
  return result;
}

function problem6(forms) {
  const nickName = new Set();
  const dict = {};
  let result = new Set();

  forms.forEach((arr) => {
    const [email, name] = arr;

    if (name.length >= 2) {
      findOverlapNickName({ email, name, nickName, dict, result });
    }
  });

  result = [...result].sort();
  return result;
}

module.exports = problem6;

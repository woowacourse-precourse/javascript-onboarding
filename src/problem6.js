function getKeys(nickname) {
  const keys = [];
  let num = 2;
  while (num <= nickname.length) {
    let cur = 0;
    while (cur + num <= nickname.length) {
      keys.push(nickname.substr(cur, num));
      cur++;
    }
    num++;
  }
  return keys;
}

function problem6(forms) {
  const duplicates = {};
  forms.map((form) => {
    getKeys(form[1]).map((key) => {
      if (key in duplicates) {
        duplicates[key].push(form[0]);
      } else duplicates[key] = [form[0]];
    });
  });
  const result = Object.values(duplicates).reduce((result, duplicate) => {
    if (duplicate.length > 1) return result.concat(duplicate);
    return result;
  }, []);
  return [...new Set(result.sort())];
}

module.exports = problem6;

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
  forms.forEach((form) => {
    getKeys(form[1]).forEach((key) => {
      duplicates[key] = [...(duplicates[key] || []), form[0]];
    });
  });
  const result = Object.values(duplicates).reduce((resultList, duplicate) => {
    if (duplicate.length > 1) return [...resultList, ...duplicate];
    return resultList;
  }, []);
  return [...new Set(result.sort())];
}

module.exports = problem6;

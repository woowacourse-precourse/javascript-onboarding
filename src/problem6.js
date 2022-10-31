function problem6(forms) {
  let answer = [];
  let nickname;

  let duplicatedList = forms
    .map((el) => el[1])
    .reduce((acc, cur) => {
      for (let i = 0; i < cur.length - 1; i++) {
        nickname = cur.substr(i, 2);
        acc[nickname] ? (acc[nickname] += 1) : (acc[nickname] = 1);
      }
      return acc;
    }, {});

  for (let key in duplicatedList) {
    for (let i = 0; i < forms.length; i++) {
      if (duplicatedList[key] > 1 && forms[i][1].includes(key)) {
        answer.push(forms[i][0]);
      }
    }
  }

  return [...new Set(answer)].sort();
}

module.exports = problem6;

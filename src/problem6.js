function problem6(forms) {
  let answer = []
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

  return;
}

module.exports = problem6;

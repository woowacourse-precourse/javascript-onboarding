function problem6(forms) {
  let answer = [];
  let tmp = new Set();
  let names = new Map();

  for (let user of forms) {
    for (let i = 0; i < user[1].length - 1; i++) {
      let word = user[1][i] + user[1][i + 1];
      if (names.has(word)) {
        tmp.add(names.get(word));
        tmp.add(user[0]);
        break;
      } else {
        names.set(word, user[0]);
      }
    }
  }

  answer = Array.from(tmp).sort();

  return answer;
}

module.exports = problem6;

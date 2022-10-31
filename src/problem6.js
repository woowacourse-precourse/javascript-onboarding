function problem6(forms) {
  let answer = new Set();
  let words = new Map();

  for (let e of forms) {
    let email = e[0];
    let name = e[1];

    for (let i = 0; i < name.length - 1; i++) {
      let word = name.slice(i, i + 2);
      if (words.has(word)) {
        answer.add(email);
        answer.add(words.get(word));
      } else {
        words.set(word, email);
      }
    }
  }

  answer = Array(...answer).sort((a, b) => a.localeCompare(b));

  return answer;
}

module.exports = problem6;
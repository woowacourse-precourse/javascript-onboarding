function problem6(forms) {
  let answer = new Set();
  const splittedNickname = {};

  for (let i = 0; i < forms.length; i++) {
    let [email, nickname] = forms[i];
    for (let j = 0; j < nickname.length - 1; j++) {
      let idx = splittedNickname[nickname.slice(j, j + 2)];
      if (idx) {
        answer.add(email);
        answer.add(forms[idx - 1][0]);
      } else {
        splittedNickname[nickname.slice(j, j + 2)] = i + 1;
      }
    }
  }

  return Array.from(answer).sort((a, b) => a.localeCompare(b));
}

module.exports = problem6;

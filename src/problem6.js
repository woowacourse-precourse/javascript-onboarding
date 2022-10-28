function problem6(forms) {
  let log = {};
  for (let i = 0; i < forms.length; i++) {
    const [, nickname] = forms[i];
    for (let j = 0; j < nickname.length - 1; j++) {
      const pattern = nickname[j] + nickname[j+1];
      if (!log[pattern]) {
        log[pattern] = 1;
        continue;
      }
      log[pattern] += 1;
    }
  }
  let result = new Set();
  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    for (let j = 0; j < nickname.length - 1; j++) {
      const pattern = nickname[j] + nickname[j+1];
      if (log[pattern] >= 2) {
        result.add(email);
        break;
      }
    }
  }
  const answer = [...result].sort();

  return answer;
}

module.exports = problem6;

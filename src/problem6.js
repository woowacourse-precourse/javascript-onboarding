function problem6(forms) {
  let log = {};
  forms.forEach(([, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      const pattern = nickname[i-1] + nickname[i];
      if (!log[pattern]) {
        log[pattern] = 1;
      } else {
        log[pattern] += 1;
      }
    }
  });

  let result = new Set();
  forms.forEach(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      const pattern = nickname[i-1] + nickname[i];
      if (log[pattern] >= 2) {
        result.add(email);
        break;
      }
    }
  });

  const answer = [...result].sort();
  return answer;
}

module.exports = problem6;

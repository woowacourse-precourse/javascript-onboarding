function problem6(forms) {
  const emailSet = new Set();
  for (let i = 0; i < forms.length; i++) {
    for (let index = 1; i < forms[i][1].length; i++) {
      const tmp = forms[i][1].slice(index - 1, index + 1);
      for (let j = i + 1; j < forms.length; j++) {
        if (forms[j][1].includes(tmp)) {
          emailSet.add(forms[j][0]);
          emailSet.add(forms[i][0]);
        }
      }
    }
  }
  return Array.from(emailSet).sort((a, b) => a - b);
}

module.exports = problem6;

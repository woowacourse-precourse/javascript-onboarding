function problem6(forms) {
  let answer;

  const formMap = new Map();
  const duplicateMailSet = new Set();

  forms.forEach((form) => {
    for (let i = 0; i < form[1].length - 1; i++) {
      const word = form[1].slice(i, i + 2);

      if (formMap.has(word)) {
        duplicateMailSet.add(form[0]);
        duplicateMailSet.add(formMap.get(word));
      }

      formMap.set(word, form[0]);
    }
  });

  answer = [...duplicateMailSet].sort();
  return answer;
}

module.exports = problem6;

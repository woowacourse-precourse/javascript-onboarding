function problem6(forms) {
  const result = new Set([]);

  forms.forEach((form, index) => {
    for (let i = index + 1; i < forms.length; i++) {
      for (let j = 0; j < form[1].length - 1; j++) {
        if (forms[i][1].includes(form[1].substr(j, 2))) {
          result.add(form[0]);
          result.add(forms[i][0]);
        }
      }
    }
  });

  const answer = Array.from(result);
  answer.sort();
  return answer;
}

module.exports = problem6;

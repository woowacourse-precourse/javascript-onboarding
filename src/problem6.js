function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) return;

  const result = [];

  forms.forEach((element, startPoint) => {
    for (let i = startPoint + 1; i < forms.length; i++) {
      for (let j = 0; j < element[1].length - 1; j++) {
        if (forms[i][1].search(element[1].substr(j, 2)) !== -1) {
          result.push(element, forms[i]);
        }
      }
    }
  });

  const reduced = result.reduce((pre, cur) => {
    pre[cur[0]] = null;
    return pre;
  }, {});

  return Object.keys(reduced).sort();
}

module.exports = problem6;

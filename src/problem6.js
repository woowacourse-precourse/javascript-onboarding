function problem6(forms) {
  let add = new Map();

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const num = forms[i][1].substr(j, 2);
      if (!add.has(num)) {
        add.set(num, 1);
      } else {
        add.set(num, add.get(num) + 1);
      }
    }
  }

  let lists = [...add];
  let answer = [];

  for (let list of lists) {
    if (list[1] <= 1) {
      continue;
    } else {
      answer.push(list[0]);
    }
  }

  let result = [];

  for (let i = 0; i < forms.length; i++) {
    for (let x of answer) {
      if (forms[i][1].includes(x)) {
        result.push(forms[i][0]);
      }
    }
  }

  result.sort();

  return result;
}

module.exports = problem6;

function problem6(forms) {
  function setDict(crew, ind, dict) {
    for (let i = 0; i < crew[1].length - 1; i++) {
      dict = checkDup(crew[1].slice(i, i + 2), ind, dict);
    }
    return dict;
  }

  function checkDup(string, ind, dict) {
    if (dict[string] === undefined) {
      dict[string] = ind;
    } else {
      dict[dict[string]] = true;
      dict[ind] = true;
    }
    return dict;
  }

  let answer = [], dict = [];

  forms.forEach((crew, ind) => {
    dict = setDict(crew, ind, dict);
  });
  dict.map((dup, index) => {
    if (dup === true) {
      answer.push(forms[index][0]);
    }
  });
  answer.sort();
  return answer;
}

module.exports = problem6;

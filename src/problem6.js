function problem6(forms) {
  var nameArr = [];
  var answer = [];

  nameArr = forms.map((item) => {
    let charArr = [];

    for (let i = 0; i < item[1].length - 1; i++)
      charArr.push(item[1].substr(i, 2));

    return charArr;
  });

  for (let j = 0; j < nameArr.length; j++) {
    nameArr[j].map((item, idx) => {
      for (let k = j + 1; k < nameArr.length; k++) {
        if (nameArr[k].includes(item)) {
          answer.push(forms[j][0]);
          answer.push(forms[k][0]);
        }
      }
    });
  }

  return [...new Set(answer)].sort();
}

module.exports = problem6;

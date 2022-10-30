function problem6(forms) {
  let answer = [];
  let compareArr = [];

  let strMap = new Map();

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      let str = forms[i][1].substr(j, 2);
      if (strMap.has(str)) {
        strMap.set(str, strMap.get(str) + 1);
      } else {
        strMap.set(str, 1);
      }
    }
  }

  strMap.forEach((x, y) => {
    if (x >= 2) {
      compareArr.push(y);
    }
  });

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < compareArr.length; j++) {
      if (forms[i][1].includes(compareArr[j])) {
        answer.push(forms[i][0]);
      }
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;

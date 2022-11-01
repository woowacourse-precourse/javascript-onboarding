function problem6(forms) {
  const answer = [];
  const compareArr = [];
  const strMap = new Map();
  let str;
  let i;
  let j;

  for (i = 0; i < forms.length; i += 1) {
    for (j = 0; j < forms[i][1].length - 1; j += 1) {
      str = forms[i][1].substr(j, 2);
      const STR_GET = strMap.get(str);
      if (STR_GET) strMap.set(str, STR_GET + 1);
      else strMap.set(str, 1);
      if (STR_GET > 1) compareArr.push(str);
    }
  }

  for (i = 0; i < forms.length; i += 1) {
    for (j = 0; j < compareArr.length; j += 1) {
      if (forms[i][1].includes(compareArr[j])) answer.push(forms[i][0]);
    }
  }

  return answer.sort();
}

module.exports = problem6;

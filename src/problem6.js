function problem6(forms) {
  let map = new Map();

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const str = forms[i][1].substr(j, 2);
      // console.log(str);
      if (!map.has(str)) {
        map.set(str, 1);
      } else {
        map.set(str, map.get(str) + 1);
      }
    }
  }

  let lists = [...map];
  let result = [];

  for (let list of lists) {
    if (list[1] <= 1) {
      continue;
    } else {
      result.push(list[0]);
    }
  }
  // console.log(result);

  let answer = [];

  for (let i = 0; i < forms.length; i++) {
    for (let x of result) {
      if (forms[i][1].includes(x)) {
        answer.push(forms[i][0]);
      }
    }
  }
  // console.log(answer);

  answer.sort();
  // console.log(answer);
  return answer;
}

module.exports = problem6;

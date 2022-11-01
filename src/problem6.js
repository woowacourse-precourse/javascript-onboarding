function problem6(forms) {
  // 제한사항
  if (forms.length < 1 || forms.length > 10000) {
    return "chek crew num"
  }


  let answer= [];
  let arr = [];
  let result = [];

  for (let i = 0; i < forms.length; i++) {
    arr.push(forms[i][1]);
    result.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 2) {
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr[i].length-1; k++) {
        let compareString  = arr[i].substring(k, k + 2);
        if (arr[j].indexOf(compareString) != -1) {
          result[i]++;
          result[j]++;
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] != 0) {
      answer.push(forms[i][0]);
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;

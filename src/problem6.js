function problem6(forms) {
  let answer = [];
  let arr = [];
  let name = /^[ㄱ-ㅎ|가-힣|]+$/;

  for (let i = 0; i < forms.length; i++) {
    if (
      forms[i][0].length < 10 ||
      forms[i][0].length >= 20 ||
      forms[i][0].slice(-10) != "@email.com"
    ) {
      forms.splice(i, 1);
      i -= 1;
    }
  }

  for (let i = 0; i < forms.length; i++) {
    if (
      name.test(forms[i][1]) == false ||
      forms[i][1].length == 0 ||
      forms[i][1].length >= 20
    ) {
      forms.splice(i, 1);
      i -= 1;
    }
  }

  if (forms.length >= 1 && forms.length <= 10000) {
    for (let i = 0; i < forms.length; i++) {
      for (let z = 0; z < forms[i][1].length - 1; z++) {
        for (let h = 1 + i; h < forms.length; h++) {
          if (forms[h][1].includes(forms[i][1][z] + forms[i][1][z + 1])) {
            arr.push(forms[h]);
            arr.push(forms[i]);
          }
        }
      }
    }
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (answer.includes(arr[i][0]) == false) {
        answer.push(arr[i][0]);
      }
    }
  }

  return answer;
}

module.exports = problem6;

function problem6(forms) {
  var answer = [];
  let arr = [];
  let str = "";

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      str = forms[i][1][j] + forms[i][1][j + 1];
      const 비교하는배열 = [...forms];
      비교하는배열.splice(i, 1);
      for (let k = 0; k < 비교하는배열.length; k++) {
        if (비교하는배열[k][1].includes(str)) {
          arr.push(비교하는배열[k]);
        }
      }
    }
  }

  const duplicate = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  arr = duplicate;

  for (let i = 0; i < arr.length; i++) {
    arr[i].pop();
  }

  for (let i = 0; i < arr.length; i++) {
    answer.push(...arr[i]);
    answer.sort();
  }

  return answer;
}

module.exports = problem6;

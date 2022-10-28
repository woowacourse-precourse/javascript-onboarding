function problem6(forms) {
  const nickname = [];
  const answer = [];
  const real_answer = [];

  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  for (let j = 0; j < nickname.length; j++) {
    if (nickname[j].includes(duplication(nickname).join())) answer.push(nickname[j]);
  }

  for (let k = 0; k < forms.length; k++) {
    for (let l = 0; l < answer.length; l++) {
      if (forms[k][1] === answer[l]) real_answer.push(forms[k][0]);
    }
  }

  return [...new Set(real_answer.sort())];
}

function duplication(arr) {
  let seperate_name_arr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      seperate_name_arr.push(arr[i][j] + arr[i][j + 1]);
    }
  }

  const findDuplicates = (seperate_name_arr) =>
    seperate_name_arr.filter((item, index) => seperate_name_arr.indexOf(item) !== index);

  const duplicates = findDuplicates(seperate_name_arr);

  return [...new Set(duplicates)];
}

module.exports = problem6;

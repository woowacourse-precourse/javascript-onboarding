function problem6(forms) {
  const nickname = [];
  const answer = [];

  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  for (let j = 0; j < nickname.length; j++) {
    if (nickname[j].includes(duplication(nickname).join())) answer.push(nickname[j]);
  }
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

function problem6(forms) {
  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }
}

function duplication(arr) {
  let seperate_name_arr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      seperate_name_arr.push(arr[i][j] + arr[i][j + 1]);
    }
  }
}

module.exports = problem6;

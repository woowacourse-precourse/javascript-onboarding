function problem6(forms) {
  const nickName = forms.map((form) => form[1]);
  const nickNameSubset = nickName.map((el) => subsets(el)).flat();
  const duplicatedName = FindDuplicateStr(nickNameSubset);

  return forms
    .filter((el) => FindDuplicateName(duplicatedName, el[1]))
    .map((el) => el[0])
    .sort();
}

function subsets(word) {
  const arr = [];
  for (let i = 0; i < word.length - 1; i++) {
    arr.push(word.substring(i, i + 2));
  }
  return arr;
}

function FindDuplicateStr(array) {
  return [
    ...new Set(array.filter((item, index, arr) => arr.indexOf(item) !== index)),
  ];
}

function FindDuplicateName(arr, string) {
  return arr.some((str) => string.includes(str));
}

module.exports = problem6;

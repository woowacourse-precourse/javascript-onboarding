function problem6(forms) {
  const checkArr = [];
  forms.map((elem) => {
    for (let i = 0; i < elem[1].length - 1; i++) {
      checkArr.push(elem[1].substr(i, 2));
    }
  });

  const duplicates = findDuplicate(checkArr);

  const resultArr = [];

  forms.map((elem) => {
    if (elem[1].includes(duplicates[0])) {
      resultArr.push(elem[0]);
    }
  });

  const result = new Set([...resultArr]);
  answer = [...result].sort();
  return answer;
}
function findDuplicate(arr) {
  const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(filtered)];
}

module.exports = problem6;

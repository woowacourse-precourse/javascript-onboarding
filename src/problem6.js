function problem6(forms) {
  var answer = [];
  let nicknameList = [];
  let sliceList = [];
  for (let i = 0; i < forms.length; i++) {
    nicknameList.push(forms[i][1]);
  }

  for (let i = 0; i < nicknameList.length; i++) {
    for (let j = 0; j < nicknameList[i].length - 1; j++) {
      sliceList.push(nicknameList[i].substring(j, j + 2));
    }
  }

  function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(filtered)];
  }
  const duplicates = findDuplicates(sliceList);

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].includes(duplicates)) {
      answer.push(forms[i][0]);
    }
  }
  return answer.sort();
}

module.exports = problem6;

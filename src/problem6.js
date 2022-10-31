function problem6(forms) {
  let answer = "";
  let nickName = [];
  let SlicedTwoWords = "";
  let RepetitionCount = {};
  let result = new Set();

  for (let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);

    for (let j = 0; j < nickName[i].length - 1; j++) {
      SlicedTwoWords = nickName[i].substring(j, j + 2);

      if (RepetitionCount[SlicedTwoWords]) {
        RepetitionCount[SlicedTwoWords] += 1;
      } else RepetitionCount[SlicedTwoWords] = 1;
    }
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < nickName[i].length - 1; j++) {
      SlicedTwoWords = nickName[i].substring(j, j + 2);
      if (RepetitionCount[SlicedTwoWords] > 1) result.add(forms[i][0]);
    }
  }
  answer = [...result].sort();
  return answer;
}

module.exports = problem6;

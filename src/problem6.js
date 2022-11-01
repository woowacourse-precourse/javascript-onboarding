function problem6(forms) {
  let answer = [];
  const nickName = [];
  let nickNameTwoWords = "";
  let duplicationCount = {};
  const result = new Set([]);

  for (let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);

    for (let j = 0; j < nickName[i].length - 1; j++) {
      nickNameTwoWords = nickName[i].substring(j, j + 2);

      if (duplicationCount[nickNameTwoWords]) {
        duplicationCount[nickNameTwoWords] += 1;
      } else duplicationCount[nickNameTwoWords] = 1;
    }
  }

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < nickName[j].length - 1; j++) {
      nickNameTwoWords = nickName[i].substring(j, j + 2);

      if (duplicationCount[nickNameTwoWords] > 1) result.add(forms[i][0]);
    }
  }
  answer = [...result].sort();
  return answer;
}

module.exports = problem6;

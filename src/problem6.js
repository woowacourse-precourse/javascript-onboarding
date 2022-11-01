function problem6(forms) {
  const nicknameArr = getNickNameArr(forms);
  const duplicatedNickName = getDupliatedNickName(nicknameArr);
  const index = getResultIndex(duplicatedNickName, nicknameArr);
  const answer = getEmailFromIndex(forms, index).sort();

  return answer;
}

function getNickNameArr(forms) {
  let nicknameArr = [];
  for (let i = 0; i < forms.length; i++) {
    nicknameArr.push(forms[i][1]);
  }
  return nicknameArr;
}

function getDupliatedNickName(nicknameArr) {
  let duplicatedNickName = new Set();

  for (let i = 0; i < nicknameArr.length; i++) {
    for (let j = 0; j < nicknameArr[i].length - 1; j++) {
      const search = nicknameArr[i].substring(j, j + 2);
      const index = nicknameArr.filter((nickname) => {
        if (nickname.indexOf(search) !== -1) return nickname;
      });

      if (index.length > 1) {
        index.map((nickname) => duplicatedNickName.add(nickname));
      }
    }
  }
  return Array.from(duplicatedNickName);
}

function getResultIndex(duplicatedNickName, nicknameArr) {
  let resultIndex = [];

  for (let i = 0; i < duplicatedNickName.length; i++) {
    let index = nicknameArr.indexOf(duplicatedNickName[i]);

    while (index != -1) {
      resultIndex.push(index);
      index = nicknameArr.indexOf(duplicatedNickName[i], index + 1);
    }
  }

  return resultIndex;
}

function getEmailFromIndex(forms, index) {
  let answer = [];

  const resultForms = forms.filter((form, i) => {
    if (index.includes(i)) return form[0];
  });

  for (let i = 0; i < resultForms.length; i++) {
    answer.push(resultForms[i][0]);
  }

  return answer;
}

module.exports = problem6;

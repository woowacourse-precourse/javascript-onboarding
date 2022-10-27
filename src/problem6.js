function problem6(forms) {
  let answer = [];
  let nicknameList = [];
  let duplicateNicknameList = [];

  const pushList = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
      const currentString = string.slice(i, i + 2);
      if (nicknameList.indexOf(currentString) === -1)
        nicknameList.push(currentString);
      else if (duplicateNicknameList.indexOf(currentString) === -1)
        duplicateNicknameList.push(currentString);
    }
  };
  const isSame = (string) => {
    for (let i = 0; i < string.length - 1; i++)
      if (duplicateNicknameList.indexOf(string.slice(i, i + 2)) != -1)
        return true;
    return false;
  };

  forms.forEach((form) => {
    pushList(form[1]);
  });
  forms.forEach((form) => {
    if (isSame(form[1])) answer.push(form[0]);
  });

  return answer.sort();
}

module.exports = problem6;

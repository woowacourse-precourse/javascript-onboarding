function problem6(forms) {
  let answer = [];
  let nicknameWordSet = new Map();

  const initSet = (name) => {
    [...name].forEach((ch, i) => {
      const checkWord = name.slice(i, i + 2);
      if (checkWord.length >= 2)
        if (nicknameWordSet.has(checkWord))
          nicknameWordSet.set(checkWord, nicknameWordSet.get(checkWord) + 1);
        else nicknameWordSet.set(checkWord, 1);
    });
  };
  const checkSame = ([email, name]) => {
    [...name].forEach((ch, i) => {
      const checkWord = name.slice(i, i + 2);
      if (nicknameWordSet.get(checkWord) > 1) answer.push(email);
    });
  };

  forms.forEach((form) => {
    initSet(form[1]);
  });

  forms.forEach((form) => {
    checkSame(form);
  });
  return answer.sort();
}

module.exports = problem6;

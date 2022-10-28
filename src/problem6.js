const getHaveSimilarNickCrews = (forms, duplicateChars) => {
  return forms.reduce((acc, cur) => {
    for (let j = 0; j < duplicateChars.length; j++) {
      if (cur[1].includes(duplicateChars)) {
        acc.push(cur[0]);
      }
    }
    return acc;
  }, []);
};

const getDuplicateChars = (charsCase) => [
  ...new Set(charsCase.filter((char, i) => charsCase.indexOf(char) !== i)),
];

const getTwoCharsArr = (forms) => {
  return forms.reduce((acc, crew, i) => {
    const nickname = [...crew[1]];
    for (let j = 0; j < nickname.length - 1; j++) {
      acc.push(nickname[j] + nickname[j + 1]);
    }
    return acc;
  }, []);
};

function problem6(forms) {
  const charsCase = getTwoCharsArr(forms);
  const duplicateChars = getDuplicateChars(charsCase);
  const haveSimilarNickCrews = getHaveSimilarNickCrews(forms, duplicateChars);

  return [...new Set(haveSimilarNickCrews)].sort();
}

module.exports = problem6;

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

  return;
}

module.exports = problem6;

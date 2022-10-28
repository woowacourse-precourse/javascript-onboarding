const getDuplicateChars = (charsCase) => [
  ...new Set(charsCase.filter((char, i) => charsCase.indexOf(char) !== i)),
];

function problem6(forms) {
  const charsCase = getTwoCharsArr(forms);

  return;
}

module.exports = problem6;

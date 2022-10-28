const getInvalidNames = (names) => {
  const invalidNames = [];
  const invalidNameCases = [];

  names.forEach((name, index) => {
    for (let i = 0; i < name.length - 1; i++) {
      const invalidNameCase = name.slice(i, i + 2);
      if (!invalidNames.includes(invalidNameCase) && invalidNameCases.includes(invalidNameCase)) {
        invalidNames.push(invalidNameCase);
      } else {
        invalidNameCases.push(invalidNameCase);
      }
    }
  });

  return invalidNames;
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

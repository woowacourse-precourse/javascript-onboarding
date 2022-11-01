function problem6(forms) {
  let finderWord = [];
  forms.map((el) => {
    for (let i = 0; i < el[1].length - 1; i++) {
      finderWord.push(`${el[1][i]}${el[1][i + 1]}`);
    }
  });

  function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(filtered)];
  }

  const duplicateWord = findDuplicates(finderWord);

  let result = [];

  forms.map((el) => {
    if (el[1].includes(duplicateWord[0])) {
      result.push(el[0]);
    }
  });

  var answer = [...new Set(result.sort())];
  return answer;
}

module.exports = problem6;

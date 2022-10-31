function problem6(forms) {
  let wordArray = checkDuplicateWord(forms);
  removeDuplicateArray(wordArray);
}
function checkDuplicateWord(forms) {
  const result = [];
  forms.forEach((element, startPoint) => {
    for (let i = startPoint + 1; i < forms.length; i++) {
      for (let j = 0; j < element[1].length - 1; j++) {
        if (forms[i][1].search(element[1].substr(j, 2)) !== -1) {
          result.push(element, forms[i]);
        }
      }
    }
  });
  return result;
}

module.exports = problem6;

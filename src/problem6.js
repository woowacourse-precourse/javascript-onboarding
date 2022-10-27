function problem6(forms) {
  const enteredForms = [forms[0]];
  const result = isDuplicatedNames(enteredForms, forms[1][1])
    ? [forms[0][0]]
    : [];

  for (let i = 1; i < forms.length; i++) {
    if (isDuplicatedNames(enteredForms, forms[i][1])) result.push(forms[i][0]);
    enteredForms.push(forms[i]);
  }

  return makeResultArray(result);
}

function isDuplicatedNames(enteredForms, name) {
  const twoLetterArray = generateTwoLetterArray(name);

  for (let i = 0; i < enteredForms.length; i++) {
    if (checkDuplication(enteredForms[i][1], twoLetterArray)) return true;
  }
  return false;
}

function checkDuplication(string, inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (string.includes(inputArray[i])) return true;
  }
  return false;
}

function generateTwoLetterArray(string) {
  let twoLetterArray = [];
  for (let i = 0; i < string.length - 1; i++) {
    twoLetterArray.push(string[i] + string[i + 1]);
  }
  return twoLetterArray;
}

function makeResultArray(array) {
  return Array.from(new Set(array)).sort();
}

module.exports = problem6;

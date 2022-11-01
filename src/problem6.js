function problem6(forms) {
  let duplicatedEmail = [];
  let twoWordStorage = {};
  for (let i = 0; i < forms.length; i++) {
    const a = forms[i][1];
    const array = a.split("");
    for (let j = 0; j < array.length - 1; j++) {
      const twoWord = array[j] + array[j + 1];
      if (twoWord in twoWordStorage === false) {
        twoWordStorage[twoWord] = 1;
        continue;
      }
      twoWordStorage[twoWord] += 1;
    }
  }
  for (let i = 0; i < forms.length; i++) {
    const a = forms[i][1];
    const array = a.split("");
    for (let j = 0; j < array.length - 1; j++) {
      const twoWord = array[j] + array[j + 1];
      if (twoWordStorage[twoWord] !== 1) {
        duplicatedEmail.push(forms[i][0]);
      }
    }
  }
  const setDuplicatedEmail = new Set(duplicatedEmail);
  const arrayDuplicatedEmail = Array.from(setDuplicatedEmail);
  const sortDuplicatedEmail = arrayDuplicatedEmail.sort();
  return sortDuplicatedEmail;
}

module.exports = problem6;

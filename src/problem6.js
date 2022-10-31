const MAX_DUPLICATE_COUNT = 2;

const sortByAlphabetically = (forms = []) => {
  return forms.sort(function (a, b) {
    const upperCaseA = a.toUpperCase();
    const upperCaseB = b.toUpperCase();

    if (upperCaseA > upperCaseB) return 1;
    if (upperCaseA < upperCaseB) return -1;
    if (upperCaseA === upperCaseB) return 0;
  });
};

function problem6(forms = []) {
  const result = [];

  // 연속된 문자 저장
  const namesCount = {};
  for (const [_, name] of forms) {
    const splitNames = name.split('');
    for (let i = 0; i < splitNames.length - 1; i++) {
      const nameKey = `${splitNames[i]}${splitNames[i + 1]}`;
      if (namesCount[nameKey]) namesCount[nameKey]++;
      else namesCount[nameKey] = 1;
    }
  }

  const multipleLetters = [];
  for (const [name, count] of Object.entries(namesCount)) {
    if (count > MAX_DUPLICATE_COUNT) multipleLetters.push(name);
  }

  for (const [email, crewName] of forms) {
    for (const multipleLetter of multipleLetters) {
      if (crewName.includes(multipleLetter)) {
        result.push(email);
        break;
      }
    }
  }
  return sortByAlphabetically(result);
}

module.exports = problem6;

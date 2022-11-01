const getSplittedNames = (crewName) => {
  const splittedLetter = [];
  for (let i = 0; i < crewName.length - 1; i++) {
    splittedLetter.push(crewName.substring(i, i + 2));
  }

  return [...new Set(splittedLetter)];
};

const insertNamesToMap = (names, map) => {
  names.forEach((name) => map.set(name, (map.get(name) || 0) + 1));
};

const isDuplicatedName = (names, map) => {
  let duplicate = false;
  names.forEach((name) => map.get(name) >= 2 && (duplicate = true));

  return duplicate;
};

function problem6(forms) {
  const splittedNameMap = new Map();
  const emails = [];

  forms.forEach(([, crewName]) => {
    const splittedNames = getSplittedNames(crewName);
    insertNamesToMap(splittedNames, splittedNameMap);
  });

  forms.forEach(([crewEmail, crewName]) => {
    const splittedNames = getSplittedNames(crewName);
    isDuplicatedName(splittedNames, splittedNameMap) && emails.push(crewEmail);
  });

  return [...new Set(emails)].sort();
}

module.exports = problem6;

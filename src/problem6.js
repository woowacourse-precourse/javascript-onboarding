function problem6(forms) {
  const adjacentMap = makeAdjacentMap(forms);
  const duplicateSet = new Set();

  forms.forEach(([email, nickname]) => {
    const hasDuplicate = checkDuplicate(nickname, adjacentMap);
    if (hasDuplicate) duplicateSet.add(email);
  });

  const duplicates = [...duplicateSet];
  return duplicates.sort(compareEmailAddress);
}

function getAdjacentStrings(string) {
  const adjacentStrings = [];

  for (let i = 0; i < string.length - 1; i += 1) {
    const adjacentString = string.slice(i, i + 2);
    adjacentStrings.push(adjacentString);
  }

  return adjacentStrings;
}

function makeAdjacentMap(forms) {
  const adjacentMap = {};

  forms.forEach(([_, nickname]) => {
    const adjacentStrings = getAdjacentStrings(nickname);

    adjacentStrings.forEach((string) => {
      if (!adjacentMap[string]) adjacentMap[string] = 0;
      adjacentMap[string] += 1;
    });
  });

  return adjacentMap;
}

function checkDuplicate(nickname, adjacentMap) {
  const adjacentStrings = getAdjacentStrings(nickname);
  return adjacentStrings.some((string) => adjacentMap[string] > 1);
}

function compareEmailAddress(a, b) {
  const domain = '@email.com';
  const addressA = a.replace(domain, '');
  const addressB = b.replace(domain, '');
  return addressA.localeCompare(addressB);
}

module.exports = problem6;

function problem6(forms) {
  const adjacentMap = makeAdjacentMap(forms);
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

module.exports = problem6;

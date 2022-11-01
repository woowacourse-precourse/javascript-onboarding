const problem6 = (forms) => {
  let namePieces = [];
  let duplicateIndex = [];

  const nameList = forms.map(([_, name]) => name.split(""));

  // prettier-ignore
  nameList.forEach((name) =>
    (namePieces = [...namePieces, name.map((_, i) => {
      if (i !== name.length - 1) return name[i] + name[i + 1];
    }).filter((namePiece) =>
      namePiece)])
  );

  for (i = 0; i < namePieces.length; i += 1) {
    for (j = i + 1; j < namePieces.length; j += 1) {
      if (j !== namePieces.length) {
        const originalSize = namePieces[i].length + namePieces[j].length;
        const nameSet = new Set([...namePieces[i], ...namePieces[j]]);

        if (nameSet.size !== originalSize)
          duplicateIndex = [...duplicateIndex, i, j];
      }
    }
  }

  duplicateIndex = [...new Set(duplicateIndex)];

  return duplicateIndex.map((index) => forms[index][0]).sort();
};

module.exports = problem6;

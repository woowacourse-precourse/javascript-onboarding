function problem6(forms) {
  const cutNames = cutNamesIntoTwoLetters(forms);
}

function cutNamesIntoTwoLetters(crews) {
  const theNumberOfCrews = crews.length;

  for (
    let standardNameIndex = 0;
    standardNameIndex < theNumberOfCrews;
    standardNameIndex++
  ) {
    const standardName = crews[standardNameIndex][1];
    const standardNameLength = standardName.length;

    for (
      let standardCutIndex = 0;
      standardCutIndex < standardNameLength - 1;
      standardCutIndex++
    ) {
      const standardCutName = standardName.substr(standardCutIndex, 2);

      for (
        let comparedNameIndex = standardNameIndex + 1;
        comparedNameIndex < theNumberOfCrews;
        comparedNameIndex++
      ) {
        const comparedName = crews[comparedNameIndex][1];
        const comparedNameLength = comparedName.length;

        for (
          let comparedCutIndex = 0;
          comparedCutIndex < comparedNameLength - 1;
          comparedCutIndex++
        ) {
          const comparedCutName = comparedName.substr(comparedCutIndex, 2);

          return [standardCutName, comparedCutName];
        }
      }
    }
  }
}

module.exports = problem6;

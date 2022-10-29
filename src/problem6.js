function problem6(forms) {
  const cutNames = cutNamesIntoTwoLetters(forms);
  const result = getEmailOfDuplicatedCrews(forms, cutNames);

  return result;
}

function cutNamesIntoTwoLetters(crews) {
  const theNumberOfCrews = crews.length;
  const duplicatedNameIndexList = new Array(theNumberOfCrews).fill(0);

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

          if (standardCutName === comparedCutName) {
            duplicatedNameIndexList[standardNameIndex] += 1;
            duplicatedNameIndexList[comparedNameIndex] += 1;
          }
        }
      }
    }
  }

  return duplicatedNameIndexList;
}

function getEmailOfDuplicatedCrews(crews, duplicatedCrewsList) {
  const theNumberOfCrews = crews.length;
  let emailList = new Array(theNumberOfCrews);
  let emailIndex = 0;

  for (let i = 0; i < theNumberOfCrews; i++) {
    const email = crews[i][0];

    if (duplicatedCrewsList[i] > 0) {
      emailList[emailIndex] = email;
      emailIndex++;
    }
  }

  emailList = emailList.filter(removeEmptyValue);

  return emailList;
}

function removeEmptyValue(email) {
  return email !== null && email !== undefined && email !== "";
}

module.exports = problem6;

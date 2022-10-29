function problem6(forms) {
  const cutNames = cutNamesIntoTwoLetters(forms);
  const emailListOfDuplicatedCrews = getEmailOfDuplicatedCrews(forms, cutNames);
  const result = arrangeInAscendingOrder(emailListOfDuplicatedCrews);

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

function arrangeInAscendingOrder(list) {
  const theNumberOfEmail = list.length;

  let comparedIndex, standardIndex, standard;
  for (standardIndex = 1; standardIndex < theNumberOfEmail; standardIndex++) {
    standard = list[standardIndex];

    for (
      comparedIndex = standardIndex - 1;
      comparedIndex >= 0 && list[comparedIndex] > standard;
      comparedIndex--
    ) {
      list[comparedIndex + 1] = list[comparedIndex];
    }

    list[comparedIndex + 1] = standard;
  }

  const deduplicatedList = removeDuplicatedEmail(list);

  return deduplicatedList;
}

function removeDuplicatedEmail(list) {
  const theNumberOfEmail = list.length;

  for (
    let emailListindex = 1;
    emailListindex < theNumberOfEmail;
    emailListindex++
  ) {
    if (list[emailListindex - 1] === list[emailListindex]) {
      list[emailListindex - 1] = "";
      list[emailListindex] = "";
    }
  }

  list = list.filter(removeEmptyValue);

  return list;
}

module.exports = problem6;

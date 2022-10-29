function problem6(forms) {
  const checkedErrors = checkErrors(forms);

  if (checkedErrors === "Not Error") {
    const cutNames = cutNamesIntoTwoLetters(forms);
    const emailListOfDuplicatedCrews = getEmailOfDuplicatedCrews(
      forms,
      cutNames
    );
    const result = arrangeInAscendingOrder(emailListOfDuplicatedCrews);

    return result;
  }

  return checkedErrors;
}

function checkErrors(crews) {
  const numberOfCheckedCrews = countCrews(crews);
  const checkedDomain = checkDomain(crews);
  const checkedKoreanName = checkKoreanName(crews);
  const checkedNameLength = checkNameLength(crews);

  if (numberOfCheckedCrews !== "Not Error") {
    return numberOfCheckedCrews;
  }

  if (checkedDomain !== "Not Error") {
    return checkedDomain;
  }

  if (checkedKoreanName !== "Not Error") {
    return checkedKoreanName;
  }

  if (checkedNameLength !== "Not Error") {
    return checkedNameLength;
  }

  return "Not Error";
}

function countCrews(crews) {
  const MINIMUM_NUMBER = 1;
  const MAXIMUM_NUMBER = 10000;
  const theNumberOfCrews = crews.length;

  if (theNumberOfCrews < MINIMUM_NUMBER || theNumberOfCrews > MAXIMUM_NUMBER) {
    return "크루는 1명 이상 10,000명 이하이어야 합니다.";
  }

  return "Not Error";
}

function checkDomain(crews) {
  const theNumberOfCrews = crews.length;

  for (let crewIndex = 0; crewIndex < theNumberOfCrews; crewIndex++) {
    const EMAIL_DOMAIN = "email.com";
    const email = crews[crewIndex][0];

    if (email.includes(EMAIL_DOMAIN) === false) {
      return "도메인은 email.com만 이용 가능합니다.";
    }
  }

  return "Not Error";
}

function checkKoreanName(crews) {
  const english = /[a-zA-Z]/;
  const number = /[0-9]/;
  const specialText = /[~!@#$%^&*()_+|<>?:{}]/;
  const theNumberOfCrews = crews.length;

  for (let crewIndex = 0; crewIndex < theNumberOfCrews; crewIndex++) {
    const name = crews[crewIndex][1];

    if (
      english.test(name) === true ||
      number.test(name) === true ||
      specialText.test(name) === true
    ) {
      return "닉네임은 한글만 사용할 수 있습니다.";
    }
  }

  return "Not Error";
}

function checkNameLength(crews) {
  const theNumberOfCrews = crews.length;

  for (let crewIndex = 0; crewIndex < theNumberOfCrews; crewIndex++) {
    const MINIMUN_NAME = 1;
    const MAXIMUM_NAME = 19;
    const name = crews[crewIndex][1];
    const nameLength = name.length;

    if (nameLength < MINIMUN_NAME || nameLength > MAXIMUM_NAME) {
      return "닉네임은 1자 이상 20자 미만이어야 합니다.";
    }
  }

  return "Not Error";
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
      const standardCutName = standardName.subname(standardCutIndex, 2);

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
          const comparedCutName = comparedName.subname(comparedCutIndex, 2);

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

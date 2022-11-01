function problem6(forms) {
  return duplicateCheckApp(checkValidation(forms));
}

function checkValidation(forms) {
  const validationFilter = [];
  const emailCollection = [];
  forms.map(([crewEmail, crewNickName]) => {
    if (checkNickName(crewNickName) && checkEmail(crewEmail, emailCollection)) {
      validationFilter.push([crewEmail, crewNickName]);
      emailCollection.push(crewEmail);
    }
  });
  return validationFilter;
}

function checkNickName(nickName) {
  return nickName.length >= 2 && nickName.length < 20 && !/[^가-힣]/.test(nickName);
}

function checkEmail(email, emailCollection) {
  return email.length >= 11 && email.length < 20 && email.includes("@email") && !emailCollection.includes(email);
}

function duplicateCheckApp(forms) {
  const infoOfUsedTwoLetter = new Map();
  const emailOfUsedNickName = new Set();
  forms.forEach(([crewEmail, crewNickName]) => {
    for (let i = 0; i < crewNickName.length - 1; i++) {
      let twoLetterName = crewNickName.substr(i, 2);
      if (infoOfUsedTwoLetter.has(twoLetterName)) {
        emailOfUsedNickName.add(crewEmail);
        emailOfUsedNickName.add(infoOfUsedTwoLetter.get(twoLetterName));
      } else {
        infoOfUsedTwoLetter.set(twoLetterName, crewEmail);
      }
    }
  });
  return [...emailOfUsedNickName].sort();
}

module.exports = problem6;

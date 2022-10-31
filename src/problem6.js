function problem6(forms) {
  const nickNames = getAllNickName(forms);
  const twoLetters = combinateTwoLetter(nickNames);
  const duplicateLetters = duplicatedTwoLetters(nickNames, twoLetters);
  const duplicatedNickName = findDuplicatedNickName(
    nickNames,
    duplicateLetters
  );
  const answer = findEmails(forms, duplicatedNickName);
  return answer;
}

function getAllNickName(forms) {
  const nickNames = [];
  for (let i = 0; i < forms.length; i++) {
    nickNames.push(forms[i][1]);
  }
  return nickNames;
}

function combinateTwoLetter(nickNames) {
  let twoLetters = [];
  for (let i = 0; i < nickNames.length; i++) {
    for (let j = 0; j < nickNames[i].length - 1; j++) {
      const subStr = nickNames[i].substring(j, 2 + j);
      twoLetters.push(subStr);
    }
  }
  twoLetters = Array.from(new Set(twoLetters));
  return twoLetters;
}

function duplicatedTwoLetters(nickNames, twoLetters) {
  const duplicateLetters = [];
  for (let i = 0; i < twoLetters.length; i++) {
    let duplicate = 0;
    for (let j = 0; j < nickNames.length; j++) {
      if (nickNames[j].includes(twoLetters[i])) {
        duplicate++;
      }
    }
    if (duplicate > 1) {
      duplicateLetters.push(twoLetters[i]);
    }
  }
  return duplicateLetters;
}

function findDuplicatedNickName(nickNames, duplicateLetters) {
  let duplicatedNickName = [];
  for (let i = 0; i < nickNames.length; i++) {
    for (let j = 0; j < duplicateLetters.length; j++) {
      if (nickNames[i].includes(duplicateLetters[j])) {
        duplicatedNickName.push(nickNames[i]);
      }
    }
  }
  duplicatedNickName = Array.from(new Set(duplicatedNickName));
  return duplicatedNickName;
}

function findEmails(forms, duplicatedNickName) {
  let emails = [];
  for (let i = 0; i < duplicatedNickName.length; i++) {
    for (let j = 0; j < forms.length; j++) {
      if (duplicatedNickName[i] === forms[j][1]) emails.push(forms[j][0]);
    }
  }
  emails = Array.from(new Set(emails)).sort();
  return emails;
}
module.exports = problem6;

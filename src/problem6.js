function problem6(forms) {
  var answer;
  return answer;
}

function separateTwoWord(array2D) {
  const nicknames = array2D;
  const TwoWords = [];
  const duplicateIndex = [];
  for (let i = 0; i < nicknames.length; i++) {
    for (let j = 0; j < nicknames[i][1].length - 1; j++) {
      if (TwoWords.includes(nicknames[i][1].substr(j, 2))) {
        duplicateIndex.push(nicknames[i][1].substr(j, 2));
      } else TwoWords.push(nicknames[i][1].substr(j, 2));
    }
  }
  return Array.from(new Set(duplicateIndex));
}

function deleteDuplicatedNicknames(array2D, duplicatedWords) {
  const nicknames = array2D;
  const duplicatedEmails = [];
  for (let i = 0; i < nicknames.length; i++) {
    for (let j = 0; j < nicknames[i][1].length - 1; j++) {
      if (duplicatedWords.includes(nicknames[i][1].substr(j, 2))) {
        duplicatedEmails.push(nicknames[i][0]);
      }
    }
  }
  return Array.from(new Set(duplicatedEmails));
}

function sortingEmails(emails) {
  const sortedEmails = emails.sort();
  return sortedEmails;
}

function checkEmailType(email) {
  const email = email;
  const REG_EXP = /^[a-zA-Z0-9]([-_\.]?[0-9a-zA-Z])*@email.com$/;
  if (email.length >= 11 && email.length < 20 && REG_EXP.test(email)) {
    return true;
  }
}

module.exports = problem6;

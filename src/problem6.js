function problem6(forms) {
  var answer;
  if (checkType(forms)) return;
  const duplicatedWords = findDuplicatedNicknames(forms);
  const duplicatedEmails = deleteDuplicatedNicknames(forms, duplicatedWords);
  answer = sortingEmails(duplicatedEmails);
  return answer;
}

function checkType(forms) {
  forms.forEach((_, i) => {
    if (!checkEmailType(forms[i][0])) return true;
    if (!checkNicknameType(forms[i][1])) return true;
  });
}

function checkEmailType(email) {
  const REG_EXP = /^[a-zA-Z0-9]([-_\.]?[0-9a-zA-Z])*@email.com$/;
  if (email.length >= 11 && email.length < 20 && REG_EXP.test(email))
    return true;
  return false;
}

function checkNicknameType(nickname) {
  const REG_EXP = /^[가-힣]+$/;
  if (nickname.length >= 1 && nickname.length < 20 && REG_EXP.test(nickname))
    return true;
  return false;
}

function findDuplicatedNicknames(nicknames) {
  const twoWords = [];
  const duplicatedWords = [];
  nicknames.forEach((_, i) => {
    finding({ nicknames, twoWords, duplicatedWords, i });
  });
  return Array.from(new Set(duplicatedWords));
}

function finding({ nicknames, twoWords, duplicatedWords, i }) {
  for (let j = 0; j < nicknames[i][1].length - 1; j++) {
    if (twoWords.includes(nicknames[i][1].substr(j, 2))) {
      duplicatedWords.push(nicknames[i][1].substr(j, 2));
    } else twoWords.push(nicknames[i][1].substr(j, 2));
  }
}

function deleteDuplicatedNicknames(nicknames, duplicatedWords) {
  const duplicatedEmails = [];
  nicknames.forEach((_, i) => {
    deleting({ nicknames, duplicatedWords, duplicatedEmails, i });
  });
  return Array.from(new Set(duplicatedEmails));
}

function deleting({ nicknames, duplicatedWords, duplicatedEmails, i }) {
  for (let j = 0; j < nicknames[i][1].length - 1; j++) {
    if (duplicatedWords.includes(nicknames[i][1].substr(j, 2)))
      duplicatedEmails.push(nicknames[i][0]);
  }
}

function sortingEmails(emails) {
  const sortedEmails = emails.sort();
  return sortedEmails;
}

module.exports = problem6;

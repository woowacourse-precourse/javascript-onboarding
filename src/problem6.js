function problem6(forms) {
  var answer;


  return answer;
}

module.exports = problem6;































function problem6(forms) {
  var answer;
  if (checkType(forms)) return;
  const separatedTwoWord = separateTwoWord(forms);
  const duplicatedEmails = deleteDuplicatedNicknames(forms, separatedTwoWord);
  answer = sortingEmails(duplicatedEmails);
  return answer;
}

function checkType(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (!checkEmailType(forms[i][0])) {
      console.log("이메일 형식이 잘못되었습니다.");
      return true;
    }
    if (!nicknameType(forms[i][1])) {
      console.log("닉네임 형식이 잘못되었습니다.");
      return true;
    }
  }
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
  const REG_EXP = /^[a-zA-Z0-9]([-_\.]?[0-9a-zA-Z])*@email.com$/;
  if (email.length >= 11 && email.length < 20 && REG_EXP.test(email)) {
    return true;
  }
  return false;
}

function nicknameType(nickname) {
  const REG_EXP = /^[가-힣]+$/;
  if (nickname.length >= 1 && nickname.length < 20 && REG_EXP.test(nickname)) {
    return true;
  }
  return false;
}

module.exports = problem6;
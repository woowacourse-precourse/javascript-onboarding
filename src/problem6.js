function problem6(forms) {
  const duplicateWords = forms.map(user => nicknameCombination(user[1])).flat();

  return [...new Set(nicknameValidator(forms, duplicateWords))].sort();
}

function nicknameValidator(users, duplicateWords) {
  const duplicateNicknameUsers = [];
  for (let duplicateWord of duplicateWords) {
    const duplicated = [];
    users.forEach(
      user => user[1].includes(duplicateWord) && duplicated.push(user[0])
    );
    if (isDuplicatedNickname(duplicated)) {
      duplicateNicknameUsers.push(...duplicated);
    }
  }

  return duplicateNicknameUsers;
}

function nicknameCombination(nickname) {
  const MAX_VALUE = nickname.length - 1;
  const nicknameCombi = [];
  for (let i = 0; i < MAX_VALUE; i++) {
    nicknameCombi.push(nickname[i] + nickname[i + 1]);
  }

  return nicknameCombi;
}

function isDuplicatedNickname(duplicated) {
  return duplicated.length >= 2 ? true : false;
}
module.exports = problem6;

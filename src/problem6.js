function problem6(forms) {
  const nickNameMap = getSubStringNickNameMap(forms);
  const duplicateUserEmailList = getDuplicateUserEmailList({ forms, nickNameMap });

  const sortedDuplicateUserEmailList = duplicateUserEmailList.sort();
  return sortedDuplicateUserEmailList;
}

function getSubStringNickNameMap(forms) {
  return forms.reduce((map, user) => {
    const [_, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickName = nickname.substring(i, i + 2);
      const currNicknameNum = map.get(substringNickName) || 0;
      map.set(substringNickName, currNicknameNum + 1);
    }

    return map;
  }, new Map());
}

function getDuplicateUserEmailList({ forms, nickNameMap }) {
  const duplicateUserEmail = forms.reduce((set, user) => {
    const [email, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickName = nickname.substring(i, i + 2);
      const currNicknameNum = nickNameMap.get(substringNickName);

      if (currNicknameNum > 1) set.add(email);
    }

    return set;
  }, new Set());

  return [...duplicateUserEmail];
}

module.exports = problem6;

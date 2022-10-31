function problem6(forms) {
  const nickNameMap = getSubStringNickNameMap(forms);
  const duplicateUserEmailList = getDuplicateUserEmailList({ forms, nickNameMap });

  const sortedDuplicateUserEmailList = duplicateUserEmailList.sort();
  return sortedDuplicateUserEmailList;
}

const getSubStringNickNameMap = forms =>
  forms.reduce((substringNameMap, user) => {
    const [_, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickName = nickname.substring(i, i + 2);
      const currNicknameNum = substringNameMap.get(substringNickName) || 0;
      substringNameMap.set(substringNickName, currNicknameNum + 1);
    }

    return substringNameMap;
  }, new Map());

const getDuplicateUserEmailList = ({ forms, nickNameMap }) => {
  const duplicateUserEmail = forms.reduce((duplicateUserEmailList, user) => {
    const [email, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickName = nickname.substring(i, i + 2);
      const currNicknameNum = nickNameMap.get(substringNickName);

      if (currNicknameNum > 1) duplicateUserEmailList.add(email);
    }

    return duplicateUserEmailList;
  }, new Set());

  return [...duplicateUserEmail];
};

module.exports = problem6;

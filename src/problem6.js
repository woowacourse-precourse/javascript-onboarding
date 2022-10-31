function problem6(forms) {
  const nickNameMap = Nickname(forms);
  const duplicateUserEmailList = UserEmail({ forms, nickNameMap });
  const sortedDuplicateUserEmailList = duplicateUserEmailList.sort();
  return sortedDuplicateUserEmailList;
}

function Nickname(forms) {
  return forms.reduce((map, user) => {
    console.log(user);
    console.log(map);

    const [_, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const searchNickname = nickname[i] + nickname[i + 1];
      const currNicknameNum = map.get(searchNickname) || 0;
      map.set(searchNickname, currNicknameNum + 1);
    }

    return map;
  }, new Map());
}

function UserEmail({ forms, nickNameMap }) {
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

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

module.exports = problem6;

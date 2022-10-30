function overlapNickname(forms) {
  return forms.reduce((map, user) => {
    const [_, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickname = nickname.substring(i, i + 2);
      const currNicknameNum = map.get(substringNickname) || 0;
      map.set(substringNickname, currNicknameNum + 1);
    }

    return map;
  }, new Map());
}

function getEmail({ forms, nickNameMap }) {
  const duplicateEmail = forms.reduce((set, user) => {
    const [email, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substringNickName = nickname.substring(i, i + 2);
      console.log(substringNickName);
      const currNicknameNum = nickNameMap.get(substringNickName);
      console.log(currNicknameNum);

      if (currNicknameNum > 1) set.add(email);
    }

    return set;
  }, new Set());
  return [...duplicateEmail];
}

function problem6(forms) {
  const nickNameMap = overlapNickname(forms);
  getEmail({
    forms,
    nickNameMap,
  });
}

function testCode() {
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ]);
}
testCode();
module.exports = problem6;

function overlapNickname(forms) {
  return forms.reduce((map, user) => {
    const [_, nickname] = user;

    for (let i = 0; i < nickname.length - 1; i++) {
      const substrNickname = nickname.substring(i, i + 2);
      const currentNicknameNum = map.get(substrNickname) || 0;
      map.set(substrNickname, currentNicknameNum + 1);
    }
    return map;
  }, new Map());
}

function problem6(forms) {
  const nickname = overlapNickname(forms);
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

function problem6(forms) {
  var answer = [];
  const email = [];
  const nickname = [];

  forms.forEach((user) => {
    email.push(user[0]);
    nickname.push(user[1]);
  });

  const dividedUserInfo = {};
  for (let i = 0; i < nickname.length; i++) {
    let currentNickname = nickname[i];
    for (let j = 0; j < currentNickname.length - 1; j++) {
      if (!dividedUserInfo[email[i]]) {
        dividedUserInfo[email[i]] = [
          currentNickname[j] + currentNickname[j + 1],
        ];
      } else {
        dividedUserInfo[email[i]].push(
          currentNickname[j] + currentNickname[j + 1]
        );
      }
    }
  }

  let usedNicknames = [];
  Object.values(dividedUserInfo).forEach((nickname) => {
    usedNicknames.push(nickname);
  });

  usedNicknames = usedNicknames.flat();
  for (let email in dividedUserInfo) {
    for (let i = 0; i < dividedUserInfo[email].length; i++) {
      const copyUsedNicknames = [...usedNicknames];
      let index = usedNicknames.indexOf(dividedUserInfo[email][i]);
      let findNickname = copyUsedNicknames.splice(index, 1);

      if (copyUsedNicknames.includes(findNickname[0])) {
        answer.push(email);
      }
    }
  }

  answer = new Set(answer);
  answer = Array.from(answer);
  answer.sort();

  return answer;
}
module.exports = problem6;

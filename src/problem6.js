function problem6(forms) {
  let answer = [];

  const emailList = forms.map((form) => form[0]);
  const nicknameList = forms.map((form) => form[1]);

  const dividedNicknameList = [].concat(...getBrokenNicknameList(nicknameList));

  return answer;
}

function getBrokenNicknameList(arr) {
  return arr.map((nickname) => {
    let brokenNickname = [];
    for (let i = 1; i < nickname.length; i++) {
      const substring = nickname[i - 1] + nickname[i];
      brokenNickname.push(substring);
    }
    return brokenNickname;
  });
}

module.exports = problem6;

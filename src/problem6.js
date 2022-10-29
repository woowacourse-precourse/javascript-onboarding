function problem6(forms) {
  let answer = [];
  let emailListOfduplicatedNickname = [];

  const emailList = forms.map((form) => form[0]);
  const nicknameList = forms.map((form) => form[1]);

  const dividedNicknameList = [].concat(...getBrokenNicknameList(nicknameList));
  const duplicatedwords = findDuplicates(dividedNicknameList);

  nicknameList.forEach((name, idx) => {
    for (let i = 0; i < duplicatedwords.length; i++) {
      if (name.includes(duplicatedwords[i])) {
        emailListOfduplicatedNickname.push(emailList[idx]);
      }
    }
  });

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

function findDuplicates(arr) {
  const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(filtered)];
}

module.exports = problem6;

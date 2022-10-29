function problem6(forms) {
  let answer = [];
  let emailListOfduplicatedNickname = [];
  const crew = {
    minimum: 1,
    maximum: 10000,
  };

  const emailList = forms.map((form) => form[0]);
  const nicknameList = forms.map((form) => form[1]);

  if (!checkValidCrewNumber(forms, crew.minimum, crew.maximum)) return;

  const dividedNicknameList = [].concat(...getBrokenNicknameList(nicknameList));
  const duplicatedwords = findDuplicates(dividedNicknameList);

  nicknameList.forEach((name, idx) => {
    for (let i = 0; i < duplicatedwords.length; i++) {
      if (name.includes(duplicatedwords[i])) {
        emailListOfduplicatedNickname.push(emailList[idx]);
      }
    }
  });

  answer = [...new Set(emailListOfduplicatedNickname)].sort((a, b) =>
    a.localeCompare(b)
  );

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

function checkValidCrewNumber(crews, minimum, maximum) {
  if (crews.length < minimum || crews.length > maximum) {
    console.error(`크루는 ${minimum}명이상 ${maximum}명 이하입니다`);
    return false;
  }
  return true;
}

module.exports = problem6;

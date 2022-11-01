function problem6(forms) {
  let answer = [];
  const emailListOfduplicatedNickname = [];
  const crew = {
    minimum: 1,
    maximum: 10000,
  };

  const emailList = forms.map((form) => form[0]);
  const nicknameList = forms.map((form) => form[1]);

  if (!isValidCrewNumber(forms, crew.minimum, crew.maximum)) return;
  if (!isValidEmail(emailList)) return;
  if (!isValidNickname(nicknameList)) return;

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
    const brokenNickname = [];
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

function isValidCrewNumber(crews, minimum, maximum) {
  if (crews.length < minimum || crews.length > maximum) {
    console.error(`크루는 ${minimum}명이상 ${maximum}명 이하입니다`);
    return false;
  }
  return true;
}

function isValidEmail(arr) {
  const regex = /^[a-zA-Z0-9._+-]+@email.com/;
  return arr.every((email) => {
    if (!regex.test(email) || email.length < 11 || email.length >= 20) {
      console.error('유효한 이메일 계정을 입력해주세요');
      return false;
    }
    return true;
  });
}

function isValidNickname(arr) {
  const regex = /^[ㄱ-ㅎ|가-힣]+$/;
  return arr.every((nickname) => {
    if (nickname.length < 1 || nickname.length >= 20) {
      console.error('닉네임은 1자 이상 20자 미만으로 입력해주세요');
      return false;
    }
    if (!regex.test(nickname)) {
      console.error('닉네임은 한글로 설정해주세요');
      return false;
    }
    if (nickname) return true;
  });
}

module.exports = problem6;

function problem6(forms) {
  if (forms.length < 0 || 10000 < forms.length)
    return Error("설정된 범위를 넘어섭니다.");

  if (!checkValue(forms)) return;

  const nicknameList = forms.map((form) => form[1]);

  let splitNicknames = nicknameList
    .map((email) => splitEmail(email))
    .reduce((acc, val) => acc.concat(val), []);

  let duplicateNameList = findDuplicatedName(splitNicknames);

  var answer = forms
    .filter((form) => isDuplicated(form[1], duplicateNameList))
    .map((form) => form[0])
    .sort();

  return answer;
}

// 닉네임을 두 글자씩 나누는 함수
const splitEmail = (nickname) => {
  let subset = [];
  for (let i = 0, nicknameLen = nickname.length - 1; i < nicknameLen; i++) {
    subset[i] = nickname.substr(i, 2);
  }

  return subset;
};

// 중복되는 닉네임을 찾는 함수
const findDuplicatedName = (splitNicknames) => {
  // Array.filter(callback(element, index, array)) array : filter를 호출한 배열
  return [
    ...new Set(
      splitNicknames.filter(
        (splitNickname, idx, splitNicknameArr) =>
          splitNicknameArr.indexOf(splitNickname) !== idx
      )
    ),
  ];
};

const isDuplicated = (nickname, duplicateNameList) => {
  return nickname.includes(...duplicateNameList);
};

const checkValue = (forms) => {
  for (let i = 0, formsLen = forms.length; i < formsLen; i++) {
    const [email, nickname] = forms[i];

    if (!isEmailTypeValid(email)) return false;
    if (!isNicknameTypeValid(nickname)) return false;
  }
  return true;
};

const isEmailTypeValid = (email) => {
  const re = /^[A-Za-z0-9]+@email.com/;
  if (email.length < 11 || 20 <= email.length || !re.test(email)) {
    console.log("이메일 형식이 잘못되었습니다");
    return false;
  }

  return true;
};

const isNicknameTypeValid = (nickname) => {
  const re = /[ㄱ-ㅎ|가-힣]/;
  if (nickname.length < 1 || 20 <= nickname.length || !re.test(nickname)) {
    console.log("닉네임 형식이 잘못되었습니다");
    return false;
  }

  return true;
};

module.exports = problem6;

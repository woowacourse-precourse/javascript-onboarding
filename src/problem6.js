function problem6(forms) {
  var answer = result(forms);
  return answer;
}

function result(forms) {
  forms = forms.filter(([email, nickname]) => {
    return checkEmail(email) && isKorea(nickname);
  });

  const twoElementNickNameMap = new Map();
  forms.forEach(([_, nickname]) => {
    setNickNameMap(twoElementNickNameMap, subNickNameTwoElement(nickname));
  });

  const getKeyDuplicateNickName = [];
  twoElementNickNameMap.forEach((value, key) => {
    if (value > 1) getKeyDuplicateNickName.push(key);
  });

  forms = forms
    .filter(([_, nickName]) =>
      isDuplicateNickName(getKeyDuplicateNickName, nickName)
    )
    .map(([email, _]) => email);

  forms = [...new Set([...forms])];
  forms.sort((a, b) => (a > b ? 1 : -1));

  return forms;
}

const POSSIBLE_EMAIL = "email.com";

const checkEmail = (email) => {
  const [_, domain] = email.split("@");

  return domain === POSSIBLE_EMAIL;
};

const isKorea = (nickname) => {
  return Boolean(nickname.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/));
};

const subNickNameTwoElement = (nickname) => {
  const elementsArr = [];
  [...nickname].forEach((char, idx) => {
    if (idx === nickname.length - 1) return;
    const element = char + nickname[idx + 1];
    elementsArr.push(element);
  });

  return elementsArr;
};

const setNickNameMap = (nickNameMap, elementsArr) => {
  elementsArr.forEach((element) =>
    nickNameMap.set(element, (nickNameMap.get(element) || 0) + 1)
  );
};

const isDuplicateNickName = (arr, nickname) => {
  const elementsArr = subNickNameTwoElement(nickname);

  return elementsArr.some((element) => {
    return arr.includes(element);
  });
};

module.exports = problem6;

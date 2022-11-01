const POSSIBLE_EMAIL = "email.com";

const isCorrectEmail = (email) => {
  const [_, domain] = email.split("@");

  return domain === POSSIBLE_EMAIL;
};

const isHangeul = (nickname) => {
  return Boolean(nickname.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/));
};

const splitTwoLetters = (nickname) => {
  const lettersArr = [];
  [...nickname].forEach((char, idx) => {
    if (idx === nickname.length - 1) return;
    const letter = char + nickname[idx + 1];
    lettersArr.push(letter);
  });

  return lettersArr;
};

const setNickNameMap = (nickNameMap, lettersArr) => {
  lettersArr.forEach((letter) =>
    nickNameMap.set(letter, (nickNameMap.get(letter) || 0) + 1)
  );
};

const isOverLapping = (arr, nickname) => {
  const lettersArr = splitTwoLetters(nickname);

  return lettersArr.some((letter) => {
    return arr.includes(letter);
  });
};

function problem6(forms) {
  forms = forms.filter(([email, nickname]) => {
    return isCorrectEmail(email) && isHangeul(nickname);
  });

  const nickNameMap = new Map();
  forms.forEach(([_, nickname]) => {
    setNickNameMap(nickNameMap, splitTwoLetters(nickname));
  });

  const overLappingWords = [];
  nickNameMap.forEach((value, key) => {
    if (value > 1) overLappingWords.push(key);
  });

  forms = forms
    .filter(([_, nickName]) => isOverLapping(overLappingWords, nickName))
    .map(([email, _]) => email);

  forms = [...new Set([...forms])];
  forms.sort((a, b) => (a > b ? 1 : -1));

  return forms;
}

module.exports = problem6;

const isCorrectEmail = (email) => {
  const [_, domain] = email.split("@");
  return domain === "email.com";
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

function problem6(forms) {
  forms = forms.filter(([email, nickname]) => {
    return isCorrectEmail(email) && isHangeul(nickname);
  });

  const nickNameMap = new Map();

  forms.forEach(([_, nickname]) => {
    setNickNameMap(nickNameMap, splitTwoLetters(nickname));
  });
  var answer;
  return answer;
}

module.exports = problem6;

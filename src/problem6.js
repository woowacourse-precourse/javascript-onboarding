function problem6(forms) {
  var answer;
  return answer;
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

module.exports = problem6;

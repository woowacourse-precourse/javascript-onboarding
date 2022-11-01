const getValidUser = (users) => {
  const EMAIL_MIN_LENGTH = 11;
  const EMAIL_MAX_LENGTH = 20;
  const NICKNAME_MIN_LENGTH = 1;
  const NICKNAME_MAX_LENGTH = 20;

  const isEmailValid = /[a-z0-9]+@+email.com$/;
  const isNickNameKorean = /^[ㄱ-ㅎ|가-힣|]+$/;

  return users.filter(
    ([email, nickname]) =>
      (email.length >= EMAIL_MIN_LENGTH || email.length < EMAIL_MAX_LENGTH) &&
      (nickname.length >= NICKNAME_MIN_LENGTH ||
        nickname.length < NICKNAME_MAX_LENGTH) &&
      isEmailValid.test(email) &&
      isNickNameKorean.test(nickname)
  );
};

function problem6(forms) {
  const validUsers = getValidUser(forms);

  let result = new Set();
  let words = new Map();

  for (let e of validUsers) {
    let email = e[0];
    let nickName = e[1];

    for (let i = 0; i < nickName.length - 1; i++) {
      let word = nickName.slice(i, i + 2);
      if (words.has(word)) {
        result.add(email);
        result.add(words.get(word));
      } else {
        words.set(word, email);
      }
    }
  }

  result = Array(...result).sort((a, b) => a.localeCompare(b));

  return result;
}

module.exports = problem6;

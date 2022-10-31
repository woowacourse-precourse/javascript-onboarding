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

module.exports = problem6;

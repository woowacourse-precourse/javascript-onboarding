const isCorrectEmail = (email) => {
  const [_, domain] = email.split("@");
  return domain === "email.com";
};

const isHangeul = (nickname) => {
  return Boolean(nickname.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/));
};

function problem6(forms) {
  forms = forms.filter(([email, nickname]) => {
    return isCorrectEmail(email) && isHangeul(nickname);
  });
  console.log(forms);
  var answer;
  return answer;
}

module.exports = problem6;

const isCorrectEmail = (email) => {
  const [_, domain] = email.split("@");
  return domain === "email.com";
};

function problem6(forms) {
  forms = forms.filter(([email, nickname]) => {
    return isCorrectEmail(email);
  });
  var answer;
  return answer;
}

module.exports = problem6;

function problem6(forms) {
  return duplicationEmailList(forms);
}

function duplicationEmailList(forms) {
  const emailCheckWord = {};
  const emailExistCheckWord = new Set();

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const check = nickname.substring(i, i + 2);

      if (emailCheckWord[check]) {
        emailExistCheckWord.add(emailCheckWord[check]);
        emailExistCheckWord.add(email);
      } else {
        emailCheckWord[check] = email;
      }
    }
  });

  return [...emailExistCheckWord].sort();
}

module.exports = problem6;

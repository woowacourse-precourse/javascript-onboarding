function problem6(forms) {
  const nicknames = forms.map((form) => form[1]);
  const twoLetters = [];

  nicknames.forEach((nickname) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      twoLetters.push(nickname[i] + nickname[i + 1]);
    }
  });
}

module.exports = problem6;

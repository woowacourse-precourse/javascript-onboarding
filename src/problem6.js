function problem6(forms) {
  forms.forEach((crew) => {
    const nickname = crew[1];
    for (let i = 0; i < nickname.length - 1; i++) {
      const twoLetters = nickname[i] + nickname[i + 1];
    }
  });
}

module.exports = problem6;

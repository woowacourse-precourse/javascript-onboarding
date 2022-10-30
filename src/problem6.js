function problem6(forms) {
  const twoLettersMap = new Map();

  forms.forEach(([_, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const twoLetters = nickname.substring(i, i + 2);
      if (twoLettersMap.has(twoLetters)) {
        twoLettersMap.set(twoLetters, twoLettersMap.get(twoLetters) + 1);
      } else {
        twoLettersMap.set(twoLetters, 1);
      }
    }
  });
}

module.exports = problem6;

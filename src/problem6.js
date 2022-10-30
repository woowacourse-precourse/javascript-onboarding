function problem6(forms) {
  const twoLettersMap = new Map();
  const emailList = [];

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

  for (let [key, value] of twoLettersMap.entries()) {
    if (value < 2) twoLettersMap.delete(key);
  }

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const twoLetters = nickname.substring(i, i + 2);
      if (twoLettersMap.has(twoLetters)) {
        emailList.push(email);
      }
    }
  });

  const emailSet = new Set(emailList.sort());
  return [...emailSet];
}

module.exports = problem6;

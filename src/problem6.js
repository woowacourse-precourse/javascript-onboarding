function getPartsOfNickname(nickname) {
  const parts = [];
  let numberOfLetters = 2;
  while (numberOfLetters <= nickname.length) {
    let currentIndex = 0;
    while (currentIndex + numberOfLetters <= nickname.length) {
      parts.push(nickname.substr(currentIndex, numberOfLetters));
      currentIndex++;
    }
    numberOfLetters++;
  }
  return parts;
}

function problem6(forms) {
  const duplicates = forms.reduce((_duplicates, form) => {
    const [email, nickname] = form;
    getPartsOfNickname(nickname).forEach((part) => {
      _duplicates[part] = [...(_duplicates[part] || []), email];
    });
    return _duplicates;
  }, {});
  const result = Object.values(duplicates).reduce((emails, duplicate) => {
    if (duplicate.length > 1) return [...emails, ...duplicate];
    return emails;
  }, []);
  return [...new Set(result.sort())];
}

module.exports = problem6;

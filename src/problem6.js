function problem6(forms) {
  const emails = forms.map((form) => form[0]);
  const nicknames = forms.map((form) => form[1]);
  const twoLetters = [];

  nicknames.forEach((nickname) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      twoLetters.push(nickname[i] + nickname[i + 1]);
    }
  });

  const duplicateLetters = twoLetters.filter((letter, index) => {
    const indexOfLetter = twoLetters.indexOf(letter);
    return indexOfLetter !== twoLetters.lastIndexOf(letter) && indexOfLetter === index;
  });

  const duplicateNicknames = nicknames.filter((nickname) =>
    duplicateLetters.map((letter) => nickname.includes(letter)).includes(true),
  );

  const duplicateIndex = duplicateNicknames.map((nickname) => nicknames.indexOf(nickname));
  return duplicateIndex.map((index) => emails[index]).sort();
}

module.exports = problem6;

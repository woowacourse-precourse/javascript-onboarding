function problem6(forms) {
  const splittedNickname = {};

  const isDuplicated = (word) => {
    return splittedNickname[word] === undefined ? false : true;
  };

  let bannedEmails = forms.reduce((acc, [email, nickname], idx) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      let word = nickname.slice(i, i + 2);

      if (isDuplicated(word)) {
        acc.add(email).add(forms[splittedNickname[word]][0]);
      } else {
        splittedNickname[nickname.slice(i, i + 2)] = idx;
      }
    }
    return acc;
  }, new Set());

  return Array.from(bannedEmails).sort((a, b) => a.localeCompare(b));
}

module.exports = problem6;

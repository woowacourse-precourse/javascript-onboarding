function problem6(forms) {
  const crews = forms.map(([email, nickname]) => {
    const twoLetters = sliceTwoLetters(nickname);

    return [email, twoLetters];
  });

  const emailSet = new Set([]);

  for (let i = 0; i < crews.length; i++) {
    for (let j = i + 1; j < crews.length; j++) {
      const [email, twoLetters] = crews[i];
      const [comparisonEmail, comparisonTwoLetters] = crews[j];

      const duplicates = twoLetters.filter((nick) =>
        comparisonTwoLetters.includes(nick)
      );

      if (duplicates.length > 0) {
        emailSet.add(email);
        emailSet.add(comparisonEmail);
      }
    }
  }

  const result = Array.from(emailSet).sort();

  return result;
}

function sliceTwoLetters(nickname) {
  const twoLetters = [];
  if (nickname.length === 1) twoLetters.push(nickname);

  for (let i = 0; i < nickname.length - 1; i++) {
    const twoLetter = nickname.slice(i, i + 2);
    twoLetters.push(twoLetter);
  }

  return twoLetters;
}

module.exports = problem6;

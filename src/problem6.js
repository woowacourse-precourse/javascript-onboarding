function problem6(forms) {
  const EMAIL = 0;
  const NICKNAME = 1;

  let answer = [];

  forms.map((crew) => {
    const nickname = crew[NICKNAME];
    const currentEmail = crew[EMAIL];

    for (let i = 0; i < nickname.length - 1; i++) {
      const substring = nickname.substring(i, i + 2);

      const crewsThatMatchesSubstring = forms.filter(
        (crew) =>
          crew[EMAIL] !== currentEmail && crew[NICKNAME].includes(substring)
      );

      answer = answer.concat(crewsThatMatchesSubstring);
    }
  });
  return answer;
}

module.exports = problem6;

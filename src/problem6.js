function problem6(forms) {
  const answer = [];

  forms.forEach((crew) => {
    const nickname = crew[1];
    const email = crew[0];

    for (let i = 0; i < nickname.length - 1; i++) {
      const twoLetters = nickname[i] + nickname[i + 1];

      forms.forEach((crew2) => {
        const nickname2 = crew2[1];
        const email2 = crew2[0];
        if (nickname2.includes(twoLetters) && nickname !== nickname2)
          answer.push(email, email2);
      });
    }
  });
  return [...new Set(answer)].sort();
}

module.exports = problem6;

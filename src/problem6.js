function problem6(forms) {
  const answer = [];

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const twoLetters = nickname[i] + nickname[i + 1];

      forms.forEach(([email2, nickname2]) => {
        if (nickname2.includes(twoLetters) && nickname !== nickname2)
          answer.push(email, email2);
      });
    }
  });
  return [...new Set(answer)].sort();
}

module.exports = problem6;

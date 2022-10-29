function getDuplicateCrewEmailList(forms) {
  const emailInfoWithPattern = {};
  const emailSet = new Set();

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const pattern = nickname.substring(i, i + 2);

      if (emailInfoWithPattern[pattern]) {
        emailSet.add(emailInfoWithPattern[pattern]);
        emailSet.add(email);
      } else {
        emailInfoWithPattern[pattern] = email;
      }
    }
  });

  return [...emailSet].sort();
}

function problem6(forms) {
  const answer = getDuplicateCrewEmailList(forms);

  return answer;
}

module.exports = problem6;

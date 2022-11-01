function checkDuplicate({ pattern, wordSet, emailSet, email }) {
  wordSet.forEach((word) => {
    if (!pattern[word]) {
      pattern[word] = email;
      return;
    }
    emailSet.add(email);
    emailSet.add(pattern[word]);
  });
}

function problem6(forms) {
  const emailSet = new Set();
  const pattern = {};

  forms.forEach(([email, nickName]) => {
    const wordSet = new Set();
    for (let i = 0; i < nickName.length - 1; i++) {
      wordSet.add(nickName.substr(i, 2));
    }

    checkDuplicate({ pattern, wordSet, emailSet, email });
  });

  const answer = Array.from(emailSet).sort();
  return answer;
}
module.exports = problem6;

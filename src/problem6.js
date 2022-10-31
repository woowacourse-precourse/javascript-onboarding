function makeWordSet(nickName) {
  const wordSet = new Set();
  for(let i = 0; i < nickName.length - 1; i++) {
    wordSet.add(nickName.substr(i, 2));
  }

  return wordSet;
}

function checkDuplicatePattern(wordSet, patterns, emailSet, email) {
  wordSet.forEach((word) => {
    if(!patterns[word]) {
      patterns[word] = email;
      return;
    }

    emailSet.add(email);
    emailSet.add(patterns[word]);
  });
}

function setToSortedArray(set) { return Array.from(set).sort(); }

function problem6(forms) {
  const emailSet = new Set();
  const patterns = {};

  forms.forEach(([email, nickName]) => {
    const wordSet = makeWordSet(nickName);
    checkDuplicatePattern(wordSet, patterns, emailSet, email);
  });

  const answer = setToSortedArray(emailSet);

  return answer;
}

module.exports = problem6;

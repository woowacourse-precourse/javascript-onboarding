function makeWordSet(nickName) {
  const wordSet = new Set();
  for(let i = 0; i < nickName.length - 1; i++)
    wordSet.add(nickName.substr(i, 2));

  return wordSet;
}

function checkDuplicatePattern(wordSet, patterns, emailSet, email) {
  wordSet.forEach(([firstLetter, secondLetter]) => {
    if(!patterns[firstLetter] ) {
      patterns[firstLetter] = { [secondLetter] : email };
      return;
    }
    if(!patterns[firstLetter][secondLetter]) {
      patterns[firstLetter][secondLetter] = email;
      return;
    }

    emailSet.add(email);
    emailSet.add(patterns[firstLetter][secondLetter]);
  });
}

function setToSortedArray(set) {
  return Array.from(set).sort();
}

function problem6(forms) {
  var answer;
  const emailSet = new Set();
  const patterns = {};

  forms.forEach(([email, nickName]) => {
    const wordSet = makeWordSet(nickName);
    checkDuplicatePattern(wordSet, patterns, emailSet, email);
  });

  answer = setToSortedArray(emailSet);
  return answer;
}

module.exports = problem6;

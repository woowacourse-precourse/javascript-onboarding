function makeWordSet(nickName) {
  const wordSet = new Set();
  for(let i = 0; i < nickName.length - 1; i++)
    wordSet.add(nickName.substr(i, 2));

  return wordSet;
}

function problem6(forms) {
  var answer;

  forms.forEach(([email, nickName]) => {
    const wordSet = makeWordSet(nickName);

  });

  return answer;
}

module.exports = problem6;

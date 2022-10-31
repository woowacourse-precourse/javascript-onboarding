const makeTokenArray = (nickname) => {
  const tokenArray = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    const token = nickname.slice(i, i + 2);
    tokenArray.push(token);
  }
  return tokenArray;
};

const findDuplicate = (array) => {
  const distinctSet = new Set(array);
  const duplicates = array.filter((item) => {
    if (distinctSet.has(item)) {
      distinctSet.delete(item);
    } else {
      return item;
    }
  });
  return [...new Set(duplicates)];
};

function problem6(forms) {
  var answer = [];

  const nicknameTokens = forms.reduce((acc, [email, nickname]) => {
    return acc.concat(makeTokenArray(nickname));
  }, []);

  const duplicatedTokens = findDuplicate(nicknameTokens);

  answer = forms
    .filter(([email, nickname]) => {
      return duplicatedTokens.some((token) => nickname.includes(token));
    })
    .map(([email, nickname]) => email);

  return [...new Set(answer.sort())];
}

module.exports = problem6;

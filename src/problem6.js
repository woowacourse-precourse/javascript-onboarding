const makeTokenArray = (nickname) => {
  let tokenArray = [];
  for (let i = 0; i < nickname.length / 2; i++) {
    const token = nickname.slice(i, i + 2);
    tokenArray.push(token);
  }
  return tokenArray;
};

const findDuplicate = (array) => {
  let distinctSet = new Set(array);
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

  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];

    for (let k = 0; k < duplicatedTokens.length; k++) {
      if (nickname.includes(duplicatedTokens[k])) {
        answer.push(email);
        break;
      }
    }
  }

  return answer.sort();

  return answer;
}

module.exports = problem6;

const makeTokenArray = (nickname) => {
  let tokenArray = [];
  for (let i = 0; i < nickname.length / 2; i++) {
    const token = nickname.slice(i, i + 2);
    tokenArray.push(token);
  }
  return tokenArray;
};

function problem6(forms) {
  var answer = [];

  const nicknameTokens = forms.reduce((acc, [email, nickname]) => {
    return acc.concat(makeTokenArray(nickname));
  }, []);

  return answer;
}

module.exports = problem6;

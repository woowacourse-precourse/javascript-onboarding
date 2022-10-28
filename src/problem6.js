function problem6(forms) {
  const duplicateWords = forms.map(user => nicknameCombination(user[1])).flat();
  return answer;
}

function nicknameCombination(nickname) {
  const MAX_VALUE = nickname.length - 1;
  const nicknameCombi = [];
  for (let i = 0; i < MAX_VALUE; i++) {
    nicknameCombi.push(nickname[i] + nickname[i + 1]);
  }

  return nicknameCombi;
}
module.exports = problem6;

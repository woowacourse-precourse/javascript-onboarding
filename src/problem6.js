function problem6(forms) {
  var answer;
  return answer;
}

function sliceNickname(nickname) {
  const nicknameSet = new Set();
  for (let i = 2; i <= nickname.length; i++) {
    nicknameSet.add(nickname.slice(i-2, i));
  }

  return nicknameSet;
}

module.exports = problem6;

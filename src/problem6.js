function problem6(forms) {
  var answer;
  return answer;
}

function getConsecutiveLetters(nickname) {
  const consecutiveLetters = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    consecutiveLetters.push(nickname.substr(i, 2));
  }
  return consecutiveLetters;
}

module.exports = problem6;

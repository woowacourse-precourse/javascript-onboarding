const NICK_NAME = 1;

function isLengthOne(nickname) {
  return nickname.length === 1;
}

function problem6(forms) {
  var answer;
  const isDuplicate = new Array(forms.length).fill(0);

  for (let i = 0; i < forms.length; i++) {
    if (isLengthOne(forms[i][NICK_NAME])) {
      for (let j = 0; j < forms.length; j++) {
        if (i == j) continue;
        if (isDuplicate[j] === 1) continue;
        if (forms[i][NICK_NAME] === forms[j][NICK_NAME]) {
          isDuplicate[i] = 1;
          isDuplicate[j] = 1;
        }
      }
    }
  }
  return answer;
}

module.exports = problem6;

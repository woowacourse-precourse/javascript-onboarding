function problem6(forms) {}

function getAllNickName(forms) {
  const nickNames = [];
  for (let i = 0; i < forms.length; i++) {
    nickNames.push(forms[i][1]);
  }
  return nickNames;
}

module.exports = problem6;

function problem6(forms) {
  const nickNames = getAllNickName(forms);
  const twoLetters = combinateTwoLetter(nickNames);
}

function getAllNickName(forms) {
  const nickNames = [];
  for (let i = 0; i < forms.length; i++) {
    nickNames.push(forms[i][1]);
  }
  return nickNames;
}

function combinateTwoLetter(nickNames) {
  let twoLetters = [];
  for (let i = 0; i < nickNames.length; i++) {
    for (let j = 0; j < nickNames[i].length - 1; j++) {
      const subStr = nickNames[i].substring(j, 2 + j);
      twoLetters.push(subStr);
    }
  }
  twoLetters = Array.from(new Set(twoLetters));
  return twoLetters;
}
module.exports = problem6;

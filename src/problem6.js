function problem6(forms) {
  const nickNames = getAllNickName(forms);
  const twoLetters = combinateTwoLetter(nickNames);
  const duplicateLetters = duplicatedTwoLetters(nickNames, twoLetters);
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

function duplicatedTwoLetters(nickNames, twoLetters) {
  const duplicateLetters = [];
  for (let i = 0; i < twoLetters.length; i++) {
    let duplicate = 0;
    for (let j = 0; j < nickNames.length; j++) {
      if (nickNames[j].includes(twoLetters[i])) {
        duplicate++;
      }
    }
    if (duplicate > 1) {
      duplicateLetters.push(twoLetters[i]);
    }
  }
  return duplicateLetters;
}
module.exports = problem6;

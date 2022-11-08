function problem6(forms) {
  return duplicateCheckApp(forms);
}

function duplicateCheckApp(forms) {
  const infoOfUsedTwoLetter = new Map();
  const emailOfUsedNickName = new Set();
  forms.forEach(([crewEmail, crewNickName]) => {
    for (let i = 0; i < crewNickName.length - 1; i++) {
      const twoLetterName = crewNickName.substr(i, i + 2);
      if (infoOfUsedTwoLetter.has(twoLetterName)) {
        emailOfUsedNickName.add(crewEmail);
        emailOfUsedNickName.add(infoOfUsedTwoLetter.get(twoLetterName));
      } else {
        infoOfUsedTwoLetter.set(twoLetterName, crewEmail);
      }
    }
  });
  return [...emailOfUsedNickName].sort();
}

module.exports = problem6;

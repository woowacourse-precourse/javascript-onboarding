function problem6(forms) {
  const emailList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[0]);
  const nicknameList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[1]);

  const duplicateCrewEmail = [];
  const leastDuplicateWord = 2;

  for (let i = 0; i < nicknameList.length; i++) {
    for (let j = 0; j <= nicknameList[i].length - 2; j++) {
      const headSliceWord = nicknameList[i].slice(0 + j, leastDuplicateWord + j);
      for (let k = 0; k < nicknameList.length; k++) {
        if ((i !== k) && (nicknameList[k].includes(headSliceWord))) duplicateCrewEmail.push(emailList[k])
      }
    }
  }
  return [...new Set(duplicateCrewEmail)].sort();
}


module.exports = problem6;
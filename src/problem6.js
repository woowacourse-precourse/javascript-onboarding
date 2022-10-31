const addName = (crewName, nameMap) => {
  let crewTwoLetterSet = new Set();

  for (let i = 0; i < crewName.length - 1; i++) {
    const twoLetterOfCrewName = crewName[i] + crewName[i + 1];
    crewTwoLetterSet.add(twoLetterOfCrewName);
  }

  crewTwoLetterSet = Array.from(crewTwoLetterSet);

  for (let i = 0; i < crewTwoLetterSet.length; i++) {
    const currentTwoLetter = crewTwoLetterSet[i];

    if (nameMap.has(currentTwoLetter))
      nameMap.set(currentTwoLetter, nameMap.get(currentTwoLetter) + 1);
    else
      nameMap.set(currentTwoLetter, 1);
  }
}

const isRedundantName = (crewName, nameMap) => {
  for (let i = 0; i < crewName.length - 1; i++) {
    const twoLetterOfCrewName = crewName[i] + crewName[i + 1];

    if (nameMap.get(twoLetterOfCrewName) > 1)
      return true;
  }

  return false;
}

const problem6 = forms => {
  let nameMap = new Map();
  let emailSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    addName(forms[i][1], nameMap);
  }

  for (let i = 0; i < forms.length; i++) {
    if (isRedundantName(forms[i][1], nameMap))
      emailSet.add(forms[i][0]);
  }

  let answer = Array.from(emailSet).sort();
  return answer;
}

module.exports = problem6;

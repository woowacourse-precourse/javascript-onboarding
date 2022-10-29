const splitName = (crewName) => {
  const splittedLetter = [];
  for (
    let firstLetterIdx = 0;
    firstLetterIdx < crewName.length - 1;
    firstLetterIdx++
  ) {
    splittedLetter.push(crewName.substr(firstLetterIdx, 2));
  }
  return splittedLetter;
};

const isDuplicated = (forms, currentIdx) => {
  let duplicate = false;
  const currentCrew = forms[currentIdx];
  const currentCrewName = currentCrew[1];
  const splittedName = splitName(currentCrewName);

  forms.forEach((otherCrew, idx) => {
    if (duplicate) return;
    if (idx === currentIdx) return;

    const otherCrewName = otherCrew[1];
    splittedName.forEach((word) => {
      if (otherCrewName.includes(word)) duplicate = true;
    });
  });
  return duplicate;
};

const getDuplicateNames = (forms) => {
  const duplicatedCrew = [];
  forms.forEach((crew, idx) => {
    if (isDuplicated(forms, idx)) duplicatedCrew.push(crew);
  });
  return duplicatedCrew;
};

function problem6(forms) {
  var answer;
  console.log(getDuplicateNames(forms));
  return answer;
}

module.exports = problem6;

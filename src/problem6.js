function problem6(forms) {
  let checkDuplication = [];
  for (let nCrew = 0; nCrew < forms.length; nCrew++) {
    for (let i = 0; i < forms[nCrew][1].length - 1; i++) {
      let seperatedNickname = forms[nCrew][1].substr(i, 2);
      for (let mCrew = nCrew + 1; mCrew < forms.length; mCrew++) {
        if (forms[mCrew][1].includes(seperatedNickname)) {
          checkDuplication[mCrew] = true;
          checkDuplication[nCrew] = true;
        }
      }
    }
    if (checkDuplication[nCrew] != true) checkDuplication[nCrew] = false;
  }
  let setForDeduplicationEmail = new Set();
  for (let nCrew = 0; nCrew < forms.length; nCrew++) {
    if (checkDuplication[nCrew]) setForDeduplicationEmail.add(forms[nCrew][0]);
  }
  const answer = [...setForDeduplicationEmail];
  answer.sort();
  return answer;
}

module.exports = problem6;

function problem6(forms) {
  return checkOverlap(forms);
}

function substrNickName(nickName) {
  const nicknameArray = [];
  for (let i = 0; i < nickName.length - 1; i++) {
    nicknameArray.push(nickName.substring(i, i + 2));
  }

  return nicknameArray;
}

function checkOverlapNickname(form, overlapArray, overlapSet) {
  const nicknameArray = substrNickName(form[1]);
  for (let i = 0; i < nicknameArray.length; i++) {
    if (overlapSet.has(nicknameArray[i])) {
      overlapArray.push(form[0]);
    }
    overlapSet.add(nicknameArray[i]);
  }
}

function checkOverlap(forms) {
  const overlapSet = new Set();
  const overlapArray = [];
  for (let i = 0; i < forms.length; i++) {
    checkOverlapNickname(forms[i], overlapArray, overlapSet);
  }
  overlapSet.clear();
  for (let i = forms.length - 1; i >= 0; i--) {
    checkOverlapNickname(forms[i], overlapArray, overlapSet);
  }
  const returnSet = new Set(overlapArray);
  return [...returnSet].sort();
}

module.exports = problem6;

function findAtIndex(email) {
  return email.indexOf('@');
}

function isValidEmail(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (
      forms[i][0].length < 11 ||
      forms[i][0].length > 19 ||
      !(forms[i][0].slice(findAtIndex(forms[i][0])) === "@email.com")
    ) {
      return false;
    }
  }

  return true;
}

function checkKorean(char) {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;

  return (regExp.test(char)) ? true : false;
}

function isValidNickName(forms) {
  for (i = 0; i < forms.length; i++) {
    if (
      forms[i][1].length < 1 ||
      forms[i][1].length > 19 ||
      !checkKorean(forms[i][1])
    ) {
      return false;
    }
  }

  return true;
}

function substrNickName(nickName) {
  const substrNickNameArr = [];
  for (let i = 0; i < nickName.length - 1; i++) {
    substrNickNameArr.push(nickName.substring(i, i + 2));
  }

  return substrNickNameArr;
}

function pushOverlapNickName(form, overlapArr, overlapSet) {
  const substrNickNameArr = substrNickName(form[1]);
  for (let i = 0; i < substrNickNameArr.length; i++) {
    if (overlapSet.has(substrNickNameArr[i])) {
      overlapArr.push(form[0]);
    }
    overlapSet.add(substrNickNameArr[i]);
  }
}

function checkOverlap(forms) {
  const overlapSet = new Set();
  const overlapArr = [];
  for (let i = 0; i < forms.length; i++) {
    pushOverlapNickName(forms[i], overlapArr, overlapSet);
  }
  overlapSet.clear();
  for (let i = forms.length - 1; i > -1; i--) {
    pushOverlapNickName(forms[i], overlapArr, overlapSet);
  }
  const returnSet = new Set(overlapArr);
  return [...returnSet].sort();
}

function problem6(forms) {
  if (!isValidEmail(forms) || !isValidNickName(forms)) {
    return;
  }

  return checkOverlap(forms);
}

module.exports = problem6;

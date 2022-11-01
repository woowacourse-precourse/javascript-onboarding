function checkEmail(email) {
  exp = /@email.com/;
  emailNum = email.search(exp);
  if (!(emailNum > 0 && emailNum < 11)) {
    return -1;
  }
}

function isNotKorean(str) {
  return !/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/.test(str);
}

function checkName(name) {
  if (isNotKorean(name) == true) {
    return -1;
  } else if (!(name.length > 0 && name.length < 21)) {
    return -1;
  }
  return 1;
}

function isCorrect(form) {
  if (checkEmail(form[0]) == -1) {
    return -1;
  } else if (checkName(form[1]) == -1) {
    return -1;
  }
  return 1;
}

function crewNum(forms) {
  if (!(forms.length > 0 && forms.length < 10001)) {
    return -1;
  }
  return 1;
}

function subStrName(nickName) {
  const subNickNameArr = [];
  for (let i = 0; i < nickName.length - 1; i++) {
    subNickNameArr.push(nickName.substring(i, i + 2));
  }
  return subNickNameArr;
}

function addOverlapName(form, overlapArr, setOverlap) {
  const subNicknameArr = subStrName(form[1]);
  for (let j = 0; j < subNicknameArr.length; j++) {
    if (setOverlap.has(subNicknameArr[j])) {
      overlapArr.push(form[0]);
    }
    setOverlap.add(subNicknameArr[j]);
  }
}

function getOverlap(forms) {
  const overlapArr = [];
  const setOverlap = new Set();
  for (let i = 0; i < forms.length; i++) {
    addOverlapName(forms[i], overlapArr, setOverlap);
  }
  setOverlap.clear();
  for (let i = forms.length - 1; i > -1; i--) {
    addOverlapName(forms[i], overlapArr, setOverlap);
  }
  const res = new Set(overlapArr);
  return [...res].sort();
}

function isRight(forms) {
  let i = 0;
  if (crewNum(forms) == -1) {
    return -1;
  }
  for (i = 0; i < forms.length; i++) {
    if (isCorrect(forms[i]) == -1) {
      return -1;
    }
  }
  return getOverlap(forms);
}

function problem6(forms) {
  return isRight(forms);
}

module.exports = problem6;

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

function subStrWord(word) {
  const subArr = [];
  for (i = 0; i < word.length - 1; i++) {
    subArr.push(word.substring(i, i + 2));
  }
  const set = new Set(subArr);
  const subArrSet = [...set];
  // console.log(subArrSet);
  return subArrSet;
}
function findOverLapArr(forms) {
  const checkArr = [];
  let i = 0;
  for (i = 0; i < forms.length; i++) {
    const subStr = subStrWord(forms[i][1]);
    // console.log(subStr);
    checkArr.push(...subStr);
  }
  // console.log(checkArr);
  return checkArr;
}

function isOverlapArrCheck(checkArr, twoWords) {
  const finalWords = [];
  for (i = 0; i < checkArr.length; i++) {
    const nickName = checkArr[i];
    if (nickName == twoWords) {
      finalWords.push(nickName);
    }
  }
  console.log(finalWords);
  if (finalWords.length != 1) {
    return 1;
  }
  return 0;
}

function isOverlapForm(form, checkArr) {
  const subNicknameArr = subStrWord(form[1]);
  for (let j = 0; j < subNicknameArr.length; j++) {
    if (isOverlapArrCheck(checkArr, subNicknameArr[j]) == 1) {
      return 1;
    }
  }
  return 0;
}

function getOverlap(forms, checkArr) {
  //
  const overlapArr = [];
  for (let i = 0; i < forms.length; i++) {
    if (isOverlapForm(forms[i], checkArr) == 1) {
      overlapArr.push(forms[i][0]);
    }
  }
  return overlapArr;
}

function isRight(forms) {
  let i = 0;
  if (crewNum(forms) == -1) {
    return -1;
  }
  for (i = 0; i < forms.length; i++) {
    if (isCorrect(forms[i]) == -1) return -1;
  }
  const setArr = findOverLapArr(forms);
  // console.log(setArr);
  const overlapArr = getOverlap(forms, setArr);
  return overlapArr.sort(); //
}

function problem6(forms) {
  // console.log(isRight(forms));
  return isRight(forms);
}

module.exports = problem6;
problem6([
  ["jsssm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

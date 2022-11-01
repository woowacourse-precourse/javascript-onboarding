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

function getCheckArr(forms) {
  const checkArr = [];
  for (let i = 0; i < forms.length; i++) {
    const substrNickNameArr = substrNickName(forms[i][1]);
    checkArr.push(...substrNickNameArr);
  }

  return checkArr;
}

function isOverlapInCheckArr(checkArr, substrNickName) {
  return (
    checkArr.filter(element => substrNickName === element).length !== 1
  ) ? true : false;
}

function isOverlapForm(form, checkArr) {
  const substrNickNameArr = substrNickName(form[1]);
  for (let j = 0; j < substrNickNameArr.length; j++) {
    if (isOverlapInCheckArr(checkArr, substrNickNameArr[j])) {
      return true;
    }
  }

  return false;
}

function getOverlapArr(forms, checkArr) {
  const overlapArr = [];
  for (let i = 0; i < forms.length; i++) {
    if (isOverlapForm(forms[i], checkArr)) {
      overlapArr.push(forms[i][0]);
    }
  }

  return overlapArr;
}

function checkOverlap(forms) {
  // const checkArr = getCheckArr(forms);
  // const overlapArr = getOverlapArr(forms, checkArr);

  // return overlapArr.sort();
  const overlapSet = new Set();
  const overlapArr = [];
  for (let i = 0; i < forms.length; i++) {
    const substrNickNameArr = substrNickName(forms[i][1]);
    let isPush = false;
    for (let j = 0; j < substrNickNameArr.length; j++) {
      if (overlapSet.has(substrNickNameArr[j]) && !isPush) {
        overlapArr.push(forms[i][0]);
        isPush = true;
      }
      overlapSet.add(substrNickNameArr[j]);
    }
  }
  const overlapSet = new Set();
  for (let i = forms.length - 1; i > -1; i--) {
    const substrNickNameArr = substrNickName(forms[i][1]);
    let isPush = false;
    for (let j = 0; j < substrNickNameArr.length; j++) {
      if (overlapSet.has(substrNickNameArr[j]) && !isPush) {
        overlapArr.push(forms[i][0]);
        isPush = true;
      }
      overlapSet.add(substrNickNameArr[j]);
    }
  }
  return overlapArr.sort();
}

function problem6(forms) {
  if (!isValidEmail(forms) || !isValidNickName(forms)) {
    return;
  }

  return checkOverlap(forms);
}

module.exports = problem6;

console.log(problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]));
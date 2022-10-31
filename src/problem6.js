function findAtIndex(email) {
  return email.indexOf('@');
}

function isValidEmail(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length > 19) {
      return false;
    }
    if (!(forms[i][0].slice(findAtIndex(forms[i][0])) === "@email.com")) {
      return false;
    }
  }
  return true;
}

function checkKorean(str) {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  return (regExp.test(str)) ? true : false;
}

function isValidNickName(forms) {
  for (i = 0; i < forms.length; i++) {
    if (forms[i][1].length < 1 || forms[i][1].length > 19) {
      return false;
    }
    if (!checkKorean(forms[i][1])) {
      return false;
    }
  }
  return true;
}

function substrNickName(nickName) {
  const substrNickNameArr = new Array();
  for (let i = 0; i < nickName.length - 1; i++) {
    substrNickNameArr.push(nickName.substring(i, i + 2));
  }
  return substrNickNameArr;
}

function getCheckArr(forms) {
  const checkArr = new Array();
  for (let i = 0; i < forms.length; i++) {
    const substrNickNameArr = substrNickName(forms[i][1]);
    checkArr.push(...substrNickNameArr);
  }
  return checkArr;
}

function fillOverlapArr(form, overlapArr, checkArr) {
  const substrNickNameArr = substrNickName(form[1]);
  for (let i = 0; i < substrNickNameArr.length; i++) {
    if (checkArr.filter(element => substrNickNameArr[i] === element).length !== 1) {
      overlapArr.push(form[0]);
      break;
    }
  }
}

function getOverlapArr(forms, checkArr) {
  const overlapArr = new Array();
  for (let i = 0; i < forms.length; i++) {
    fillOverlapArr(forms[i], overlapArr, checkArr);
  }
  return overlapArr;
}

function checkOverlap(forms) {
  const checkArr = getCheckArr(forms);
  const overlapArr = getOverlapArr(forms, checkArr);
  return overlapArr.sort();
}

function problem6(forms) {
  if (!isValidEmail(forms)) {
    return;
  }
  if (!isValidNickName(forms)) {
    return;
  }
  return checkOverlap(forms);
}

module.exports = problem6;


console.log(problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]));

// console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "ejm"] ]));
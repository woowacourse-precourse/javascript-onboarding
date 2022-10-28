function findAtIndex(email) {
  return email.indexOf('@');
}

function isValidEmail(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length > 19) return false;
    if (!(forms[i][0].slice(findAtIndex(forms[i][0])) === "@email.com")) return false;
  }
  return true;
}

function checkKor(str) {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; 
  if (regExp.test(str)) return true;
  return false;
}

function isValidNickName(forms) {
  for (i = 0; i < forms.length; i++) {
    if (forms[i][1].length < 1 || forms[i][1].length > 19) return false;
    if (!checkKor(forms[i][1])) return false;
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

function sortArr(returnArr) {
  for (let i = 0; i < returnArr.length - 1; i++) {
    for (let j = i + 1; j < returnArr.length; j++) {
      if (returnArr[i] > returnArr[j]) {
        const tmp = returnArr[i];
        returnArr[i] = returnArr[j];
        returnArr[j] = tmp;
      }
    }
  }
  return returnArr;
}

function checkOverlap(forms) {
  const returnArr = new Array();
  const checkArr = new Array();
  for (let i = 0; i < forms.length; i++) {
    const tmpArr = substrNickName(forms[i][1]);
    checkArr.push(...tmpArr);
  }
  for (let i = 0; i < forms.length; i++) {
    const tmpArr = substrNickName(forms[i][1]);
    for (let j = 0; j < tmpArr.length; j++) {
      if (checkArr.filter(element => tmpArr[j] === element).length !== 1) {
        returnArr.push(forms[i][0]);
        break;
      }
    }
  }
  return sortArr(returnArr);
}

function problem6(forms) {
  if (!isValidEmail(forms)) return ;
  if (!isValidNickName(forms)) return ;
  return checkOverlap(forms);
}

module.exports = problem6;


console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

// console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "ejm"] ]));
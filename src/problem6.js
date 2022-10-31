const isValidEmail = (email) => {
  const regExp = /@email.com$/;
  if(email.length < 11 || email.length >= 20) return false;
  return regExp.test(email);
}

const isValidNickname = (nickname) => {
  const regExp = /^[ㄱ-ㅎ|가-힣]+$/;
  if(nickname.length < 1 || nickname.length >= 20) return false;
  return regExp.test(nickname);
}

const isValid = (form) => {
  return isValidEmail(form[0]) && isValidNickname(form[1]);
}

const cntDefaultDict = (subStr, dictObject) => {
  if(subStr in dictObject) dictObject[subStr] += 1;
  else dictObject[subStr] = 1;
}

const putInDict = (subStrArr, dictObject) => {
  subStrArr.forEach((element => {
    cntDefaultDict(element, dictObject);
  }));
}

const makeSubstr = (nickname) => {
  const nicknameArr = nickname.split('');
  const arrLength = nicknameArr.length;
  const subStrArr = [];
  for(let i=0; i<arrLength-1; i++) {
    const subStr = nicknameArr.slice(i, i+2).join('');
    subStrArr.push(subStr);
  }
  return subStrArr;
}

const makeDictObject = (forms, dictObject) => {
  forms.forEach((element) => {
    const subStrArr = makeSubstr(element[1])
    putInDict(subStrArr, dictObject);
  })
}

const checkDict = (subStr, dictObject) => {
  return dictObject[subStr] != 1;
}

const isSameExist = (form, dictObject) => {
  const formSubStr = makeSubstr(form[1]);
  return formSubStr.some(element => checkDict(element, dictObject));
}

const onlyNicknames = (returnForms) => {
  const returnArr = []
  returnForms.forEach(element => {
    returnArr.push(element[0]);
  })
  return returnArr;
}

const removeSame = (array) => {
  const arrToSet = new Set(array);
  const setToArr = Array.from(arrToSet);
  return setToArr;
}

function problem6(forms) {
  const filteredForms = forms.filter(isValid);
  let dictObject = {}
  makeDictObject(filteredForms, dictObject);

  const returnForms = forms.filter((element) => isSameExist(element, dictObject))
  const returnEmails = onlyNicknames(returnForms);
  const answer = removeSame(returnEmails.sort());
  return answer;
}

module.exports = problem6;
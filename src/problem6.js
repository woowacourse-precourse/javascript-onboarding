const isValidEmail = (email) => {
  const regExp = /@email.com$/;
  if(email.length < 11 || email.length.length >= 20) return false;
  return regExp.test(email);
}

const isValidNickname = (nickname) => {
  const regExp = /^[ㄱ-ㅎ|가-힣]+$/;
  if(nickname.length < 1 || email.length.length >= 20) return false;
  return regExp.test(nickname);
}

const isValid = (form) => {
  return isValidEmail(form[0]) && isValidNickname(form[1]);
}

const putInDict = (dictObject, subStr) => {
  if(subStr in dictObject) dictObject[subStr] += 1;
  else dictObject[subStr] = 1;
}

const makeDictObject = (dictObject, nickname) => {
  const nicknameArr = nickname.split('');
  const arrLength = nicknameArr.length;
  for(let i=0; i<arrLength-1; i++) {
    const subStr = nicknameArr.slice(i, i+2).join('');
    putInDict(dictObject, subStr);
  }
}

const makeSubstr = (forms) => {
  let dictObject = {}
  forms.forEach((element) => {
    makeDictObject(dictObject, element[1])
  })
}

function problem6(forms) {
  const filteredForms = forms.filter(isValid);
  var answer;
  return answer;
}

module.exports = problem6;

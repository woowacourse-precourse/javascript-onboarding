function problem6(forms) {
  const emailList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[0]);
  const nicknameList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[1]);

  if (!inputValidCheck(emailList, nicknameList)) {
    return 'error'
  }

  const duplicateCrewEmail = [];
  const leastDuplicateWord = 2;

  for (let i = 0; i < nicknameList.length; i++) {
    for (let j = 0; j <= nicknameList[i].length - 2; j++) {
      const headSliceWord = nicknameList[i].slice(0 + j, leastDuplicateWord + j);
      for (let k = 0; k < nicknameList.length; k++) {
        if ((i !== k) && (nicknameList[k].includes(headSliceWord))) duplicateCrewEmail.push(emailList[k])
      }
    }
  }
  return [...new Set(duplicateCrewEmail)].sort();

}

function inputValidCheck(emailList, nicknameList) {
  if (!crewMembersInRange(nicknameList)) return false;
  if (!nicknameLengthInRange(emailList)) return false;
  if (!isNicknameKorean(nicknameList)) return false;
  if (!correctEmail(emailList)) return false;
  if (!emailLengthInRange(emailList)) return false;
  return true;
}

function crewMembersInRange(nicknameList) {
  if (nicknameList.length < 1 || nicknameList.length > 10000) return false;
  return true
}

function isNicknameKorean(nicknameList) {
  const regExp = /^[가-힣]*$/;
  const checkKoreanArray = nicknameList.map(i => regExp.test(i))
  if (checkKoreanArray.includes(false)) return false;
  return true
}

function nicknameLengthInRange(nicknameList) {
  const checkNicknameLengthArray = nicknameList.map(i => !i < 1 || !i > 20);

  if (checkNicknameLengthArray.includes(false)) return false;
  return true;
}

function correctEmail(emailList) {
  const checkEmailTypeArray = emailList.map(i => i.split('@')[1]);
  if (correctDomainType(checkEmailTypeArray)) return true
  return false;
}

function correctDomainType(domainList) {
  const correctDomain = '@email.com'
  const checkDomainTypeArray = domainList.filter(i => i !== correctDomain);
  if (domainList.length !== checkDomainTypeArray.length) return false;
  return true;

}

function emailLengthInRange(emailList) {
  const checkEmailLengthArray = emailList.map(i => !i.length < 11 || !i.length >= 20)
  if (checkEmailLengthArray.includes(false)) return false;
  return true;
}

module.exports = problem6;
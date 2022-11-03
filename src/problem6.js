function problem6(forms) {
  let answer = [];
  let duplicateWordDictionary = {};

  forms.forEach(form => {
    const [currentEmail, currentNickname] = form;
    const checkInfo = checkEmail(currentEmail) + checkNickname(currentNickname);

    if(checkInfo === 4) duplicateWordDictionary = findDuplicateWord(currentNickname, duplicateWordDictionary); 
    else if (checkInfo !== 4) return wrongForm(checkInfo);
  });
  
  answer = findAnswer(forms, duplicateWordDictionary);
  return answer.sort();
}

function findAnswer(forms, duplicateWordDictionary) {
  const duplicateUser = [];
  forms.forEach(form => {
    const [currentEmail, currentNickname] = form;
    for (let i = 0; i < currentNickname.length - 1; i++) {
      const duplicateWord = currentNickname.substring(i, i+2);
      if (duplicateWordDictionary[duplicateWord] === 1 && duplicateUser.indexOf(currentEmail) === -1) {
        duplicateUser.push(currentEmail);
      }
    }
  })
  return duplicateUser;
}

function findDuplicateWord(nickName, duplicateWordDictionary) {
  for(let i=0; i<nickName.length - 1; i++) {
    const duplicateWord = nickName.substring(i, i+2);
    duplicateWord in duplicateWordDictionary ? duplicateWordDictionary[duplicateWord] = 1 : duplicateWordDictionary[duplicateWord] = 0;
  } 
  return duplicateWordDictionary;
}
  

function wrongForm(checkInfo) {
  if (checkInfo === -6) return "잘못된 이메일과 닉네임 형식입니다.";
  else if (checkInfo === 1) return "잘못된 이메일 형식입니다.";
  else if (checkInfo === -3) return "잘못된 닉네임 형식입니다.";
}

function checkEmail(email) {
 const isRightForm = email.includes('@email.com');
 const isRightLength = email.length >= 11 && email.length < 20 ? true : false;
 if(isRightForm && isRightLength) return 1;
 return -2;
}

function checkNickname(nickname) {
  const isKorean = /^[ㄱ-ㅎ|가-힣]+$/;
  const isRightForm = isKorean.test(nickname) ? true : false;
  const isRightLength = nickname.length >= 1 && nickname.length < 20 ? true : false;
  if(isRightForm && isRightLength) return 3;
  return -4;
}

module.exports = problem6;

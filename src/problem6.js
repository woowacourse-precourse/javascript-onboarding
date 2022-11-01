function problem6(forms) {
  let answer = [];
  let duplicateNickname = {};

  forms.forEach(form => {
    const [currentEmail, currentNickname] = form;
    const checkInfo = checkEmail(currentEmail) + checkNickname(currentNickname);

    if(checkInfo === 4) duplicateNickname = checkDuplicate(currentNickname, duplicateNickname); 
    else if (checkInfo !== 4) return wrongForm(checkInfo);
  });
  
  console.log(duplicateNickname);

  answer = findAnswer(forms, duplicateNickname);
  return answer.sort();
}

function findAnswer(forms, duplicateNickname) {
  const duplicateUser = [];
  forms.forEach(form => {
    const [currentEmail, currentNickname] = form;
    for (let i = 0; i < currentNickname.length - 1; i++) {
      const duplicateWord = currentNickname.substring(i, i+2);
      if (duplicateNickname[duplicateWord] === 1 && duplicateUser.indexOf(currentEmail) === -1) {
        duplicateUser.push(currentEmail);
      }
    }
  })
  return duplicateUser;
}

function checkDuplicate(nickName, duplicateNickname) {
  // let isDuplicateNickname = false;
  for(let i=0; i<nickName.length - 1; i++) {
    const duplicateWord = nickName.substring(i, i+2);
    if (duplicateWord in duplicateNickname) {
      duplicateNickname[duplicateWord] = 1;
      // isDuplicateNickname = true;
    } 
    else if (duplicateWord in duplicateNickname === false) duplicateNickname[duplicateWord] = 0;
  } 
  return duplicateNickname;
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

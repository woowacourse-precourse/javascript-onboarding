// 0. 인자의 갯수가 1이상 10000이하의 수인지 확인
// 1. email 형식 검사 및 도메인 검사
// 2. 닉네임이 한글인지 길이가 1이상 20이하인지 확인
// 3. 중복 검사 함수 구현
// 4. 중복 제거 함수 구현
// 5. email 정렬후 result 반환

function setOverlapArray(keyValue, userEmail, table, unsortedArray) {
  const alreadyExist = table.get(keyValue);

  if (alreadyExist) {
    unsortedArray.push(alreadyExist);
    unsortedArray.push(userEmail);
    return;
  }
  table.set(keyValue, userEmail);
}

function overlapCheck(userData, table, unsortedArray) {
  let keyValue;
  const userEmail = userData[0];
  const userNickname = userData[1];

  for (let index = 0; index < userNickname.length - 1; index++) {
    keyValue = userNickname[index] + userNickname[index + 1];
    setOverlapArray(keyValue, userEmail, table, unsortedArray);
  }
}

function getResult(forms) {
  let nicknameTable = new Map();
  let unsortedArray = [];

  for (let index = 0; index < forms.length; index++) {
    overlapCheck(forms[index], nicknameTable, unsortedArray);
  }
  const ret = unsortedArray.filter(
    (element, index) => unsortedArray.indexOf(element) === index
  );
  return ret.sort();
}

function validInputCheck(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    return -1;
  }
  for (let index = 0; index < forms.length; index++) {
    if (checkForms(forms[index]) < 0) {
      return -1;
    }
  }
  return 0;
}

function checkForms(form) {
  const userEmail = form[0];
  const userNickname = form[1];

  if (checkEmail(userEmail) === false) {
    return -1;
  }
  if (checkNickname(userNickname) === false) {
    return -1;
  }
  return 0;
}

function checkNickname(nickname) {
  const nicknameRegex = /^[가-힣]{1,20}$/;

  return nicknameRegex.test(nickname);
}

function checkEmail(email) {
  const emailRegex = /^\w{1,10}@email.com$/;

  return emailRegex.test(email);
}

function problem6(forms) {
  if (validInputCheck(forms) < 0) {
    return "Argument Error";
  }
  var answer = getResult(forms);
  return answer;
}

module.exports = problem6;

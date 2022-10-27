function problem6(forms) {
  var answer;
  answer = isNicknameDup(forms);
  return answer;
}

module.exports = problem6;

//상수선언
const EMAIL_MAX = 20;
const EMAIL_MIN = 11;
const NICKNAME_MAX = 20;
const NICKNAME_MIN = 1;

//이메일 이 형식에 맞게 끝나는지 검사
function validEmail(email) {
  const eLength = email.length;
  return (
    !email.endsWith("email.com") || eLength >= EMAIL_MAX || eLength < EMAIL_MIN
  );
}

//닉네임의 길이를 검사
function validNickname(nickname) {
  const nLength = nickname.length;
  return nLength < NICKNAME_MIN || nLength >= NICKNAME_MAX;
}

//이메일과 닉네임검사를 호출
function validAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    const [email, nickname] = arr[i];

    if (validEmail(email) || validNickname(nickname)) return false;
    else continue;
  }
  return true;
}

//닉네임 배열과 닉네임을 받아 배열의 요소들이 닉네임을 포함하는지 검사
function checkDup(nickArr, nick) {
  return nickArr.some((nickname) => nickname.includes(nick));
}

//닉네임 2글자씩 배열과 비교
function checkResource(nickname, nickArr) {
  for (let i = 0; i < nickname.length - 1; i++) {
    let nick = nickname[i] + nickname[i + 1];
    if (checkDup(nickArr, nick)) return false;
    else continue;
  }
  return true;
}

//배열과 닉네임을 받아 닉네임이 제외된 배열을 반환
function nicknamArray(arr, nickname) {
  let nickArr = [];

  arr.forEach((item, index) => {
    const [, nickname] = item;
    nickArr[index] = nickname;
  });

  nickArr.splice(nickArr.indexOf(nickname), 1);
  return nickArr;
}

function isNicknameDup(arr) {
  if (!validAll(arr)) return;

  let emailList = [];
  arr.forEach((form) => {
    const [email, nickname] = form;
    const nickArr = nicknamArray(arr, nickname);
    const check = checkResource(nickname, nickArr);
    if (!check) emailList.push(email);
  });

  emailList.sort();
  return emailList;
}

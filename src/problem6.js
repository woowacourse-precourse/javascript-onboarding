// function problem6(forms) {
//   var answer;
//   return answer;
// }

// module.exports = problem6;

const Arr = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
const EMAIL_MAX = 20;
const EMAIL_MIN = 11;
const NICKNAME_MAX = 20;
const NICKNAME_MIN = 1;

function validEmail(email) {
  const eLength = email.length;
  if (
    !email.endsWith("email.com") ||
    eLength >= EMAIL_MAX ||
    eLength < EMAIL_MIN
  )
    return false;
}

function validNickname(nickname) {
  const nLength = nickname.length;
  if (nLength < NICKNAME_MIN || nLength >= NICKNAME_MAX) return false;
}

function validAll(arr) {
  arr.forEach((form) => {
    const [email, nickname] = form;
    if (!validEmail(email)) return false;
    if (!validNickname(nickname)) return false;
    else return true;
  });
}

function checkDup ()

function checkResource(nickname, nickArr) {
  let result;
  for (let i = 0; i < nickname.length - 1; i++) {
    nickArr.some((id) => {
      // console.log("id사본 : ", id);
      // console.log("nick 비교본:", `${nickname[i]}${nickname[i + 1]}`);
      // return id.includes(`${nickname[i]}${nickname[i + 1]}`);
      // console.log(id.indexOf(`${nickname[i]}${nickname[i + 1]}`));
      if (id.indexOf(`${nickname[i]}${nickname[i + 1]}`) < 0) return false;
    });
  }
  console.log("result : ", result);
}

function nicknamArray(arr, nickname) {
  let nickArr = [];

  arr.forEach((item, index) => {
    const [, nickname] = item;
    nickArr[index] = nickname;
  });

  nickArr.splice(nickArr.indexOf(nickname), 1);
  console.log(nickArr);
  return nickArr;
}

function isNicknameDup(arr) {
  // if (!validAll(arr)) return;

  let emailList = [];
  arr.forEach((form) => {
    const [email, nickname] = form;
    const nickArr = nicknamArray(arr, nickname);
    const check = checkResource(nickname, nickArr);
    console.log(check);
    if (!check) emailList.push(email);
  });
  console.log(emailList);
}

isNicknameDup(Arr);

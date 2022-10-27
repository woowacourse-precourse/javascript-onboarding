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
  });
}

function isNicknameDup(arr) {
  arr.forEach((form) => {
    const [email, nickname] = form;
  });
}

vaild(Arr);

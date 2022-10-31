// function problem6(forms) {
//   var answer;
//   return answer;
// }

const { array } = require("prop-types");

// module.exports = problem6;

let forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];

// 닉네임 리스트
let nicks = [];
for (let i = 0; i < forms.length; i++) {
  nicks.push(forms[i][1]);
}

// 닉네임 별로 doubledList 만들기
let doubledList = [];
let emailList = [];

for (let i = 0; i < nicks.length; i++) {
  makeList(nicks[i]);
}

function makeList(nick) {
  // 두글자씩 자르기
  for (let i = 0; i < nick.length - 1; i++) {
    str = nick.substr(i, 2 * (i + 1));
    if (doubledList.includes(str) === false) {
      doubledList.push(str);
    } else {
      emailList.push(nick);
    }
  }
}
console.log("확정 이메일 명단: ", emailList);

// 맨 처음 사람 별도 체크
let lastCheck = [...emailList];
lastCheck.push(nicks[0]);
console.log("lastCheck: ", lastCheck);

let doubledListLast = [];

function makingLast(nick) {
  // 두글자씩 자르기
  for (let i = 0; i < nick.length - 1; i++) {
    str = nick.substr(i, 2 * (i + 1));
    console.log(i, 2 * (i + 1));
    doubledListLast.push(str);

    // if (doubledListLast.includes(str) === false) {
    // }
  }
}

for (let i = 0; i < lastCheck.length - 1; i++) {
  makingLast(lastCheck[i]);
}
console.log("1: ", doubledListLast);

// 이메일 주소 리턴 (오름차순)
let answer = [];
let i = 0;
while (i < emailList.length) {
  let j = 0;
  while (j < forms.length) {
    if (emailList[i] === forms[j][1]) {
      // console.log(emailList[i], "이메일 :", forms[j][0]);
      answer.push(forms[j][0]);
    }
    j++;
  }
  i++;
}

answer = answer.sort();
console.log("answer:", answer);

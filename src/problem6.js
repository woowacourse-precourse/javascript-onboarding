// 기능1-1
function makeForms(forms) {
  for (let i = 0; i < forms.length; i++) {
    forms[i][1] = Array.from(forms[i][1]);
  }
  return forms;
}
// 기능1-2
function makeContinueNick(forms) {
  let nickForms = [];
  for (let i = 0; i < forms.length; i++) {
    let tmp = "";
    nickForms.push([forms[i][0], []]);
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      tmp = forms[i][1][j] + forms[i][1][j + 1];
      nickForms[i][1].push(tmp);
    }
  }
  return nickForms;
}
// 기능2
// function checkContinueNick(continueArr) {
//   let continueNickArr = [];
//   for (let i = 0; i < continueArr.length; i++) {
//     for (let j = 0; i < continueArr[i][1].length; j++) {
//       if (continueArr[i][1].includes(continueArr[i][1][j])) {
//         continueNickArr.push(i);
//       }
//     }
//   }
//   return continueNickArr;
// }
function checkContinueNick(continueArr) {
  let continueNickArr = [];
  for (let i = 0; i < continueArr.length - 1; i++) {
    for (let j = i + 1; j < continueArr.length; j++) {
      for (let k = 0; k < continueArr[i][1].length; k++) {
        if (continueArr[i][1].includes(continueArr[j][1][k])) {
          continueNickArr.push(i, j);
        }
      }
    }
  }
  return continueNickArr;
}
function problem6(forms) {
  let answer = [];
  let continueArr = makeForms(forms);
  continueArr = makeContinueNick(continueArr);

  let nickArr = [...new Set(checkContinueNick(continueArr))];

  for (let i = 0; i < nickArr.length; i++) {
    answer.push(forms[nickArr[i]][0]);
  }
  answer.sort();

  return answer;
}

module.exports = problem6;

/* 기능 목록
아이디어: 닉네임을 연속된 글자 배열을 각각 만들어 2중 for문을 돌며 중복체크 
ex) "제이엠" -> ["제이","이엠"]
1. 각 닉네임을 연속된 글자 배열로 만들기
  1.1 닉네임을 한 글자씩 나누는 기능 ex)'제이엠'->'제','이','엠'
  1.2 한 글자씩 나눈 것을 연속 되게 하여 배열 생성하는 기능 ex) '제','이','엠'->'제이','이엠'
2. 신청 받은 닉네임 중 같은 글자가 연속적으로 포함 되는 닉네임을 체크하는 기능
3. 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거하는 기능 
*/

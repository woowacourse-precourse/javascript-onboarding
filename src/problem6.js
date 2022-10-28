function problem6(forms) {
  //검사 배열
  const checkArr = [];
  const answer = [];

  //검사 배열 만들기
  forms.map((id) => {
    if (checkMyNickName(id[1], checkArr)) answer.push(id[0]);
    checkStraightWord(id[1], checkArr);
  });

  console.log(checkArr);

  console.log(" filtered Arr", answer);
  return answer;
}

// 1. 닉네임을 이메일과 분리하는 기능
function nickEmailSplit(id) {
  const idArr = id.split("@");
  return idArr[0];
}

//2.한글 닉네임을 2글자 이상으로 분리하는 기능
function nickSplit(id) {}

//3.분리한 닉네임을 다른 닉네임과 검사하는 기능
function checkAnoterName(id, arr) {}

//4.이메일에서 영어 아이디 기준으로 오름 차순으로 정렬 후 중복은 제거
function emailSortAndDupDel(arr) {
  return arr.sort((a, b) => nickSplit(a) - nickSplit(b));
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;

function problem6(forms) {
  const answer = [];
  const wordArr = [];

  forms.map((id) => {
    const result = checkTwoChar(id[1]);
    if (result) {
      answer.push(id[0]);
    }
  });

  return emailSortAndDupDel(answer);
}

// 1. 닉네임을 이메일과 분리하는 기능
function nickSplit(id) {
  const idArr = id.split("@");
  return idArr[0];
}

// 2. 같은 글자가 연속적으로 포함하는 닉네임목록을 생성
function checkStraitWord(nickName) {
  const arr = [];
  let pos = 0;
  for (let i = 1; i < nickName.length; i++) {
    pos = 0;
    while (pos < nickName.length - i) {
      arr.push(nickName[pos].concat(nickName[pos + 1]));
      pos++;
    }
  }
  console.log(arr);

  return arr;
}

checkStraitWord("제이엠");

//3.이메일에서 영어 아이디 기준으로 오름 차순으로 정렬 후 중복은 제거
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

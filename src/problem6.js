/*
  기능목록
  1.이메일, 닉네임만 따로 저장하는 배열 구현
  2.연속적으로 포함된 닉네임 판별 및 인덱스 리턴
  2-1. 중복되는 인덱스는 받지않도록 set자료구조 활용
  3. 해당 인덱스의 이메일만 따로 저장하는 배열 구현
  4. 이메일 배열 정렬 후 result 출력 
*/
function problem6(forms) {
  let answer;
  const emails = [];
  const nicknames = [];
  const duplicateCrewIdx = [];

  forms.map((crew) => {
    emails.push(crew[0]);
    nicknames.push(crew[1]);
  })

  


  // console.log(forms);
  console.log(emails);
  console.log(nicknames);

  return answer;
}

problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]);

module.exports = problem6;

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

// 주어진 폼을 분석 
// 주어진 리스트를 돌면서 닉네임을 2글자씩 쪼개어 그 2글자를 키로갖는 키벨류 딕셔너리를 만듦
// "jm@email.com", "제이엠" 이면 생셩한 딕셔너리에 제이 키와 이엠 키에 해당하는 벨류리스트에 이메일을 추가함
// 예) 제이: nfdfa@email.com, asdf@email.com , ...
// 딕셔너리를 돌며 value의 length가 2이상인경우에 해당 이메일을 추출
// 추출된 이메일을 set 자료형에 넣기
// set을 리스트로 바꾸고 오름차순 정렬후 리턴

function problem6(forms) {
  var answer;
  const check = new Array(forms.length).fill(false);

  return answer;
}

module.exports = problem6;

// 기능 구현
// 1. 입력받은 forms의 길이만큼 배열 생성 (중복체크 용도)
// 2. 반복문을 돌며 닉네임을 두 글자씩 쪼개가며 indexOf메서드를 사용해 중복여부 판단
// 3. 중복 발견 시 현재 인덱스와 중복되는 인덱스를 통해 중복체크 배열에 표시

const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];

problem6(forms);

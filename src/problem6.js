// 기능 목록
// 1. 닉네임에서 연속된 두글자씩 나눠서 배열에 저장한다. ( 닉네임 길이 > 1 일 때 )
// 2. 1번에서 사용한 배열을 가지고 자기 닉네임을 제외한 나머지 닉네임에 배열 원소들이 포함되어 있는지 확인
// 3. 배열의 원소가 닉네임에 포함 되었다면 결과값 배열에 넣는다.
// 4. 결과값 배열 중복 제거 후 오름차순 정렬

function problem6(forms) {
  let answer = [];

  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];

    if (nickname.length === 1) continue;

    let wordArray = [];
    for (let j = 0; j < nickname.length - 1; j++) {
      wordArray.push(nickname[0] + nickname[1]);
    }

    console.log(wordArray);
  }

  return answer;
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

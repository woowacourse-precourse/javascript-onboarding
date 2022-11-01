function problem6(forms) {
  let answer = [];
  forms.forEach((crew) => {
    const [email, name] = crew;
    for (let i = 0; i < name.length - 1; i++) {
      const target = name[i] + name[i + 1];
      forms.forEach((crew) => {
        if (crew[1] === name || answer.includes(crew[0])) return;
        if (crew[1].includes(target)) {
          answer.push(crew[0]);
        }
      });
    }
  });
  console.log(answer);
  return answer;
}

module.exports = problem6;
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

/* 
1. forms의 루프를 돌면서
2. forms[i][1]를 앞에서부터 돌면서 연속 두 글자 추출
3. 두 글자가 닉네임에 포함된 크루의 이메일을 result에 추가
4. 닉네임 끝까지 추출할때까지 2~3 반복
5 result 중복 제거
6. result 오름차순 정렬  
*/

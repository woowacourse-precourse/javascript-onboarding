function problem6(forms) {
  let answer = [];
  let arr = [];
  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length-1; i++) {
      // check로  두글자씩 잘라서 읽기
      const check = nickname.slice(i, i + 2);
      // 두개의 문구로 잘랏을때 문구중 중복된 것이 있으면 하나씩 더하기 ( 기본값은 1 )
      // 만약 if(arr[check] > 1)을 여기 넣엇을시엔 for문으로 인해 제이엠을 고려하지 않아서 map을 따로다시생성후 체크
      check in arr ? arr[check]++ : (arr[check] = 1);
      console.log(arr)
      // 만약 문구값이 중복이여서 1이상 카운트가 됬을때 다중 배열중 email부분을 출력
    
    }
  });
  forms.map((form) => {
    const [email, nickname] = form;
    for(let i = 0; i<nickname.length-1; i++) {
      const check = nickname.slice(i,i+2);
      if(arr[check] > 1) {
        answer.push(email)
      }
    }
  })
  answer.sort();

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

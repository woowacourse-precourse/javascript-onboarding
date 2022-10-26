function problem6(forms) {
  let answer = [];
  let set = new Set(); // 이메일 중복 제거를 위해 Set 사용

  for(let i = 0; i < forms.length; i++) {
    let name = forms[i][1];

    for(let j = 1; j < name.length; j++) {
      let pattern = name.slice(0, -j); // 닉네임 속에서 패턴을 찾음 제이엠 -> 제이, 제

      if(pattern.length < 2) break;
      
      // filter 메서드를 이용해 패턴과 일치한 닉네임 찾기
      let filtered = forms.filter((item) =>(item[1] != name && item[1].includes(pattern)));
      for(let obj of filtered) set.add(obj[0]);
      
    }
  }

  // Set을 array로 변환 후 오름차순으로 정렬
  answer = [...set].sort(); 
  return answer;
}

console.log(problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]));

module.exports = problem6;

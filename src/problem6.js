function problem6(forms) {
  const map = new Map();
  const set = new Set();

  // 겹칠수 있는 모든 경우의 수 준비
  forms.map(el=>{
    const [email, nick] = el;

    for(let i=0;i<nick.length-1;i++){
      const nick2 = nick.slice(i, i+2); // 두 글자씩 자르기

      if(map.has(nick2)){ // 두 글자 닉의 키가 이미 존재할 경우
        if(map.get(nick2).includes(email) === false) // 배열에 자신의 이메일이 없을 경우
          map.get(nick2).push(email); // 배열에 이메일 삽입
      }
      else // 두 글자 닉의 키가 존재하지 않을 경우
        map.set(nick2, [email]); // 배열 생성 및 이메일 삽입
    }
  })

  // 중복 검사
  map.forEach((emails)=>{
    if(emails.length > 1) // 닉네임에 해당되는 이메일이 2개 이상인 경우
      emails.map(el=>set.add(el)); //집합에 이메일 삽입
  })

  return Array.from(set).sort(); // 중복 제거 및 오름차순 정렬
}

module.exports = problem6;

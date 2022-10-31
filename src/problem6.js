// 같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자 목록 반환
function problem6(forms) {
  // 중복을 허용하지 않기 위한 set 객체 선언
  const emailSet = new Set(); 
  const nickname = [];
  forms.map(x => {nickname.push(x[1])});
  
  // 닉네임을 하나씩 순회
  nickname.map((name) => {
    let lookupWord = '';
    for(let i=0; i<name.length-1; i++) {
      // 두 글자씩 잘라서 조회하는 단어를 설정
      lookupWord = name.substr(i, 2);
      
      nickname.map((x, idx) => {
        // 자기 자신이 아니며 조회하는 단어를 포함한다면
        if(x !== name && x.includes(lookupWord)) {
          // 이메일 객체에 해당 id값을 가진 이메일 저장
          emailSet.add(forms[idx][0]);
        }
      })
    }
  })

  // set을 배열로 변환후 정렬하여 반환
  return Array.from(emailSet).sort();
}

module.exports = problem6;

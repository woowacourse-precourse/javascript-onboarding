// 같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자 목록 반환
function problem6(forms) {
  const emailSet = new Set(); 
  const nickname = [];
  forms.map(x => {nickname.push(x[1])});
  
  nickname.map((name) => {
    let lookupWord = '';
    for(let i=0; i<name.length-1; i++) {
      lookupWord = name.substr(i, 2);
      
      nickname.map((x, idx) => {
        if(x !== name && x.includes(lookupWord)) {
          emailSet.add(forms[idx][0]);
        }
      })
    }
  })

  return Array.from(emailSet).sort();
}

module.exports = problem6;

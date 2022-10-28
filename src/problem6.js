function problem6(forms) {
  let answer=new Set();

  // 각 닉네임에서 공통된 부분 추출하는 기능, 공통부분의 순서가 일치하는지 확인
  for (let i=0;i<forms.length-1;i++) {
    for (let j=i+1;j<forms.length;j++) {
      // 각 닉네임에서 공통된 부분 추출하는 기능
      let sameWords = [...forms[i][1]].filter(x => forms[j][1].includes(x)).join('');
      
      // 공통부분의 순서가 일치하는지 확인하는 기능
      for (let c=0;c<sameWords.length-1;c++) {
        // console.log(forms[j][1].includes(sameWords.substring(c, c+2)),forms[j][1])
        if (forms[j][1].includes(sameWords.substring(c, c+2))) {
          answer.add(forms[i][0])
          answer.add(forms[j][0])
          break
        }
      }
    }
  }

  // answer의 자료형을 리스트로 바꾸고 정렬하는 기능
  answer=Array.from(answer).sort()

  return answer;
}
// console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]))
module.exports = problem6;

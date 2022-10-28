function problem6(forms) {
  let answer=new Set();

  // 각 닉네임에서 공통된 부분 추출하는 기능, 공통부분의 순서가 일치하는지 확인
  for (let i=0;i<forms.length-1;i++) {
    for (let j=i+1;j<forms.length;j++) {
      // 각 닉네임에서 공통된 부분 추출하는 기능
      let sameWords=sameWordCheck(forms[i][1],forms[j][1])

      // 공통부분의 순서가 일치하는지 확인하는 기능
      if (isPositionRight(sameWords,forms[j][1])) {
        answer.add(forms[i][0]); answer.add(forms[j][0]);
      }
    }
  }

  // answer의 자료형을 리스트로 바꾸고 정렬하는 기능
  answer=Array.from(answer).sort()

  return answer;
};

// 각 닉네임에서 공통된 부분 추출하는 기능
function sameWordCheck(firstName,secondName) {
  return [...firstName].filter(word => secondName.includes(word)).join('');
};

// 공통부분의 순서가 일치하는지 확인하는 기능
function isPositionRight(sameWords,compareName) {
  for (let index=0;index<sameWords.length-1;index++) {
    if (compareName.includes(sameWords.substring(index, index+2))) return true;
  }
  return false
}

// console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]))
module.exports = problem6;

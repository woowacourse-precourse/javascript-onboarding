function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    return "too many or fewer crew"
  }
  //기능 목록 1.도메인과 한글만 가능하게 해줄 정규 표현식.
  const checkDomain = /[a-z0-9]+@email.com/;
  const checkKorean = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
  let arr = [];
  let addressStack = [];
  //기능 목록 2. 제한사항 조건식들.
  outer: for (let i = 0; i < forms.length; i++) {
    if (checkDomain.test(forms[i][0]) && 10 < forms[i][0].length < 20) {
      if (checkKorean.test(forms[i][1]) && 1 <= forms[i][1].length < 20) {
        for (let j of forms[i][0]) {
          if (j === addressStack[addressStack.length - 1]) {
            continue outer;
          }
          addressStack.push(j);
        }
        // 닉네임을 확인하고 arr에 결과값을 넣어줄 조건식
        if (forms[i][1].includes('제이')) {
          arr.push(forms[i][0]);
          arr.sort();
        }
      }
    }
  }
  return arr;
}

module.exports = problem6;

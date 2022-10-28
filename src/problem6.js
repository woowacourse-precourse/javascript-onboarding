function problem6(forms) {
  //연산
  //기능목록 1-1 구현
  const isRepeat = (str1, str2) => {
    for (let rt = 0; rt < str2.length; rt++) {
      let cnt = 0;
      let tmp = rt;
      for (let lt = 0; lt < str1.length; lt++) {
        if (str2[tmp] === str1[lt]) {
          cnt++;
          tmp++;
        } else cnt = 0;
        if (cnt === 2) return true;
      }
    }
    return false;
  };

  //출력값 구하기
  let answer = [];
  let check = Array.from({ length: forms.length }, () => 0);
  //기능목록 2-1 구현
  let result = new Set();
  for (let i = 0; i < forms.length; i++) {
    //기능목록 1-3 구현
    if (check[i] !== 0) continue;
    //예외처리
    //기능목록 3-1 구현
    if (forms[i][0].match(/@email.com/) === null) continue;
    for (let j = 0; j < forms.length; j++) {
      if (i === j) continue;
      if (isRepeat(forms[i][1], forms[j][1])) {
        //기능목록 1-2 구현
        result.add(forms[i][0]).add(forms[j][0]);
        //기능목록 1-3 구현
        check[i] = 1;
        check[j] = 1;
      }
    }
  }
  //기능목록 2-2 구현
  answer.push(...result);
  answer.sort();

  return answer;
}
module.exports = problem6;

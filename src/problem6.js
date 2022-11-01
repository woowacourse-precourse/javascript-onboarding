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

  //예외처리
  const isWrong = (email, nickname) => {
    const regex = /^[ㄱ-ㅎ|가-힣]+$/;
    //기능목록 3-1, 3-2 , 3-3 구현
    return (
      !regex.test(nickname) ||
      nickname.length < 1 ||
      nickname.length >= 20 ||
      email.length < 11 ||
      email.length > 20 ||
      email.match(/@email.com/) === null
    );
  };

  //출력값 구하기
  let answer = [];
  let check = Array.from({ length: forms.length }, () => 0);
  //기능목록 2-1 구현
  let result = new Set();
  //기능목록 3-4 구현
  if (forms.length < 1 || forms.length > 10000) {
    throw '크루 수가 허용 범위를 벗어났습니다';
  }
  for (let i = 0; i < forms.length; i++) {
    if (isWrong(forms[i][0], forms[i][1]) || check[i] !== 0) continue;

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

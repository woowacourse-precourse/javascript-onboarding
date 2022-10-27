function problem6(forms) {
  let answer;
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

  return answer;
}
module.exports = problem6;

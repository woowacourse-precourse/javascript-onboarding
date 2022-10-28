function problem6(forms) {
  const nickname = forms.map((x) => x[1]);
  const seperate = (str) => {
    const arr = [];
    let cnt = 0;
    let long = 2;
    while (cnt < str.length) {
      while (long < str.length + 1 && cnt + long < str.length + 1) {
        arr.push(str.substring(cnt, cnt + long));
        if (cnt === str.length) {
          break;
        } else {
          long += 1;
        }
      }
      long = cnt + 2;
      cnt += 1;
    }
    return arr;
  };
  let idx = 0;
  // nickname에 있는 모든 문자열을 돌면서 문자열 분리
  const arr = [];
  while (idx < nickname.length) {
    let i = idx + 1;
    let same = 0;
    // 분리된 문자열이 다른 문자열에 있는지
    while (i < nickname.length) {
      seperate(nickname[idx]).map((x) => {
        if (nickname[i].includes(x)) {
          arr.push(...nickname.splice(i, 1));
          same += 1;
          console.log(x, idx, nickname);
        }
      });
      i += 1;
    }
    same ? nickname.splice(idx, 1) : (idx += 1);
  }
  return forms
    .filter((x) => !nickname.includes(x[1]))
    .map((x) => x[0])
    .sort();
}

module.exports = problem6;

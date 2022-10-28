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
  console.log(seperate(nickname[1]));
}

module.exports = problem6;

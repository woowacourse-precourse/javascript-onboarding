function problem6(forms) {
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

  const confirm = (checkArr, originArr) => {
    return originArr.filter((c) => {
      for (let index = 0; index < checkArr.length; index++) {
        if (c[1].includes(checkArr[index])) {
          return true;
        }
      }
    });
  };

  const showrepeatNickname = (forms) => {
    const arr = [];
    while (forms.length !== 0) {
      const key = forms.splice(0, 1);
      const first = seperate(key.flat()[1]);
      const repeat = confirm(first, forms);
      if (repeat.length) {
        arr.push(...repeat, ...key);
      }
    }
    return [...new Set(arr)].map((x) => x[0]).sort();
  };
  return showrepeatNickname(forms);
}
module.exports = problem6;

function problem3(number) {
  const isInvalid = number < 1 || number > 10000;

  if (!isInvalid) {
    let cnt = 0;
    let regExp = /3|6|9/g;

    for (let i = 1; i <= number; i++) {
      const res = String(i).match(regExp);
      if (res) cnt += res.length;
    }

    return cnt;
  }
}

module.exports = problem3;

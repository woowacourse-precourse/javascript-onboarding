function problem3(number) {
  function cntNum(num) {
    let restNum = String(num)
      .split("")
      .filter((str) => str === "3" || str === "6" || str === "9");
    return restNum.length;
  }
  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    cnt += cntNum(i);
  }
  return cnt;
}

module.exports = problem3;

function problem1(pobi, crong) {
  let findMax = (num) => {
    let nums = String(num).split("");
    let add = nums.reduce((cur, n) => {
      return cur + Number(n);
    }, 0);
    let mul = nums.reduce((cur, n) => {
      return cur * Number(n);
    }, 1);
    return Math.max(add, mul);
  };
  let check = (pages) => {
    if (pages[0] == 1 || pages[1] == 400) return false;
    if (pages[0] + 1 !== pages[1]) return false;
    return true;
  };

  if (!check(pobi) || !check(crong)) return -1;
  let mPobi = pobi.reduce((max, num) => {
    let now = findMax(num);
    return Math.max(max, now);
  }, 0);

  let mCrong = crong.reduce((max, num) => {
    let now = findMax(num);
    return Math.max(max, now);
  }, 0);
  console.log(mPobi, mCrong);

  if (mPobi === mCrong) return 0;
  return mPobi > mCrong ? 1 : 2;
}
console.log(problem1([99, 102], [211, 212]));
module.exports = problem1;

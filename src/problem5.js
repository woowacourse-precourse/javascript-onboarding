function problem5(money) {
  let result = [];
  let fm = Math.floor(money / 50000);
  money = money - 50000 * fm;
  let m = Math.floor(money / 10000);
  money = money - 10000 * m;
  let ft = Math.floor(money / 5000);
  money = money - 5000 * ft;
  let t = Math.floor(money / 1000);
  money = money - 1000 * t;
  let fh = Math.floor(money / 500);
  money = money - 500 * fh;
  let h = Math.floor(money / 100);
  money = money - 100 * h;
  let ften = Math.floor(money / 50);
  money = money - 50 * ften;
  let ten = Math.floor(money / 10);
  money = money - 10 * ten;
  let one = Math.floor(money / 1);
  money = money - 1 * one;
  result.push(fm, m, ft, t, fh, h, ften, ten, one);
  return result;
}

module.exports = problem5;

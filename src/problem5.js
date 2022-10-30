function problem5(money) {
  const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
}

function map(f, iter) {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

module.exports = problem5;

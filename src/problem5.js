function divmod(x, y) {
  const q = Math.floor(x / y);
  const r = x - q * y;
  return [q, r];
}

function problem5(money) {
  const [q50000, r50000] = divmod(money, 50000);
  const [q10000, r10000] = divmod(r50000, 10000);
  const [q5000, r5000] = divmod(r10000, 5000);
  const [q1000, r1000] = divmod(r5000, 1000);
  const [q500, r500] = divmod(r1000, 500);
  const [q100, r100] = divmod(r500, 100);
  const [q50, r50] = divmod(r100, 50);
  const [q10, r10] = divmod(r50, 10);
  const q1 = r10;
  return [q50000, q10000, q5000, q1000, q500, q100, q50, q10, q1];
}

module.exports = problem5;

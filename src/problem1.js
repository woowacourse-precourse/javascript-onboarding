function problem1(pobi, crong) {
  var answer;
  let pobiPnt = 0,
    crongPnt = 0;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  pobi.forEach((e) => {
    let arr = String(e)
      .split("")
      .map((str) => Number(str));
    pobiPnt = Math.max(
      pobiPnt,
      arr.reduce((a, b) => (a *= b)),
      arr.reduce((a, b) => (a += b))
    );
  });
  crong.forEach((e) => {
    let arr = String(e)
      .split("")
      .map((str) => Number(str));
    crongPnt = Math.max(
      crongPnt,
      arr.reduce((a, b) => (a *= b)),
      arr.reduce((a, b) => (a += b))
    );
  });
  return answer;
}

module.exports = problem1;

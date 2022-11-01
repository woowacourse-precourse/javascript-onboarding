function problem1(pobi, crong) {
  var answer;
  var lp = sp(pobi[0]);
  var rp = sp(pobi[1]);
  var lc = sp(crong[0]);
  var rc = sp(crong[1]);
  var maxp = Math.max(lp.reduce(add), lp.reduce(mul), rp.reduce(add), rp.reduce(mul));
  var maxc = Math.max(lc.reduce(add), lc.reduce(mul), rc.reduce(add), rc.reduce(mul));
  console.log(pobi[0] + 1, crong, maxp, maxc, lp, rp);
  if (maxp === maxc) {
      answer = 0;
  }else if (maxp > maxc) {
      answer = 1;
  }else {
      answer = 2;
  }if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
      answer = -1;
  }

  return answer;
}
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function sp(v) {
  var result = String(v).split("").map(Number);
  return result;
}

module.exports = problem1;

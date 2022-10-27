function compare(scoreArr) {
  let big = 0;
  for (i = 0; i < scoreArr.length; i++) {
    String(scoreArr[i])
      .split("")
      .reduce((pv, cv) => Number(pv) + Number(cv)) > big
      ? (big = String(scoreArr[i])
          .split("")
          .reduce((pv, cv) => Number(pv) + Number(cv)))
      : (big = big);
    String(scoreArr[i])
      .split("")
      .reduce((pv, cv) => Number(pv) * Number(cv)) > big
      ? (big = String(scoreArr[i])
          .split("")
          .reduce((pv, cv) => Number(pv) * Number(cv)))
      : (big = big);
  }
  return big;
}

function problem1(pobi, crong) {
  let pobiScore = 0;
  let crongScore = 0;
  if (pobi.includes(400 || 1) || crong.includes(400 || 1)) return -1;
  crongScore = compare(crong);
  pobiScore = compare(pobi);
  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else return 2;
}

module.exports = problem1;

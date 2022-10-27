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

function problem1(pobi, crong) {}

module.exports = problem1;

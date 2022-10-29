function problem5(money) {
  let restAmount = money;
  let units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  function getDigit(unit) {
    let N = Math.floor(restAmount / unit);
    restAmount = restAmount - N * unit;
    return N;
  }
  let getDigitArr = units.map((v) => getDigit(v));
  return getDigitArr;
}

module.exports = problem5;

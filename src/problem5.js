function problem5(money) {
  let restAmount = money;
  let units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  function getUnitNumber(unit) {
    let N = Math.floor(restAmount / unit);
    restAmount = restAmount - N * unit;
    return N;
  }
  let getUnitNumberArr = units.map((v) => getUnitNumber(v));
  return getUnitNumberArr;
}

module.exports = problem5;

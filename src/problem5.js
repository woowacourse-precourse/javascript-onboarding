function sheetChashCheck(currentCash, cashUnit) {
  return parseInt(currentCash / cashUnit);
}
function currentCashCheck(sheetCash, cashUnit) {
  return sheetCash * cashUnit;
}

function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let sheetCash = 0;
  let index = 0;
  let currentCash = money;
  for (let cashUnit of won) {
    if (currentCash % cashUnit === currentCash) {
      index++;
      continue;
    }
    sheetCash = sheetChashCheck(currentCash, cashUnit);
    answer[index] = sheetCash;
    currentCash -= currentCashCheck(sheetCash, cashUnit);
    index++;
  }
  return answer;
}

module.exports = problem5;

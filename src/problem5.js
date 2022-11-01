function problem5(money) {
  var answer = [];
  return bigUnitReturn(money, answer);;
}

module.exports = problem5;

function bigUnitReturn(money, answer) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // money units

  for (let i = 0; i < units.length; i++) {
    if (Math.floor(money / units[i]) >= 1) {
      answer.push(Math.floor(money / units[i])); // push the number of units
      money -= units[i] * Math.floor(money / units[i]);
    } else {
      answer.push(0); // push 0 if the current unit does not fit in
    }
  }
  return answer;
}

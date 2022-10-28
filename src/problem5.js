function errorHandling(money) {
  if (money < 1 || money > 1000000) return false;
  if (!Number.isInteger(money)) return false;
  return true;
}
function classfication(result, money) {
  let start = 50000;
  result = result.map((item, index) => {
    item += parseInt(money / start);
    money = parseInt(money % start);
    if (start === 10) {
      start /= 10;
    } else if (index % 2 === 0) {
      start /= 5;
    } else {
      start /= 2;
    }
    return item;
  });
  return result;
}
function makeArray(number) {
  return new Array(number).fill(0);
}
function problem5(money) {
  if (!errorHandling(money)) return -1;
  let answer = makeArray(9);
  return classfication(answer, money);
}

module.exports = problem5;

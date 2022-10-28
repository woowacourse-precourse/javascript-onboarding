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
  let answer = makeArray(9);
  return classfication(answer, money);
}

module.exports = problem5;

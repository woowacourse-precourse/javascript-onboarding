function problem5(money) {
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let result = []; 
  for(let i = 0; i < moneyArr.length; i++) {
    result.push(Math.floor(money / moneyArr[i]));
    money =  money % moneyArr[i];
  }
  return result;
}

module.exports = problem5;

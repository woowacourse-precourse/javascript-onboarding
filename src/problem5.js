function problem5(money) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let temp = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  for (let i = 0 ; i < 9 ; i++){
    result[i] = parseInt(money/temp[i])
    money -= result[i] * temp[i]
  }
  
  // 예외사항
  if (money < 1 || money > 1000000) result = "예외사항";
  return result;
}

module.exports = problem5;
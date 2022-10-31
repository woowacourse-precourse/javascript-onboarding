function problem5(money) {
  const cashList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const cashCount = new Array(9).fill(0); 
  let currentMoney = money; 
  let index = 0; 

  while (currentMoney > 0) {
    if (currentMoney >= cashList[index]) {
      currentMoney -= cashList[index];
      cashCount[index] += 1; 
    } else {
      index += 1;
    }
  }

  return cashCount;
}

module.exports = problem5;

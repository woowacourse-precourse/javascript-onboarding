function problem5(money) {
  const cashList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let cashCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let leftMoney = money;

  for (let i=0; i<cashList.length; i++){
    const quotient = parseInt(leftMoney/cashList[i]);
    if(quotient){
      cashCount[i] = quotient;
      leftMoney -= cashList[i]*quotient;
    }
  }

  return cashCount;
}

module.exports = problem5;

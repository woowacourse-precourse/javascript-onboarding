function problem5(money) {
  let answer = [];
  let unitOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1] ;

  let change = money;
  for(let i=0; i<unitOfMoney.length; i++){
    let quotient = parseInt(change/unitOfMoney[i]);
    change = change%unitOfMoney[i];
    answer.push(quotient);
  }

  return answer;
}

module.exports = problem5;

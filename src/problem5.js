function problem5(money) {
  const moneyArr = [50000,10000,5000,1000,500,100,50,10,1];
  let newMoneyArr = [];  

  for (element of moneyArr){
    let quotient = parseInt(money/element);
    newMoneyArr.push(quotient);
    money -= quotient*element;
  }
  return newMoneyArr
}

module.exports = problem5;

console.log(problem5(50237));
console.log(problem5(15000));
console.log(problem5(615000));
function problem5(money) {
  var answer = bankChanger(money)
  return answer;
}

function bankChanger(money){
  let result= [];
  let moneyList = [50000,10000,5000,1000,500,100,50,10,1];
  for(let item  of  moneyList){
    result.push(Math.floor(money/item));
    money = money%item;
  }
  return result;
}

module.exports = problem5;

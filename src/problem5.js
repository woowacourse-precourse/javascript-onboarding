function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;

function moneyTransform(money){
  let moneyCount=0;
  const resultArr=[];
  const list = [50000,10000,5000,1000,500,100,50,10,1];
  for(let item of list){
    moneyCount = Math.floor(money/item); 
    money = money - (item * Math.floor(money/item)); 
    resultArr.push(moneyCount);
  }
  return resultArr;
}
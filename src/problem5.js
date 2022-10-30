function forwalletcount(Money,union, wallet, index){
  wallet[index]+=parseInt(Money/union);
  Money-=parseInt(union*parseInt(Money/union));
  return Money;
}

function problem5(money) {
  let wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원
  let Money = money;
  while(Money>0){
    if(Money >=50000) {
      Money = forwalletcount(Money,50000, wallet, 0);
    }
    if(Money >=10000) {
      Money = forwalletcount(Money,10000, wallet, 1);
    }
    if(Money >=5000) {
      Money = forwalletcount(Money,5000, wallet, 2);
    }
    if(Money >=1000) {
      Money = forwalletcount(Money,1000, wallet, 3);
    }
    if(Money >=500) {
      Money = forwalletcount(Money,500, wallet, 4);
    }
    if(Money >=100) {
      Money = forwalletcount(Money,100, wallet, 5);
    }
    if(Money >=50) {
      Money = forwalletcount(Money,50, wallet, 6);
    }
    if(Money >=10) {
      Money = forwalletcount(Money,10, wallet, 7);
    }
    if(Money >= 1) {
      Money = forwalletcount(Money,1, wallet, 8);
    }
  }
  var answer;
  answer = wallet;
  return answer;
}

module.exports = problem5;

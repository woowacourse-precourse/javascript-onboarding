function forwalletcount(Money,union, wallet, index){
  wallet[index]+=parseInt(Money/union);
  Money-=parseInt(union*parseInt(Money/union));
  return Money;
}

function problem5(money) {
  let wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원
  let Money = money;
  let chunwon = 1000;
  let obakwon = 500;
  let bakwon = 100;
  let oshipwon = 50;
  let shipwon = 10;
  let won = 1;
  
  while(Money>0){

    if(Money >=omanwon) {
      Money = forwalletcount(Money,50000, wallet, 0)
    }
    if(Money >=manwon) {
      Money = forwalletcount(Money,10000, wallet, 1)
    }
    if(Money >=ochunwon) {
      Money = forwalletcount(Money,5000, wallet, 2)
    }
    if(Money >=chunwon) {
      wallet[3]+= parseInt(Money/chunwon);
      Money-= parseInt(chunwon*parseInt(Money/chunwon));
    }
    if(Money >=obakwon) {
      wallet[4]+= parseInt(Money/obakwon);
      Money-= parseInt(obakwon*parseInt(Money/obakwon));
    }
    if(Money >=bakwon) {
      wallet[5]+= parseInt(Money/bakwon);
      Money-= parseInt(bakwon*parseInt(Money/bakwon));
    }
    if(Money >=oshipwon) {
      wallet[6]+= parseInt(Money/oshipwon);
      Money-= parseInt(oshipwon*parseInt(Money/oshipwon));
    }
    if(Money >=shipwon) {
      wallet[7]+= parseInt(Money/shipwon);
      Money-= parseInt(shipwon*parseInt(Money/shipwon));
    }
    if(Money >=won) {
      wallet[8]+= parseInt(Money/won);
      Money-= parseInt(won*parseInt(Money/won));
    }
  }

  var answer;
  answer = wallet;
  return answer;
}

problem5(15000);
//module.exports = problem5;

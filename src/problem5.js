//예외사항
function exception(money){
  if(money<1 || money> 1000000) return true;
  return false;
}

//출금후 지갑에 담기
function withdraw(money){
  var wallet = [];
  let monetary_unit = 100000;
  for(let i = 0;i<8;i++){ //1원을 제외한 실행
    if(i % 2 == 0) monetary_unit = monetary_unit / 2;
    if(i % 2 == 1) monetary_unit = monetary_unit / 5;
    wallet.push(parseInt(money / monetary_unit))
    money = money % monetary_unit
  }
  wallet.push(parseInt(money / 1))
  return wallet
}

function problem5(money){
  if(exception(money)) return "제한사항을 지켜주세요.";
  return withdraw(money);
}
module.exports = problem5;

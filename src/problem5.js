function problem5(money) {
  var answer=moneyTransform(money);
  if(!error(money)){
    throw new Error('제한사항을 확인하세요.');
  }
  return answer;
}

module.exports = problem5;

function moneyTransform(money){
  let moneyCount=0;
  const resultArr=[];
  const list = [50000,10000,5000,1000,500,100,50,10,1];
  list.forEach((el)=>{
    moneyCount = Math.floor(money/el); 
    money = money - (el * Math.floor(money/el)); 
    resultArr.push(moneyCount);
  })
  return resultArr;
}

function error(money){
  if(money<1 || money>1000000){
    return false;
  }
  if(typeof(money)!=="number"){
    return false;
  }
  return true;
}
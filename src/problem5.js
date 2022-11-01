function problem5(money) {
  if(exception(money)) return false;
  return Divide(money);
}

const moneySort=[1,10,50,100,500,1000,5000,10000];

function Divide(money){
  const sortArr=moneySort.map(sort=>{
    const change=money%sort;
    const count=Math.trunc(money/sort);
    money=change;

    return count;
  })
  return sortArr;
}

function exception(money){
  if(money<1 || money>100000) return true;
  return false;
}
module.exports = problem5;

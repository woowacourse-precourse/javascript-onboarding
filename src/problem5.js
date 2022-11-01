const COST = [50000,10000,5000,1000,500,100,50,10,1];

function problem5(money) {
  let ans=[];
  for(let i = 0; i < COST.length ; i++){
    if(i === 0) {
      ans[i] = parseInt(money/COST[i]);
    }else {
      ans[i] = parseInt((money%COST[i-1])/COST[i]);
    }
  }
  return ans;
}

module.exports = problem5;

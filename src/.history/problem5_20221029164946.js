function problem5(money) {
  let answer = new Array();
  let coin = [50000,10000,5000,1000,500,100,50,10,1];
  for(let i=0;i<coin.length;i++){
  	answer.push(parseInt(money/coin[i]));
  	money = parseInt(money%coin[i]);
  }
  return answer;
}

module.exports = problem5;

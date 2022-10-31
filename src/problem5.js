function problem5(money) {
  
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for( let i =0; i<coins.length; i++){
    answer[i] = parseInt(money/coins[i], 10);
    money %= coins[i]; 
  };

  return answer;
}

module.exports = problem5;

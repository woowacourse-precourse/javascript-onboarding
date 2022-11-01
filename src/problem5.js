function countBill(money,bill){
  return Math.floor(money / bill)
}

function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  var bill = [50000,10000,5000,1000,500,100,50,10,1];
  for(let i = 0;i < 9;i++){
    answer[i] += countBill(money,bill[i]);
    money %= bill[i];
  }
  return answer;
}

module.exports = problem5;

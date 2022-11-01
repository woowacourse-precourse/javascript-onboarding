function problem5(money) {
  const bill = [50000,10000,5000,1000,500,100,50,10,1];
  var answer=[];
  for(let i=0; money!==0; i++) {
    const count = money / bill[i] >= 1 ? Math.floor(money/bill[i]) : 0;
    answer[i] = count;
    money = count > 0 ? money -= bill[i]*count : money;
  }
  return answer;
}

module.exports = problem5;

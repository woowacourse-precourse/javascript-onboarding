function problem5(money) {

  if(money < 1 || money > 1000000) {
    return false;
  }
  
  let moneyArr = [50000,10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(i=0; i<moneyArr.length; i++) {

    let count = Math.floor(money/moneyArr[i]);
   
    if(count >0){
      result[i] = count;
      money -= moneyArr[i]*count;
    } else result[i] = 0;
  }

  return result;
 }

module.exports = problem5

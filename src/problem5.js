function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let i = 0; i<bill.length; i++){
    if(money - bill[i] >= 0) {
      money -= bill[i];
      answer[i]++;
      i--;
    }
  }
  return answer;
}

module.exports = problem5;

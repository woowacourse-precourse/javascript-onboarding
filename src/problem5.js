function problem5(money) {
  const bill = [50000,10000,5000,1000,500,100,50,10,1];
  let answer = [];
  for (let i=0; i < 9; i++) {
    answer.push(parseInt(money / bill[i]));
    money %= bill[i];
  }
  return answer
}

module.exports = problem5;
function problem5(money) {
  var answer;
  answer = [];
  let bill = 50000;
  for (let i = 0; i < 9; i++) {
    let num;
    if (i === 0) {
      num = Math.floor(money / bill);
      money %= bill;
      answer.push(num);
    } 
    else if (i !== 8) {
      {
        if (i % 2 === 1) {
          bill /= 5;
          num = Math.floor(money / bill);
        }
        else if (i % 2 === 0) {
          bill /= 2;
          num = Math.floor(money / bill);
        }
        money %= bill;
        answer.push(num);
      }
    }
    else {
      answer.push(money);
    }
  }
  
  return answer;
}

module.exports = problem5;

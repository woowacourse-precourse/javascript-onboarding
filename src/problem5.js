function problem5(money) {
  let answer = [];
  answer.push(Math.floor(money / 50000));
  answer.push(Math.floor((money % 50000) / 10000));
  answer.push(Math.floor((money % 10000) / 5000));
  answer.push(Math.floor((money % 5000) / 1000));
  answer.push(Math.floor((money % 1000) / 500));
  answer.push(Math.floor((money % 500) / 100));
  answer.push(Math.floor((money % 100) / 500));
  answer.push(Math.floor((money % 50) / 10));
  answer.push(Math.floor((money % 10) / 1));
  return answer;
}

module.exports = problem5;

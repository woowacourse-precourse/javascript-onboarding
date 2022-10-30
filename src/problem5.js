function problem5(money) {
  let quotient = 0;
  let remainder = 0;
  let result = [];
  let paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(let i=0;i<paper.length;i++){
    quotient = Math.floor(money / paper[i]);
    remainder = money % paper[i];
    money=remainder
    result.push(quotient);
  }
  return result
}
problem5(15000);

module.exports = problem5;

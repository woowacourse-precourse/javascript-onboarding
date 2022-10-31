function problem5(money) {
  let quotient = 0;
  let remainder = 0;
  let result = [];
  let paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 몫과 나머지를 구해서 돈의 갯수만큼 반복
  for(let i=0;i<paper.length;i++){
    quotient = Math.floor(money / paper[i]);
    remainder = money % paper[i];
    money=remainder
    result.push(quotient);
  }
  return result
}


module.exports = problem5;

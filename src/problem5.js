function problem5(money) {
  var answer = [];
  let cashArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (let i = 0; i < cashArr.length; i++) {
    let count = Math.trunc(money / cashArr[i]) 
    answer[i] = count;
    money = money - cashArr[i] * count;
  }
  return answer;
}

module.exports = problem5;

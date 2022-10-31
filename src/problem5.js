function problem5(money) {
  let answer = [];
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for(let i = 0; i < moneyArr.length; i++) {
    answer[i] = Math.floor(money / moneyArr[i]);
    money = (money % moneyArr[i]);
  }
  return answer;
}

// 1. 개미일꾼이랑 비슷 ! 
// 2. 배열을 Return 해줘야함.
// 1 : 50000, 2 : 10000, 3 : 5000, 4 : 1000, 
// 5 : 500, 6 : 100, 7 : 50, 8 : 10, 9 : 1

module.exports = problem5;

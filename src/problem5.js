// < 기능 목록 >
// 1. 최대한 큰 금액 위주로 돈을 출금한다.    

function problem5(money) {
  var answer = [];
  var moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 배열 초기화
  for(var i = 0; i < 9; i++)
    answer[i] = 0;

  var i = 0;
  while(money > 0) {
    answer[i] = Math.floor(money/moneys[i]);
    money -= moneys[i] * answer[i];
    i++;
  }
  return answer;
}

console.log(problem5(15000));

module.exports = problem5;

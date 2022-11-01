/*필요한 기능
for loop으로 돈 iterate
각 단위로 나누어지는지 확인
각 결과물 array에 저장
결과물 리턴
*/

function problem5(money) {
  var answer = solution(money);
  return answer;
}

function solution(money) {
  let result = [0, 0, 0, 0, 0 ,0 , 0, 0, 0];
  let moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (var i=0; i<=moneyType.length-1; i++) {
    if (i == 0) {
      result[i] = Math.floor(money / moneyType[i]);
    } else {
      result[i] = Math.floor(Math.floor((money % moneyType[i-1])) / moneyType[i]);
    }
  }
  return result;
}

module.exports = problem5;

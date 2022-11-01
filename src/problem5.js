/*
  기능 목록
  1. 주어진 돈의 단위를 이용한 배열을 만든다.
  2. 주어진 돈을 단위로 나눈 몫을 배열에 넣는다.
  3. 주어진 돈을 단위로 나눈 나머지를 다시 주어진 돈으로 사용한다.
  4. 주어진 돈이 0이 될 때까지 2, 3번을 반복한다. (최소 단위가 1, 따라서 무조건 0이 되므로 조건 추가 X)
  5. 배열을 출력한다.
 */
function problem5(money) {
  var answer;
  const unitOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return answer;
}

function getNumberOfMoney(money, unitOfMoney) {
  // 주어진 돈을 단위로 나눈 몫을 배열에 넣는 함수
  let restOfMoney = money;
  let numberOfMoney = [];
  for (let i = 0; i < unitOfMoney.length; i++) {
    numberOfMoney.push(Math.floor(restOfMoney / unitOfMoney[i]));
    restOfMoney = restOfMoney % unitOfMoney[i];
  }
  return numberOfMoney;
}

module.exports = problem5;

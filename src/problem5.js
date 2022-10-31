//몫과 나머지를 구하는 함수
function divideNum(num, mon) {
  let quo = parseInt(num / mon);
  let left = num % mon;
  return [quo, left];
}

// 몫을 배열에 추가하고 나머지를 다시 divideNum 함수에 넣는 함수
function problem5(money) {
  let answer = [];
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(i of arr) {
    let [resultQuo, resultLeft] = divideNum(money, i)
    answer.push(resultQuo);
    money = resultLeft;
  }

  return answer;
}

module.exports = problem5;

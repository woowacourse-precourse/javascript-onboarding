// 돈을 각 단위의 화폐로 변환해주는 기능
function changeMoney(money) {
  let restMoney = money;
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = coins.reduce((acc, cur) => {
    const count = Math.floor(restMoney / cur);
    restMoney -= cur * count;
    acc.push(count);
    return acc;
  }, []);
  return result;
}

// solution
function solution(money) {
  console.log(changeMoney(money));
}

function problem5(money) {
  var answer;
  return answer;
}

solution(50237);

module.exports = problem5;

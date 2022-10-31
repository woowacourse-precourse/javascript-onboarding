function problem5(money) {
  var answer;
  answer = chargeChange(money);
  return answer;
}

function chargeChange(money) {
  // 1. 단위 별로 작성
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const arr = [];
  //2. 각각 단위 별로 나눈뒤 나뉜 값을 각각 array 항목에 담고 계산후 남은 돈을 다시 빼서 update
  unit.map((value) => {
    const chargeBills = Math.floor(money / value);
    arr.push(chargeBills);
    money = money - chargeBills * value;
  });
  return arr;
}

module.exports = problem5;

// 돈의 단위를 위한 상수
const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

// 돈의 단위 별 갯수 계산
function problem5(money) {
  const result = Array.from({length: 9}, () => 0);

  MONEY_UNIT.map((unit, idx)=> {
    if(parseInt(money / unit) > 0) {
      result[idx] = parseInt(money / unit);
      money = money % unit;
    }
  })
  return result;
}

module.exports = problem5;

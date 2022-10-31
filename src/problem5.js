// 돈의 단위를 위한 상수
const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

// 돈의 단위 별 갯수 계산
function problem5(money) {
  // 각 단위별 갯수를 저장하기 위한 배열 선언
  const result = Array.from({length: 9}, () => 0);

  // 단위를 순회
  MONEY_UNIT.map((unit, idx)=> {
    // 해당 단위로 나눈 몫이 0보다 크다면
    if(parseInt(money / unit) > 0) {
      // 몫을 갯수로 저장
      result[idx] = parseInt(money / unit);
      // 현재 남은 돈은 나머지가 됨
      money = money % unit;
    }
  })
  return result;
}

module.exports = problem5;

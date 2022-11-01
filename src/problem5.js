function problem5(money) {
  // 제한사항 만족하는지 체크
  if(/[^0-9]/g.test(money) || money < 1 || money > 1000000 || money % 1 !== 0) return false;

  const unitList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  let curMoney = money;
  for (let i = 0; i < unitList.length; i++) {
    const curUnit = checkMoneyUnit(curMoney, unitList[i]);
    result.push(curUnit);
    curMoney -= (unitList[i] * curUnit);
  };
  
  /**
   * 입력된 금액을 지정된 화폐권 단위로 변환 가능한 수를 구하는 함수
   * @param {number} num 변환 할 금액
   * @param {number} unit 화폐권 단위
   * @returns 변환 할 수 있는 화폐권 수
   */
  function checkMoneyUnit(num, unit){
    const checkUnit = Math.floor(num / unit)
    return checkUnit;
  };

  return result;
}

module.exports = problem5;

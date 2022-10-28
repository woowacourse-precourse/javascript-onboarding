function problem5(money) {
  const result = countByBillUnit(money);
}

function countByBillUnit(currentMoney) {
  const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const listLength = BILL_UNIT_LIST.length;
  let billCountList = new Array(listLength).fill(0);

  for (
    let currentUnitIndex = 0;
    currentUnitIndex < listLength;
    currentUnitIndex++
  ) {
    billCountList[currentUnitIndex] += Math.floor(
      currentMoney / BILL_UNIT_LIST[currentUnitIndex]
    );
  }

  return billCountList;
}

module.exports = problem5;

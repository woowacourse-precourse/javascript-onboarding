function problem5(money) {
  const checkedError = checkError(money);

  if (checkedError !== "Not Error") {
    return checkedError;
  }

  const result = countByBillUnit(money);

  return result;
}

function checkError(currentMoney) {
  if (!Number.isInteger(currentMoney)) {
    return "money는 자연수이어야 합니다.";
  }

  return "Not Error";
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
    const theNumbeOfBill = Math.floor(
      currentMoney / BILL_UNIT_LIST[currentUnitIndex]
    );

    if (theNumbeOfBill >= 1) {
      billCountList[currentUnitIndex] += theNumbeOfBill;

      currentMoney -= theNumbeOfBill * BILL_UNIT_LIST[currentUnitIndex];
    }
  }

  return billCountList;
}

module.exports = problem5;

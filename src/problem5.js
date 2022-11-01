function problem5(money) {
  const checkedError = checkError(money);

  if (checkedError === "Not Error") {
    const result = countByBillUnit(money);

    return result;
  }

  return checkedError;
}

function checkError(currentMoney) {
  const MINIMUM_NUMBER = 1;
  const MAXIMUN_NUMBER = 1000000;

  if (!Number.isInteger(currentMoney)) {
    return "money는 자연수이어야 합니다.";
  }

  if (currentMoney < MINIMUM_NUMBER || currentMoney > MAXIMUN_NUMBER) {
    return "money는 1 이상 1,000,000 이하인 자연수이어야 합니다.";
  }

  return "Not Error";
}

function countByBillUnit(currentMoney) {
  const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const MINIMUM_BILL_NUMBER = 1;
  const listLength = BILL_UNIT_LIST.length;
  let billCountList = new Array(listLength).fill(0);

  BILL_UNIT_LIST.forEach((bill, index) => {
    const theNumbeOfBill = Math.floor(currentMoney / bill);

    if (theNumbeOfBill >= MINIMUM_BILL_NUMBER) {
      billCountList[index] += theNumbeOfBill;

      currentMoney -= theNumbeOfBill * bill;
    }
  });

  return billCountList;
}

module.exports = problem5;

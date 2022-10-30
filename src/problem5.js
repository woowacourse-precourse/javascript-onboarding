function canDivide(money, index) {
  switch (index) {
    case 0:
      if (Math.floor(money / 50000) !== 0) {
        return {
          quotient: Math.floor(money / 50000),
          remainder: money % 50000,
        };
      } else {
        return false;
      }
    case 1:
      if (Math.floor(money / 10000) !== 0) {
        return {
          quotient: Math.floor(money / 10000),
          remainder: money % 10000,
        };
      } else {
        return false;
      }
    case 2:
      if (Math.floor(money / 5000) !== 0) {
        return {
          quotient: Math.floor(money / 5000),
          remainder: money % 5000,
        };
      } else {
        return false;
      }
    case 3:
      if (Math.floor(money / 1000) !== 0) {
        return {
          quotient: Math.floor(money / 1000),
          remainder: money % 1000,
        };
      } else {
        return false;
      }
    case 4:
      if (Math.floor(money / 500) !== 0) {
        return {
          quotient: Math.floor(money / 500),
          remainder: money % 500,
        };
      } else {
        return false;
      }
    case 5:
      if (Math.floor(money / 100) !== 0) {
        return {
          quotient: Math.floor(money / 100),
          remainder: money % 100,
        };
      } else {
        return false;
      }
    case 6:
      if (Math.floor(money / 50) !== 0) {
        return {
          quotient: Math.floor(money / 50),
          remainder: money % 50,
        };
      } else {
        return false;
      }
    case 7:
      if (Math.floor(money / 10) !== 0) {
        return {
          quotient: Math.floor(money / 10),
          remainder: money % 10,
        };
      } else {
        return false;
      }
    case 8:
      if (Math.floor(money / 1) !== 0) {
        return { quotient: Math.floor(money / 1), remainder: money % 1 };
      } else {
        return false;
      }
    default:
      console.log("error");
  }
}
function problem5(money) {
  let copiedMoney = money;
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < answer.length; i++) {
    const canDivideValue = canDivide(copiedMoney, i);
    if (canDivideValue !== false) {
      answer[i] = canDivideValue.quotient;
      copiedMoney = canDivideValue.remainder;
    }
  }
  return answer;
}

module.exports = problem5;

const problem1 = (pobi, crong) => {
  if (!checkException(pobi) || !checkException(crong)) {
    return -1;
  }
  let pobiNumber, crongNumber, answer;
  pobiNumber = getMyNumber(pobi);
  crongNumber = getMyNumber(crong);
  console.log("포비 : ", pobiNumber, " 크롱 : ", crongNumber);
  answer = whoWin(pobiNumber, crongNumber);
  return answer;
};

const checkException = (playerPages) => {
  let [leftNumber, rightNumber] = playerPages;
  if (1 <= leftNumber && leftNumber < 400 && leftNumber + 1 == rightNumber) {
    return true;
  }
  return false;
};

const getMyNumber = (pageList) => {
  numberList = [];
  pageList.map((pageNumber) => {
    digitList = pageNumber
      .toString()
      .split("")
      .map((digits) => parseInt(digits));
    let addNumber = digitList.reduce(
      (firstNumber, currentNumber) => firstNumber + currentNumber,
      0
    );
    let multipleNumber = digitList.reduce(
      (firstNumber, currentNumber) => firstNumber * currentNumber,
      1
    );
    numberList.push(Math.max(addNumber, multipleNumber));
  });
  return Math.max(...numberList);
};

const whoWin = (player1, player2) => {
  if (player1 > player2) return 1;
  else if (player2 > player1) return 2;
  else return 0;
};

module.exports = problem1;

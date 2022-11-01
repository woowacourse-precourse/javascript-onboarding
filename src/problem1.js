/*
 * <기능 목록>
 * 1. 페이지 번호가 유효한지를 확인하는 isValidPage() 함수.
 *     [페이지 번호가 invalid한 경우]
 *     (1) (왼쪽페이지번호 + 1 === 오른쪽페이지번호)가 아닐 경우
 *     (2) (왼쪽페이지번호 <= 1) 혹은 (오른쪽페이지번호 >= 400) 일 경우
 *     (3) 왼쪽페이지번호가 짝수일 경우
 * 2. 포비나 크롱의 페이지 번호가 유효하지 않으면 -1을 return 한다.
 * 3. 페이지 번호를 문자열 변환시켜 각 자리 숫자를 모두 더하거나 모두 곱했을 때 가장 큰 수를 반환하는 calcMaxNum()함수.
 * 4. 한 사용자의 왼쪽, 오른쪽 페이지 번호의 maxNum 중 큰 값을 반환하는 calcUserMaxNum() 함수.
 * 5. 포비와 크롱의 userMaxNum를 각각 변수에 저장하고 두 값을 비교하여 게임의 승부(0,1,2)를 반환하는 playGame() 함수.
 */

function problem1(pobi, crong) {
  if (!isValidInput(pobi, crong)) {
    return -1;
  }
  const gameResult = playGame(pobi, crong);

  return gameResult;
}

function isValidInput(pobi, crong) {
  let isValid;
  if (!(pobi.length == 2 && crong.length == 2)) {
    isValid = false;
  } else if (!(isValidPage(pobi) && isValidPage(crong))) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function isValidPage(pageNumbers) {
  const [pageNumLeft, pageNumRight] = pageNumbers;
  let isValid;

  if (pageNumLeft + 1 !== pageNumRight) {
    isValid = false;
  } else if (pageNumLeft <= 1 || pageNumRight >= 400) {
    isValid = false;
  } else if (pageNumLeft % 2 === 0) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function calcMaxNum(number) {
  const numStrings = number.toString();
  let addNum = 0;
  let mulNum = 1;
  let maxNum;

  for (let numString of numStrings) {
    let num = parseInt(numString);
    addNum += num;
    mulNum *= num;
  }

  if (addNum >= mulNum) {
    maxNum = addNum;
  } else {
    maxNum = mulNum;
  }

  return maxNum;
}

function calcUserMaxNum(numbers) {
  const [num1, num2] = numbers;
  const maxNum1 = calcMaxNum(num1);
  const maxNum2 = calcMaxNum(num2);
  let maxNum;

  if (maxNum1 >= maxNum2) {
    maxNum = maxNum1;
  } else {
    maxNum = maxNum2;
  }

  return maxNum;
}

function playGame(pobi, crong) {
  const pobiMaxNum = calcUserMaxNum(pobi);
  const crongMaxNum = calcUserMaxNum(crong);

  if (pobiMaxNum === crongMaxNum) {
    result = 0;
  } else if (pobiMaxNum > crongMaxNum) {
    result = 1;
  } else {
    result = 2;
  }

  return result;
}

module.exports = problem1;

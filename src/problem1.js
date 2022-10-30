const problem1 = (pobi, crong) => {
  let pobiNumber, crongNumber, answer;
  pobiNumber = getMyNumber(pobi);
  crongNumber = getMyNumber(crong);
  console.log("포비 : ", pobiNumber, " 크롱 : ", crongNumber);
  answer = whoWin(pobiNumber, crongNumber);

  return answer;
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
/* 
1. 책을 임의로 펼친다.  => 랜덤 함수를 통해 추출(문제에서 주어짐 => 구현 필요 x)
2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다. 
3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다
4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
=> 2, 3번 동일한 max함수를 만들어서 더 큰 값을 비교해서 가장 큰 값을 저장한다.
5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. => 예외 처리 (ex : 시작 페이지, 페이지가 연속적이지 않을 경우)
*/

module.exports = problem1;

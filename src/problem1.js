/* 
 * Features
 * 1. 두 수를 비교하여 큰 수 반환
 * 2. 한 페이지에서 합과 곱을 구해 비교 후 최댓값 반환
 * 3. 두 페이지 각각의 최댓값을 비교 후 큰 수 반환
 * 4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 
 *  
 * Exceptions
 * 1. pobi와 crong의 길이는 2이다. => length: 2 check
 * 2. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. => 범위 3~398 check
 * 3. pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 => 오른쪽 페이지 = 왼쪽페이지 + 1
 * 4. 왼쪽 페이지는 무조건 홀수 => 왼쪽페이지 % 2 === 1
 */

let isExceptions = false;
const isLengthError = (player1, player2) => player1.length !== 2 || player2.length !== 2
const isOutOfRange = page => !(page > 2 && page < 399)
const isDisorder = (firstPage, SecondPage) => SecondPage !== firstPage + 1
const isFirstPageOdd = firstPage => firstPage % 2 == 1
const compareNumWithNum = (num1, num2) => num1 >= num2 ? num1 : num2;
const getMaxValOnPage = page => {
  let sumVal = 0;
  let mulVal = 1;

  String(page).split("").map(num => {
    sumVal += Number(num);
    mulVal *= Number(num);
  })

  return compareNumWithNum(sumVal, mulVal);
}
const getMaxValOnPages = pages => {
  let leftScore = getMaxValOnPage(pages[0]);
  let rightScore = getMaxValOnPage(pages[1]);
  if (
    isDisorder(pages[0], pages[1]) || 
    isOutOfRange(pages[0]) || 
    isOutOfRange(pages[1]) ||
    !(isFirstPageOdd(pages[0]))
  ) {
    isExceptions = true;
  }

  return compareNumWithNum(leftScore, rightScore);
}

function problem1(pobi, crong) {
  let pobiScore = getMaxValOnPages(pobi);
  let crongScore = getMaxValOnPages(crong);
  if (isLengthError(pobi, crong)) {
    isExceptions = true;
  }

  if(isExceptions) {
    return -1;
  } else if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore === crongScore) {
    return 0;
  }
}

module.exports = problem1;

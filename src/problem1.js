/* 
 * Features
 * 1. 왼쪽페이지, 오른쪽페이지: 각 자리 숫자의 합, 곱을 구함
 * 2. 합, 곱 중 큰 수가 왼쪽페이지의  점수, 오른쪽 페이지의 점수
 * 3. 왼쪽 점수와  오른쪽 점수를 비교하여 최종 점수 산출
 * 4. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 
 *  
 * Exceptions
 * 1. pobi와 crong의 길이는 2이다. => length: 2 check
 * 2. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. => 범위 3~398 check
 * 3. pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 => 오른쪽 페이지 = 왼쪽페이지 + 1
 * 4. 왼쪽 페이지는 무조건 홀수 => 왼쪽페이지 % 2 === 1
 */

var isExceptions = false;

const compareNumWithNum = (num1, num2) => {
  return num1 >= num2 ? num1 : num2;
}

const getMaxValOnPage = page => {
  var sumVal = 0;
  var mulVal = 1;

  String(page).split("").map((num) => {
    sumVal += Number(num);
    mulVal *= Number(num);
  })

  return compareNumWithNum(sumVal, mulVal);
}

const getMaxValOnPages = pages => {
  var leftScore = getMaxValOnPage(pages[0]);
  var rightScore = getMaxValOnPage(pages[1]);
  
  // Exception 2 || Exception 3 || Exception 4
  if (
    (pages[1] !== pages[0] + 1) || 
    (pages[0] % 2 !== 1) || 
    !(pages[0] > 2 && pages[0] < 399) ||
    !(pages[1] > 2 && pages[1] < 399)
  ) {
    isExceptions = true;
  }

  return compareNumWithNum(leftScore, rightScore);
}

function problem1(pobi, crong) {
  var answer;
  var pobiScore = getMaxValOnPages(pobi);
  var crongScore = getMaxValOnPages(crong);

  // Exception 1
  if (pobi.length !== 2 || crong.length !== 2) {
    isExceptions = true;
  }

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  }

  if(isExceptions) return -1;

  return answer;
}

module.exports = problem1;

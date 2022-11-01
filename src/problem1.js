/*
--기능 목록--

1. 각 플레이어(pobi,crong)의 값이 유의한 값인지 판별한다.
    - pobi와 crong의 길이가 2인지 확인, 그렇지 않다면 false를 리턴
    - 펼친 페이지의 왼쪽 페이지가 홀수, 오른쪽 페이지가 짝수인지 확인, 그렇지 않다면 false를 리턴
    - 주어진 오른쪽 페이지가 왼쪽페이지보다 1만큼 큰 지 확인, 그렇지 않다면 false를 리턴
    - 첫 페이지 혹은 마지막 페이지인지 확인, 그렇지 않다면 false를 리턴
    - 위 조건을 모두 통과한 경우, true를 리턴

2. 규칙에 따라 각 플레이어별로 가장 큰 수를 구한다.
    - 플레이어가 펼친 왼쪽 페이지의 각 자리 숫자를 모두 더하거나 곱해 가장 큰 수를 구한다.
    - 오른쪽 페이지의 각 자리 숫자를 모두 더하거나 곱해 가장 큰 수를 구한다.
    - 왼쪽과 오른쪽 페이지의 가장 큰 수 중, 더 큰 값을 리턴한다.

3. 위에서 구한 결과 값과 규칙에 따라 게임을 진행한다.
    - 각 플레이어의 값이 유의하지 않은 경우, -1을 리턴 
    - pobi의 가장 큰 수가 crong보다 큰 경우(pobi가 이긴 경우), 1을 리턴
    - crong의 가장 큰 수가 pobi보다 큰 경우(crong이 이긴 경우), 2를 리턴
    - 둘의 가장 큰 수가 같은 경우(무승부), 0을 리턴
    
*/

function problem1(pobi, crong) {
  return playGame(pobi, crong);
}

const playGame = (pobi, crong) => {
  if (!checkAvailable(pobi) || !checkAvailable(crong)) return -1;

  const biggestNumberOfPobi = makeBiggestNumber(pobi);
  const biggestNumberOfCrong = makeBiggestNumber(crong);

  if (biggestNumberOfPobi > biggestNumberOfCrong) return 1;
  else if (biggestNumberOfPobi < biggestNumberOfCrong) return 2;
  else return 0;
};

const checkAvailable = (pages) => {
  const [leftPage, rightPage] = pages;

  if (pages.length !== 2) return false;
  if (rightPage % 2 !== 0 || leftPage % 2 !== 1) return false;
  if (rightPage - leftPage !== 1) return false;
  if (rightPage === 400 || leftPage === 1) return false;

  return true;
};

const makeBiggestNumber = (pages) => {
  const [biggestNumberOfLeft, biggestNumberOfRight] = pages.map((page) => {
    let [resultOfSum, resultOfMultiplication] = [0, 1];
    const eachDigits = String(page).split("");

    eachDigits.forEach((digit) => {
      digit = Number(digit);
      resultOfSum += digit;
      resultOfMultiplication *= digit;
    });

    return Math.max(resultOfSum, resultOfMultiplication);
  });

  return Math.max(biggestNumberOfLeft, biggestNumberOfRight);
};

module.exports = problem1;

function exceptionCase(arr) {
  //예외 사항 처리 함수, 예외 사항인 경우 true를 반환
  //페이지 번호가 1부터 400 사이의 범위 밖인 경우
  if (arr[0] < 1 || arr[0] > 400 || arr[1] < 1 || arr[1] > 400) return true;

  //페이지 번호가 자연수가 아닌 경우
  if (arr[0] % 1 !== 0 || arr[1] % 1 !== 0) return true;

  //왼쪽 페이지 번호가 홀수가 아닌 경우
  if (arr[0] % 2 === 0) return true;

  //오른쪽 페이지 번호가 짝수가 아닌 경우
  if (arr[1] % 2 !== 0) return true;

  //두 페이지가 연속된 숫자가 아닌 경우
  if (arr[1] !== arr[0] + 1) return true;
}

function getDigitSum(page) {
  let sum = 0; //sum을 0으로 초기화한다.
  while (page > 0) {
    //page가 0이 될 때까지
    sum += page % 10; //page의 1의 자릿수를 더한 다음,
    page = parseInt(page / 10); //page의 1의 자릿수는 버린다.
  }
  return sum;
}

function getDigitMultiply(page) {
  let multiply = 1; //multiply를 1로 초기화한다.
  while (page > 0) {
    //page가 0이 될 때까지
    multiply *= page % 10; //page의 1의 자릿수를 곱한 다음,
    page = parseInt(page / 10); //page의 1의 자릿수는 버린다.
  }
  return multiply;
}

function getBigger(page) {
  let sum = getDigitSum(page);
  let multiply = getDigitMultiply(page);

  if (sum > multiply)
    //각 자릿수 합이 곱보다 크다면
    return sum; //합을 반환한다.
  else if (sum <= multiply)
    //각 자릿수 곱이 합보다 크거나 같다면
    return multiply; //곱을 반환한다.
}

function getScore(pages) {
  let leftPage = getBigger(pages[0]);
  let rightPage = getBigger(pages[1]);

  if (leftPage > rightPage)
    //왼쪽 페이지 연산이 오른쪽 페이지 연산보다 크다면
    return leftPage; //왼쪽 페이지 연산을 본인의 점수로 한다.
  else if (leftPage <= rightPage)
    //오른쪽 페이지 연산이 왼쪽 페이지 연산보다 크다면
    return rightPage; //오른쪽 페이지 연산을 본인의 점수로 한다.
}

function getWinner(player1, player2) {
  let playerScore1 = getScore(player1);
  let playerScore2 = getScore(player2);

  if (playerScore1 > playerScore2)
    //플레이어 1의 점수가 더 높다면
    return 1; //1을 반환한다.
  else if (playerScore1 < playerScore2)
    //플레이어 2의 점수가 더 높다면
    return 2; //2를 반환한다.
  else if (playerScore1 === playerScore2)
    //두 플레이어의 점수가 같다면
    return 0; //무승부이므로 0을 반환한다.
}

function problem1(pobi, crong) {
  var answer;
  if (exceptionCase(pobi) || exceptionCase(crong)) return -1;
  answer = getWinner(pobi, crong);
  return answer;
}

module.exports = problem1;

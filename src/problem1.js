function problem1(pobi, crong) {
  let answer;
  let pobiScore, crongScore;
  if (isValid(pobi) && isValid(crong)) {
    pobiScore = calculateScore(pobi);
    crongScore = calculateScore(crong);
  } else {
    answer = -1;
  }
  return answer;
}

/*
배열값이 유효한지 확인하는 함수
1. 왼쪽 페이지 번호가 홀수인지
2. 오른쪽 페이지 번호가 짝수인지
3. 왼쪽, 오른쪽 페이지 번호 차이가 1인지
*/
function isValid(bookArray) {
  if (
    bookArray[0] % 2 === 1 &&
    bookArray[1] % 2 === 0 &&
    bookArray[1] - bookArray[0] === 1
  )
    return true;
  else return false;
}

/*
본인의 점수를 구하는 함수
1. 왼쪽, 오른쪽 페이지 번호의 각 자리수의 곱과 합 구하기
2. 1의 결과값 중 가장 큰 값 구하기
*/
function calculateScore(bookArray) {
  let score = 0;
  
  for (int i = 0; i < bookArray.length; i++) {
    let plusScore = 0;
    let multiplyScore = 1;

    while (bookArray[i] > 0) {
      plusScore += bookArray % 10;
      multiplyScore *= bookArray % 10;
      bookArray = parseInt(bookArray / 10);
    }

    if (plusScore > score || multiplyScore > score) {
      if (plusScore >= multiplyScore) score = plusScore;
      else score = multiplyScore;
    }
  }
  return score;
}
module.exports = problem1;

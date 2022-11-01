function problem1(pobi, crong) {
  var answer;

  if (exception(pobi, crong)) {
    answer = -1;
  } else {
    // 포비와 크롱의 왼쪽, 오른쪽 페이지를 일의 자리 단위로 끊는다.
    const leftPagePobi = pobi[0].toString().trim().split("").map(Number);
    const rightPagePobi = pobi[1].toString().trim().split("").map(Number);
    const leftPageCrong = crong[0].toString().trim().split("").map(Number);
    const rightPageCrong = crong[1].toString().trim().split("").map(Number);

    // 배열의 첫번째 값은 페이지 번호의 각 자리 숫자를 더한 값이고,
    // 배열의 두번째 값은 페이지 번호의 각 자리 숫자를 곱한 값이다. 각각 0과 1로 값을 초기화한다.
    // 포비의 좌우 페이지와 크롱의 좌우 페이지를 각 자리 숫자의 합과 곱으로 계산한 값이 들어간다.
    // 다시 할당을 받을 수 있도록 let으로 선언한다.
    let calLeftPobi = [0, 1];
    let calRightPobi = [0, 1];
    let calLeftCrong = [0, 1];
    let calRightCrong = [0, 1];

    // 계산 함수를 사용해 포비와 크롱의 각 자리 수의 합과 곱을 구한다.
    calLeftPobi = calculatePageNumber(leftPagePobi, calLeftPobi);
    calRightPobi = calculatePageNumber(rightPagePobi, calRightPobi);
    calLeftCrong = calculatePageNumber(leftPageCrong, calLeftCrong);
    calRightCrong = calculatePageNumber(rightPageCrong, calRightCrong);

    // 포비와 크롱의 점수를 계산한다.
    const scorePobi =
      Math.max(...calLeftPobi) > Math.max(...calRightPobi)
        ? Math.max(...calLeftPobi)
        : Math.max(...calRightPobi);
    const scoreCrong =
      Math.max(...calLeftCrong) > Math.max(...calRightCrong)
        ? Math.max(...calLeftCrong)
        : Math.max(...calRightCrong);

    // 결과값을 비교해 포비의 결과값이 더 크다면 1을, 크롱의 결과값이 더 크다면 2를, 예외상황이 발생한 경우 0을 return값으로 반환한다.
    if (scorePobi > scoreCrong) answer = 1;
    else if (scorePobi < scoreCrong) answer = 2;
    else if (scorePobi == scoreCrong) answer = 0;
  }

  return answer;
}

function exception(person1, person2) {
  // 포비와 크롱이 펼친 페이지가 연속되지 않거나,
  // 왼쪽 페이지가 짝수일 경우와 홀수일 경우가 예외사항이므로
  // 예외상황이 발생 할 경우 참을, 아닐 경우 거짓을 리턴한다.

  if (
    person1[0] % 2 != 1 ||
    person1[1] % 2 != 0 ||
    person1[0] + 1 != person1[1] ||
    person2[0] % 2 != 1 ||
    person2[1] % 2 != 0 ||
    person2[0] + 1 != person2[1]
  )
    return true;
  else return false;
}

function calculatePageNumber(pageNumber, calculatedNumber) {
  pageNumber.forEach((ele) => {
    calculatedNumber[0] += ele; // 페이지 각 자리 수 덧셈
    calculatedNumber[1] *= ele; // 페이지 각 자리 수 곱셈
  });
  return calculatedNumber;
}

module.exports = problem1;
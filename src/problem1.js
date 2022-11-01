function problem1(pobi, crong) {
  var answer;

  if (exception(pobi, crong)) {
    answer = -1;
    return answer;
  }
  {
    // 포비와 크롱의 왼쪽, 오른쪽 페이지
    const leftPagePobi = pobi[0].toString().trim().split("").map(Number);
    const rightPagePobi = pobi[1].toString().trim().split("").map(Number);
    const leftPageCrong = crong[0].toString().trim().split("").map(Number);
    const rightPageCrong = crong[1].toString().trim().split("").map(Number);

    // 두명의 양쪽 페이지 계산값 변수 선언
    let calLeftPobi = [0, 1];
    let calRightPobi = [0, 1];
    let calLeftCrong = [0, 1];
    let calRightCrong = [0, 1];

    // 페이지별 각 자리수 합, 곱 계산
    calLeftPobi = calculatePageNumber(leftPagePobi, calLeftPobi);
    calRightPobi = calculatePageNumber(rightPagePobi, calRightPobi);
    calLeftCrong = calculatePageNumber(leftPageCrong, calLeftCrong);
    calRightCrong = calculatePageNumber(rightPageCrong, calRightCrong);

    // 포비, 크롱 점수 계산
    const scorePobi =
      Math.max(...calLeftPobi) > Math.max(...calRightPobi)
        ? Math.max(...calLeftPobi)
        : Math.max(...calRightPobi);
    const scoreCrong =
      Math.max(...calLeftCrong) > Math.max(...calRightCrong)
        ? Math.max(...calLeftCrong)
        : Math.max(...calRightCrong);

    // 결과 값 비교 후 정답 return
    if (scorePobi > scoreCrong) answer = 1;
    if (scorePobi < scoreCrong) answer = 2;
    if (scorePobi == scoreCrong) answer = 0;
  }

  return answer;
}

// 예외 상황 함수
function exception(person1, person2) {
  if (
    person1[0] % 2 != 1 ||
    person1[1] % 2 != 0 ||
    person1[0] + 1 != person1[1] ||
    person2[0] % 2 != 1 ||
    person2[1] % 2 != 0 ||
    person2[0] + 1 != person2[1]
  ) {
    return true;
  }
  return false;
}

function calculatePageNumber(pageNumber, calculatedNumber) {
  pageNumber.forEach((ele) => {
    calculatedNumber[0] += ele; // 페이지 각 자리 수 덧셈
    calculatedNumber[1] *= ele; // 페이지 각 자리 수 곱셈
  });
  return calculatedNumber;
}

module.exports = problem1;

function problem1(pobi, crong) {
  var answer;
  //예외 상황일 경우 -1을 return
  if (
    pobi[0] % 2 != 1 ||
    pobi[1] % 2 != 0 ||
    pobi[0] + 1 != pobi[1] ||
    crong[0] % 2 != 1 ||
    crong[1] % 2 != 0 ||
    crong[0] + 1 != crong[1]
  ) {
    answer = -1;
    return answer;
  }
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
  leftPagePobi.forEach((ele) => {
    calLeftPobi[0] += ele;
    calLeftPobi[1] *= ele;
  });
  rightPagePobi.forEach((ele) => {
    calRightPobi[0] += ele;
    calRightPobi[1] *= ele;
  });
  leftPageCrong.forEach((ele) => {
    calLeftCrong[0] += ele;
    calLeftCrong[1] *= ele;
  });
  rightPageCrong.forEach((ele) => {
    calRightCrong[0] += ele;
    calRightCrong[1] *= ele;
  });
  
  return answer;
}

module.exports = problem1;

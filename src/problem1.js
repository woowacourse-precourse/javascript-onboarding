function problem1(pobi, crong) {
  let answer;

  // 기능 1
  const afterCheckPobi = checkException(pobi);
  const afterCheckCrong = checkException(crong);

  console.log(afterCheckPobi, afterCheckCrong);

  if (afterCheckPobi && afterCheckCrong) {
    // 기능 2
    const maxPobi = calculation(pobi);
    const maxCrong = calculation(crong);

    console.log("maxPobi, maxCrong: ", maxPobi, maxCrong);
    // maxPobi, maxCrong:  72 72
    
    // 기능 3
  } else { // 예외사항이 발생한 경우
    answer = -1;
    return answer;
  }

  return answer;
}

// 기능 1. 입력 배열의 예외사항 체크
function checkException(pageList) {
  
  // 연속적인지 체크
  if (pageList[1] - pageList[0] != 1) {
    return false;
  }

  // 범위 체크
  if (pageList[0] <= 1 || pageList[1] >= 400) {
    return false;
  }

  // 홀수, 짝수 체크
  if (pageList[0] % 2 == 0 || pageList[1] % 2 == 1) {
    return false;
  }

  // 모두 만족하면 true
  return true;
}

// 기능 2. 계산하기
function calculation(pageList) {

  const leftPage = pageList[0].toString();
  const rightPage = pageList[1].toString();
  let totalPage = []; // 더하기 또는 곱하기 계산된 결과들

  console.log("leftPage, rightPage: ", leftPage, rightPage);
  // leftPage, rightPage:  97 98

  let leftPagePlace = []; // 왼쪽 페이지 자릿수
  let rightPagePlace = []; // 오른쪽 페이지 자릿수

  // 기능 2.1 자릿수로 구분하기
  for (let i = 0; i < leftPage.length; i++) {
    leftPagePlace.push(Number(leftPage[i]));
  }
  for (let i = 0; i < rightPage.length; i++) {
    rightPagePlace.push(Number(rightPage[i]));
  }
  console.log("leftPagePlace, rightPagePlace: ", leftPagePlace, rightPagePlace);
  // leftPagePlace, rightPagePlace:  [ 9, 7 ] [ 9, 8 ]

  // 기능 2.1.1 자릿수 더하기
  let leftSum = 0;
  let rightSum = 0;

  for (let element of leftPagePlace) {
    leftSum += element;
  }
  totalPage.push(leftSum);

  for (let element of rightPagePlace) {
    rightSum += element;
  }
  totalPage.push(rightSum);

  // 기능 2.1.2 자릿수 곱하기
  let leftMul = 1;
  let rightMul = 1;

  for (let element of leftPagePlace) {
    leftMul *= element;
  }
  totalPage.push(leftMul);

  for (let element of rightPagePlace) {
    rightMul *= element;
  }
  totalPage.push(rightMul);

  console.log(totalPage);
  // [ 16, 17, 63, 72 ]

  // 기능 2.2 최댓값 선택하기
  return Math.max.apply(null, totalPage);
}


// 기능 3. 둘의 점수 비교하여 결과 리턴하기

pobi = [97, 98];
// pobi = [1, 2];
crong = [197, 198];

problem1(pobi, crong);

// module.exports = problem1;
